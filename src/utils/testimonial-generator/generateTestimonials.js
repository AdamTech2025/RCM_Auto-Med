import OpenAI from 'openai';
import dotenv from 'dotenv';
import { saveTestimonials } from '../../services/testimonials';

dotenv.config();

// Check for API key with better logging
const apiKey = process.env.VITE_OPENAI_API_KEY;
console.log('API Key Status:', apiKey ? 'Present' : 'Missing');

if (!apiKey) {
  console.warn('Warning: API key not found. Testimonial generation will be disabled.');
}

// Configure OpenAI client with OpenRouter base URL
const openai = apiKey ? new OpenAI({
  apiKey: apiKey,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://your-site.com', // Required for OpenRouter
    'X-Title': 'RCM Auto-Med', // Optional, shows in rankings
  },
}) : null;

const generateTestimonial = async (specialty) => {
  try {
    if (!openai) {
      throw new Error('API key not configured');
    }

    const prompt = `Generate a concise, SEO-friendly healthcare testimonial for a ${specialty} provider. Keep it brief but impactful. Include:
    1. A realistic name with credentials (MD, DO, RN, etc.)
    2. Their role and practice name (keep it short)
    3. Their specialty and years of experience (one line)
    4. A brief testimonial about RCM services (2-3 sentences max)
    5. Key results (one line with specific numbers)
    6. A rating (always 5)
    7. Two initials for avatar

    Important SEO guidelines:
    - Use natural, conversational language
    - Include relevant keywords: RCM, revenue cycle management, medical billing, healthcare
    - Keep content concise and scannable
    - Focus on specific results and numbers
    - Make it authentic and relatable

    Format the response as a JSON object with these fields:
    {
      "name": "",
      "role": "",
      "specialty": "",
      "content": "",
      "results": "",
      "rating": 5,
      "avatar": ""
    }`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "openai/gpt-4-turbo-preview",
      response_format: { type: "json_object" },
    });

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error generating testimonial:', error);
    // Return a shorter fallback testimonial
    return {
      name: "Dr. John Smith, MD",
      role: "Medical Director, Smith Medical Center",
      specialty: `${specialty} - 10 Years Experience`,
      content: "This RCM company has transformed our practice's efficiency. Their comprehensive revenue cycle management solution streamlined our billing processes and improved collections significantly.",
      results: "30% increase in collections, 40% reduction in denials",
      rating: 5,
      avatar: "JS"
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
    const testimonials = [];
    const selectedSpecialties = specialties
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    for (const specialty of selectedSpecialties) {
      const testimonial = await generateTestimonial(specialty);
      testimonials.push({
        id: testimonials.length + 1,
        ...testimonial
      });
    }

    // Save to MongoDB
    await saveTestimonials(testimonials);
    console.log('Testimonials generated and saved to MongoDB successfully');

    return testimonials;
  } catch (error) {
    console.error('Error generating testimonials:', error);
    // Return fallback testimonials if generation fails
    const fallbackTestimonials = Array(count).fill(null).map((_, index) => ({
      id: index + 1,
      name: `Dr. Provider ${index + 1}, MD`,
      role: `Medical Director, Provider ${index + 1} Medical Center`,
      specialty: `${specialties[index % specialties.length]} - 10 Years Experience`,
      content: "This RCM company has been instrumental in improving our practice's efficiency. Their comprehensive revenue cycle management solution has helped us streamline our billing processes and improve our collections.",
      results: "30% increase in collections, 40% reduction in claim denials",
      rating: 5,
      avatar: `P${index + 1}`
    }));

    // Save fallback testimonials to MongoDB
    await saveTestimonials(fallbackTestimonials);
    return fallbackTestimonials;
  }
};

export default generateTestimonials; 