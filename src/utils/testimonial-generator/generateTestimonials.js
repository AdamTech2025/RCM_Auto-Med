import OpenAI from 'openai';
import { serverEnv } from '../../config/server-env.js';
import { saveTestimonials, saveDailyTestimonials } from '../../services/testimonials-server.js';

// Check for API key with better logging
const apiKey = serverEnv.openaiApiKey;
console.log('API Key Status:', apiKey ? 'Present' : 'Missing');

if (!apiKey) {
  console.warn('Warning: API key not found. Testimonial generation will be disabled.');
}

// Configure OpenAI client with OpenRouter base URL
const openai = apiKey ? new OpenAI({
  apiKey: apiKey,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://www.adambilling.com', // Required for OpenRouter
    'X-Title': 'RCM Auto-Med', // Optional, shows in rankings
  },
}) : null;

// Generate realistic rating between 4-5 (whole numbers only)
const generateRealisticRating = () => {
  // Weight heavily towards 4-star ratings, with fewer 5-star ratings
  const weightedRatings = [
    ...Array(7).fill(4), // 4★ (most common - 70%)
    ...Array(3).fill(5)  // 5★ (less common - 30%)
  ];
  return weightedRatings[Math.floor(Math.random() * weightedRatings.length)];
};

const generateTestimonial = async (specialty) => {
  try {
    if (!openai) {
      console.log('⚠️  AI Generation: API key not configured, using fallback testimonial');
      throw new Error('API key not configured');
    }

    console.log(`🤖 AI Generation: Generating testimonial for ${specialty}...`);

    const realisticRating = generateRealisticRating();

    const prompt = `Generate a realistic, authentic healthcare testimonial for a ${specialty} provider. Make it feel genuine and natural, not overly promotional. Include:
    
    1. A realistic name with appropriate credentials (MD, DO, RN, BSN, CPA, etc.)
    2. Their role and practice name (make it believable, not too fancy)
    3. Their specialty and years of experience (realistic range: 5-20 years)
    4. An honest testimonial about RCM services (2-3 sentences, mention specific benefits but keep it conversational)
    5. Realistic key results (use believable numbers, not exaggerated claims)
    6. A rating of exactly ${realisticRating} (this should reflect the content - if rating is 4.2, mention minor areas for improvement)
    7. Two initials for avatar based on the name

    Important guidelines:
    - Sound like a real healthcare professional, not a marketing copy
    - Include specific but realistic improvements (10-35% increases, not 100%+)
    - If rating is below 5.0, subtly mention why (e.g., "still room for improvement in..." or "initially had some challenges but...")
    - Use professional but conversational language
    - Include relevant keywords naturally: RCM, revenue cycle management, medical billing, claims processing
    - Make practice names sound realistic (avoid "Perfect" or "Ultimate" type names)

    Format the response as a JSON object with these fields:
    {
      "name": "",
      "role": "",
      "specialty": "",
      "content": "",
      "results": "",
      "rating": ${realisticRating},
      "avatar": ""
    }`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "openai/gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content);
    // Ensure the rating matches what we requested
    result.rating = realisticRating;
    
    console.log(`✅ AI Generation: Successfully generated testimonial for ${specialty} - ${result.name} (${result.rating}★)`);
    return result;
  } catch (error) {
    console.error(`❌ AI Generation Failed for ${specialty}:`, error.message);
    console.log(`🔄 Fallback: Using fallback testimonial for ${specialty}`);
    
    // Return a realistic fallback testimonial with varied rating
    const fallbackRating = generateRealisticRating();
    const fallbackContent = fallbackRating < 5.0 
      ? "This RCM company has significantly improved our practice efficiency. Their revenue cycle management solution streamlined our billing processes, though we initially had some integration challenges that were eventually resolved."
      : "This RCM company has transformed our practice's efficiency. Their comprehensive revenue cycle management solution streamlined our billing processes and improved collections significantly.";
    
    return {
      name: "Dr. Sarah Johnson, MD",
      role: "Medical Director, Johnson Family Practice",
      specialty: `${specialty} - 12 Years Experience`,
      content: fallbackContent,
      results: fallbackRating < 5.0 ? "25% increase in collections, 30% reduction in denials" : "30% increase in collections, 40% reduction in denials",
      rating: fallbackRating,
      avatar: "SJ"
    };
  }
};

const specialties = [
  "Mental Health",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
  "Behavioral Health",
  "Sports Medicine",
  "Rehabilitation Medicine",
  "Pain Management",
  "Neurology",
  "Orthopedics"
];

export const generateTestimonials = async (count = 6) => {
  try {
    console.log(`🚀 Starting testimonial generation process for ${count} testimonials...`);
    const testimonials = [];
    const selectedSpecialties = specialties
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    let aiGeneratedCount = 0;
    let fallbackCount = 0;

    for (const specialty of selectedSpecialties) {
      const testimonial = await generateTestimonial(specialty);
      
      // Check if this was AI generated or fallback
      if (testimonial.name === "Dr. Sarah Johnson, MD") {
        fallbackCount++;
      } else {
        aiGeneratedCount++;
      }
      
      testimonials.push({
        id: testimonials.length + 1,
        ...testimonial
      });
    }

    console.log(`📊 Generation Summary: ${aiGeneratedCount} AI-generated, ${fallbackCount} fallback testimonials`);
    console.log(`⭐ Rating Distribution: ${testimonials.map(t => t.rating).join(', ')}`);

    // Save to MongoDB
    await saveTestimonials(testimonials);
    console.log('✅ Testimonials generated and saved to MongoDB successfully');

    return testimonials;
  } catch (error) {
    console.error('❌ Error generating testimonials:', error);
    console.log('🔄 Using complete fallback system - all testimonials will be fallback');
    
    // Return realistic fallback testimonials with varied ratings
    const fallbackTestimonials = Array(count).fill(null).map((_, index) => {
      const rating = generateRealisticRating();
      const content = rating < 5.0 
        ? "This RCM company has been helpful in improving our practice efficiency. Their revenue cycle management solution has streamlined our billing processes, though there's still room for improvement in some areas."
        : "This RCM company has been instrumental in improving our practice's efficiency. Their comprehensive revenue cycle management solution has helped us streamline our billing processes and improve our collections.";
      
      return {
        id: index + 1,
        name: `Dr. Provider ${index + 1}, MD`,
        role: `Medical Director, ${specialties[index % specialties.length]} Associates`,
        specialty: `${specialties[index % specialties.length]} - ${8 + Math.floor(Math.random() * 12)} Years Experience`,
        content: content,
        results: rating < 5.0 ? "20% increase in collections, 25% reduction in claim denials" : "30% increase in collections, 40% reduction in claim denials",
        rating: rating,
        avatar: `P${index + 1}`
      };
    });

    console.log(`📊 Fallback Summary: ${fallbackTestimonials.length} fallback testimonials created`);
    console.log(`⭐ Fallback Rating Distribution: ${fallbackTestimonials.map(t => t.rating).join(', ')}`);

    // Save fallback testimonials to MongoDB
    await saveTestimonials(fallbackTestimonials);
    return fallbackTestimonials;
  }
};

// New function for daily testimonial generation - generates only 1 testimonial per day
export const generateDailyTestimonial = async () => {
  try {
    console.log(`🚀 Starting daily testimonial generation (1 testimonial)...`);
    
    // Select a random specialty for today
    const selectedSpecialty = specialties[Math.floor(Math.random() * specialties.length)];
    console.log(`📝 Selected specialty for today: ${selectedSpecialty}`);
    
    const testimonial = await generateTestimonial(selectedSpecialty);
    
    // Check if this was AI generated or fallback
    const isAI = testimonial.name !== "Dr. Sarah Johnson, MD";
    const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
    console.log(`${generationType} testimonial generated: ${testimonial.name} (${testimonial.rating}★)`);
    
    // Get the current total count for proper ID assignment
    const { getAllTestimonials } = await import('../../services/testimonials-server.js');
    const existingTestimonials = await getAllTestimonials();
    
    const dailyTestimonial = {
      id: existingTestimonials.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...testimonial
    };

    // Save to MongoDB using the new daily save function
    const result = await saveDailyTestimonials([dailyTestimonial]);
    
    if (result.message === 'Already generated today') {
      console.log('✅ Daily testimonial already exists for today - skipping generation');
      return null;
    }
    
    console.log('✅ Daily testimonial generated and saved to MongoDB successfully');
    return dailyTestimonial;
    
  } catch (error) {
    console.error('❌ Error generating daily testimonial:', error);
    console.log('🔄 Using fallback daily testimonial');
    
    // Return realistic fallback testimonial if generation fails
    const selectedSpecialty = specialties[Math.floor(Math.random() * specialties.length)];
    const fallbackRating = generateRealisticRating();
    
    try {
      const { getAllTestimonials } = await import('../../services/testimonials-server.js');
      const existingTestimonials = await getAllTestimonials();
      
      const fallbackContent = fallbackRating < 5.0 
        ? "This RCM company has improved our practice efficiency. Their revenue cycle management solution streamlined our billing processes, though we had some initial setup challenges that were resolved over time."
        : "This RCM company has transformed our practice's efficiency. Their comprehensive revenue cycle management solution streamlined our billing processes and improved collections significantly.";
      
      const fallbackTestimonial = {
        id: existingTestimonials.length + 1,
        name: "Dr. Sarah Johnson, MD",
        role: "Medical Director, Johnson Family Practice",
        specialty: `${selectedSpecialty} - ${8 + Math.floor(Math.random() * 12)} Years Experience`,
        content: fallbackContent,
        results: fallbackRating < 5.0 ? "22% increase in collections, 28% reduction in denials" : "30% increase in collections, 40% reduction in denials",
        rating: fallbackRating,
        avatar: "SJ",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      console.log(`📊 Fallback daily testimonial created: ${fallbackTestimonial.name} (${selectedSpecialty}) - ${fallbackRating}★`);

      // Save fallback testimonial to MongoDB
      const result = await saveDailyTestimonials([fallbackTestimonial]);
      
      if (result.message === 'Already generated today') {
        console.log('✅ Daily testimonial already exists for today - skipping fallback generation');
        return null;
      }
      
      return fallbackTestimonial;
    } catch (dbError) {
      console.error('❌ Error with fallback testimonial generation:', dbError);
      return null;
    }
  }
};

export default generateTestimonials; 