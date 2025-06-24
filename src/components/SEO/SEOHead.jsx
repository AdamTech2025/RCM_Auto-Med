import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEOHead = ({ 
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  structuredData,
  noIndex = false,
  pageName = 'home'
}) => {
  const baseUrl = 'https://www.adambilling.com';
  const defaultTitle = 'Adam Billing - Expert Revenue Cycle Management & Medical Billing Services';
  const defaultDescription = 'Adam Billing provides comprehensive Revenue Cycle Management (RCM) services for healthcare providers. Expert medical billing, claims processing, denial management, and RCM automation. Increase revenue by 25% with our HIPAA-compliant solutions.';
  const defaultKeywords = 'revenue cycle management, medical billing, RCM services, healthcare billing, claims processing, denial management, medical coding, healthcare revenue, billing automation, HIPAA compliant billing, Adam Billing';
  
  const finalTitle = title ? `${title} | Adam Billing` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}/`;
  const finalOgImage = ogImage || `${baseUrl}/og-image-${pageName}.jpg`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adam Billing",
    "description": "Expert Revenue Cycle Management and Medical Billing Services for Healthcare Providers",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/adam-billing",
      "https://twitter.com/adambilling",
      "https://www.facebook.com/adambilling"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Revenue Cycle Management",
      "Medical Billing",
      "Claims Processing",
      "Denial Management",
      "Medical Coding",
      "Healthcare Billing Automation"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="Adam Billing" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  structuredData: PropTypes.object,
  noIndex: PropTypes.bool,
  pageName: PropTypes.string
};

export default SEOHead; 