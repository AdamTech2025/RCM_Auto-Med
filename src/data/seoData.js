// SEO Data Configuration for Adam Billing Website
export const seoData = {
  home: {
    title: 'Expert Revenue Cycle Management & Medical Billing Services',
    description: 'Adam Billing provides comprehensive Revenue Cycle Management (RCM) services for healthcare providers. Expert medical billing, claims processing, denial management, and RCM automation. Increase revenue by 25% with our HIPAA-compliant solutions.',
    keywords: 'revenue cycle management, medical billing, RCM services, healthcare billing, claims processing, denial management, medical coding, healthcare revenue, billing automation, HIPAA compliant billing',
    structuredData: {
      "@context": "https://schema.org",
      "@type": ["Organization", "MedicalBusiness"],
      "name": "Adam Billing",
      "description": "Expert Revenue Cycle Management and Medical Billing Services for Healthcare Providers",
      "url": "https://www.adambilling.com",
      "logo": "https://www.adambilling.com/logo.png",
      "image": "https://www.adambilling.com/og-image-home.jpg",
      "telephone": "+1-800-ADAM-RCM",
      "email": "info@adambilling.com",
      "medicalSpecialty": [
        "Revenue Cycle Management",
        "Medical Billing Services",
        "Healthcare Administration"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "RCM Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medical Billing Services",
              "description": "Comprehensive medical billing and claims processing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Denial Management",
              "description": "Expert denial management and appeals processing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "RCM Automation",
              "description": "Advanced revenue cycle management automation"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5"
      }
    }
  },

  services: {
    title: 'Comprehensive RCM Services - Medical Billing & Healthcare Revenue Management',
    description: 'Complete Revenue Cycle Management services including medical billing, claims processing, denial management, credentialing, and RCM automation for healthcare practices of all sizes.',
    keywords: 'RCM services, medical billing services, healthcare revenue management, claims processing, denial management, medical credentialing, billing automation, healthcare practice management',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Revenue Cycle Management Services",
      "description": "Comprehensive RCM services including medical billing, claims processing, denial management, and billing automation for healthcare providers.",
      "provider": {
        "@type": "Organization",
        "name": "Adam Billing",
        "url": "https://www.adambilling.com"
      },
      "serviceType": "Revenue Cycle Management",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  dental: {
    title: 'Dental Practice RCM Services - Specialized Dental Billing Solutions',
    description: 'Expert dental practice revenue cycle management services. Specialized dental billing, insurance claims processing, and practice management solutions for dental offices.',
    keywords: 'dental billing, dental practice management, dental RCM, dental insurance claims, dental revenue cycle, orthodontic billing, oral surgery billing, dental practice automation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Dental Services",
      "description": "Specialized Revenue Cycle Management services for dental practices",
      "medicalSpecialty": "Dental Practice Management",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  'pain-management': {
    title: 'Pain Management Practice RCM - Specialized Billing for Pain Clinics',
    description: 'Expert revenue cycle management for pain management practices. Specialized billing for interventional procedures, chronic pain treatment, and pain clinic operations.',
    keywords: 'pain management billing, interventional pain billing, chronic pain RCM, pain clinic management, spine injection billing, nerve block billing, pain procedure coding',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Pain Management Services",
      "description": "Specialized Revenue Cycle Management services for pain management practices",
      "medicalSpecialty": "Pain Management",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  'physical-therapy': {
    title: 'Physical Therapy Practice RCM - PT Billing & Revenue Management',
    description: 'Comprehensive revenue cycle management for physical therapy practices. Expert PT billing, insurance verification, and practice management solutions.',
    keywords: 'physical therapy billing, PT practice management, rehabilitation billing, therapy RCM, occupational therapy billing, sports medicine billing, PT insurance claims',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Physical Therapy Services",
      "description": "Specialized Revenue Cycle Management services for physical therapy practices",
      "medicalSpecialty": "Physical Therapy",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  'mental-health': {
    title: 'Mental Health Practice RCM - Behavioral Health Billing Solutions',
    description: 'Specialized revenue cycle management for mental health practices. Expert behavioral health billing, therapy session billing, and psychiatric practice management.',
    keywords: 'mental health billing, behavioral health RCM, therapy billing, psychiatric billing, counseling practice management, telehealth billing, psychology practice billing',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Mental Health Services",
      "description": "Specialized Revenue Cycle Management services for mental health practices",
      "medicalSpecialty": "Mental Health",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  optometry: {
    title: 'Optometry Practice RCM - Eye Care Billing & Revenue Management',
    description: 'Expert revenue cycle management for optometry practices. Specialized eye care billing, vision insurance processing, and optical practice management.',
    keywords: 'optometry billing, vision care RCM, eye care billing, optical billing, vision insurance claims, ophthalmology billing, eye exam billing, contact lens billing',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Optometry Services",
      "description": "Specialized Revenue Cycle Management services for optometry practices",
      "medicalSpecialty": "Optometry",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  chiropractic: {
    title: 'Chiropractic Practice RCM - Specialized Chiropractic Billing Solutions',
    description: 'Comprehensive revenue cycle management for chiropractic practices. Expert chiropractic billing, insurance claims processing, and practice management solutions.',
    keywords: 'chiropractic billing, chiropractic RCM, spine care billing, chiropractic practice management, manipulation billing, chiropractic insurance claims, wellness billing',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Adam Billing - Chiropractic Services",
      "description": "Specialized Revenue Cycle Management services for chiropractic practices",
      "medicalSpecialty": "Chiropractic",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      }
    }
  },

  contact: {
    title: 'Contact Adam Billing - Get Your Free RCM Assessment Today',
    description: 'Contact Adam Billing for a free Revenue Cycle Management assessment. Get expert consultation on medical billing, RCM optimization, and healthcare revenue improvement.',
    keywords: 'contact Adam Billing, RCM consultation, medical billing consultation, free RCM assessment, healthcare billing help, revenue cycle consultation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Adam Billing",
      "description": "Contact page for Adam Billing RCM services",
      "url": "https://www.adambilling.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Adam Billing",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    }
  },

  careers: {
    title: 'Careers at Adam Billing - Join Our Healthcare RCM Team',
    description: 'Join the Adam Billing team! Explore career opportunities in healthcare revenue cycle management, medical billing, and healthcare technology. Grow your RCM career with us.',
    keywords: 'Adam Billing careers, RCM jobs, medical billing careers, healthcare billing jobs, revenue cycle management careers, healthcare technology jobs',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Careers at Adam Billing",
      "description": "Career opportunities at Adam Billing",
      "url": "https://www.adambilling.com/careers"
    }
  },

  blog: {
    title: 'Healthcare RCM Blog - Revenue Cycle Management Insights & Tips',
    description: 'Stay updated with the latest in healthcare revenue cycle management. Expert insights, tips, and best practices for medical billing, RCM optimization, and healthcare finance.',
    keywords: 'healthcare RCM blog, medical billing tips, revenue cycle management insights, healthcare billing best practices, RCM trends, medical practice management blog',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Adam Billing Blog",
      "description": "Healthcare Revenue Cycle Management insights and tips",
      "url": "https://www.adambilling.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Adam Billing"
      }
    }
  }
};

// FAQ Structured Data for common RCM questions
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Revenue Cycle Management (RCM)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revenue Cycle Management (RCM) is the financial process that healthcare facilities use to track patient care episodes from registration and appointment scheduling to the final payment of a balance. It includes medical billing, claims processing, denial management, and payment collection."
      }
    },
    {
      "@type": "Question",
      "name": "How can Adam Billing improve my practice's revenue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adam Billing can increase your practice revenue by up to 25% through expert medical billing, reduced claim denials, faster payment processing, and comprehensive RCM automation. Our services include claims processing, denial management, and revenue optimization."
      }
    },
    {
      "@type": "Question",
      "name": "What types of healthcare practices does Adam Billing serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adam Billing serves various healthcare specialties including dental practices, pain management clinics, physical therapy practices, mental health providers, optometry practices, and chiropractic clinics. We provide specialized RCM solutions for each practice type."
      }
    },
    {
      "@type": "Question",
      "name": "Is Adam Billing HIPAA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Adam Billing is fully HIPAA compliant. We maintain the highest standards of patient data security and privacy protection in all our revenue cycle management processes and systems."
      }
    }
  ]
};

// Breadcrumb structured data generator
export const generateBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.adambilling.com${crumb.url}`
  }))
}); 