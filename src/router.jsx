import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

// SEO Components
import SEOHead from "./components/SEO/SEOHead.jsx";
import { seoData, faqStructuredData } from "./data/seoData.js";

// Components required for Layout and HomePage
import Navbar from "./components/Main/Navbar.jsx";
import Footer from "./components/Main/Footer.jsx";
import CountUp from 'react-countup';

// Page components required for HomePage
import Hero from "./components/Pages/Home/Hero.jsx";
import HowItWorks from "./components/Pages/Home/HowItWorks.jsx";
import Features from "./components/Pages/Home/Features.jsx";
import Benefits from "./components/Pages/Home/Benefits.jsx";
import Integrations from "./components/Pages/Home/Integrations.jsx";
import CaseStudies from "./components/Pages/Home/CaseStudies.jsx";
import Testimonials from "./components/Pages/Home/Testimonials.jsx";
import DemoCTA from "./components/Pages/Home/DemoCTA.jsx";
import ContactUs from "./components/Pages/Contact Us/ContactUs.jsx";

// Service page components
import Dental from "./components/Pages/Services/Dental.jsx";
import Medical from "./components/Pages/Services/Medical.jsx";
import PhysicalTherapy from "./components/Pages/Services/PhysicalTherapy.jsx";
import MentalHealth from "./components/Pages/Services/MentalHealth.jsx";
import Optometry from "./components/Pages/Services/Optometry.jsx";
import Chiropractic from "./components/Pages/Services/Chiropractic.jsx";

// Other page components
import ManagementServices from "./components/Pages/Management Services/ManagementServices.jsx";
import DentalCPA from "./components/Pages/Dental CPA/DentalCPA.jsx";
import Careers from "./components/Pages/Careers/Careers.jsx";
import Blog from "./components/Pages/Blog/Blog.jsx";

// Note: ScrollReveal is now part of Benefits.jsx, so not directly imported here for HomePage unless used elsewhere.

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const HomePage = () => {
  return (
    <>
      <SEOHead 
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalUrl="https://www.adambilling.com/"
        structuredData={seoData.home.structuredData}
        pageName="home"
      />
      <Hero />
      {/* Premium, smooth info section was moved to Hero.jsx */}
      <HowItWorks />
      <Features />
      {/* ScrollReveal was moved to Benefits.jsx */}
      <Benefits />
      <Integrations />
      <CaseStudies />
      <Testimonials />
      {/* <Pricing /> */}
      <DemoCTA />
    </>
  );
};

// SEO-optimized page components
const ContactPage = () => (
  <>
    <SEOHead 
      title={seoData.contact.title}
      description={seoData.contact.description}
      keywords={seoData.contact.keywords}
      canonicalUrl="https://www.adambilling.com/contact"
      structuredData={seoData.contact.structuredData}
      pageName="contact"
    />
    <ContactUs />
  </>
);

const DentalPage = () => (
  <>
    <SEOHead 
      title={seoData.dental.title}
      description={seoData.dental.description}
      keywords={seoData.dental.keywords}
      canonicalUrl="https://www.adambilling.com/dental"
      structuredData={seoData.dental.structuredData}
      pageName="dental"
    />
    <Dental />
  </>
);

const PainManagementPage = () => (
  <>
    <SEOHead 
      title={seoData['pain-management'].title}
      description={seoData['pain-management'].description}
      keywords={seoData['pain-management'].keywords}
      canonicalUrl="https://www.adambilling.com/pain-management"
      structuredData={seoData['pain-management'].structuredData}
      pageName="pain-management"
    />
    <Medical />
  </>
);

const PhysicalTherapyPage = () => (
  <>
    <SEOHead 
      title={seoData['physical-therapy'].title}
      description={seoData['physical-therapy'].description}
      keywords={seoData['physical-therapy'].keywords}
      canonicalUrl="https://www.adambilling.com/physical-therapy"
      structuredData={seoData['physical-therapy'].structuredData}
      pageName="physical-therapy"
    />
    <PhysicalTherapy />
  </>
);

const MentalHealthPage = () => (
  <>
    <SEOHead 
      title={seoData['mental-health'].title}
      description={seoData['mental-health'].description}
      keywords={seoData['mental-health'].keywords}
      canonicalUrl="https://www.adambilling.com/mental-health"
      structuredData={seoData['mental-health'].structuredData}
      pageName="mental-health"
    />
    <MentalHealth />
  </>
);

const OptometryPage = () => (
  <>
    <SEOHead 
      title={seoData.optometry.title}
      description={seoData.optometry.description}
      keywords={seoData.optometry.keywords}
      canonicalUrl="https://www.adambilling.com/optometry"
      structuredData={seoData.optometry.structuredData}
      pageName="optometry"
    />
    <Optometry />
  </>
);

const ChiropracticPage = () => (
  <>
    <SEOHead 
      title={seoData.chiropractic.title}
      description={seoData.chiropractic.description}
      keywords={seoData.chiropractic.keywords}
      canonicalUrl="https://www.adambilling.com/chiropractic"
      structuredData={seoData.chiropractic.structuredData}
      pageName="chiropractic"
    />
    <Chiropractic />
  </>
);

const CareersPage = () => (
  <>
    <SEOHead 
      title={seoData.careers.title}
      description={seoData.careers.description}
      keywords={seoData.careers.keywords}
      canonicalUrl="https://www.adambilling.com/careers"
      structuredData={seoData.careers.structuredData}
      pageName="careers"
    />
    <Careers />
  </>
);

const BlogPage = () => (
  <>
    <SEOHead 
      title={seoData.blog.title}
      description={seoData.blog.description}
      keywords={seoData.blog.keywords}
      canonicalUrl="https://www.adambilling.com/blog"
      structuredData={seoData.blog.structuredData}
      pageName="blog"
    />
    <Blog />
  </>
);

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Service Routes */}
          <Route path="dental" element={<DentalPage />} />
          <Route path="pain-management" element={<PainManagementPage />} />
          <Route path="physical-therapy" element={<PhysicalTherapyPage />} />
          <Route path="mental-health" element={<MentalHealthPage />} />
          <Route path="optometry" element={<OptometryPage />} />
          <Route path="chiropractic" element={<ChiropracticPage />} />
          
          {/* Other Routes */}
          <Route path="management-services" element={<ManagementServices />} />
          <Route path="dental-cpa" element={<DentalCPA />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      // Service Routes
      {
        path: "dental",
        element: <DentalPage />
      },
      {
        path: "pain-management",
        element: <PainManagementPage />
      },
      {
        path: "physical-therapy",
        element: <PhysicalTherapyPage />
      },
      {
        path: "mental-health",
        element: <MentalHealthPage />
      },
      {
        path: "optometry",
        element: <OptometryPage />
      },
      {
        path: "chiropractic",
        element: <ChiropracticPage />
      },
      // Other Routes
      {
        path: "management-services",
        element: <ManagementServices />
      },
      {
        path: "dental-cpa",
        element: <DentalCPA />
      },
      {
        path: "careers",
        element: <CareersPage />
      },
      {
        path: "blog",
        element: <BlogPage />
      }
    ]
  }
];

export default AppRouter; 