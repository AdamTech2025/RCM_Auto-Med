import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

// Components required for Layout and HomePage
import Navbar from "./components/Main/Navbar.jsx";
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
    {/* <Footer /> */}
  </>
);

const HomePage = () => {
  return (
    <>
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

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactUs />} />
          
          {/* Service Routes */}
          <Route path="dental" element={<Dental />} />
          <Route path="medical" element={<Medical />} />
          <Route path="physical-therapy" element={<PhysicalTherapy />} />
          <Route path="mental-health" element={<MentalHealth />} />
          <Route path="optometry" element={<Optometry />} />
          <Route path="chiropractic" element={<Chiropractic />} />
          
          {/* Other Routes */}
          <Route path="management-services" element={<ManagementServices />} />
          <Route path="dental-cpa" element={<DentalCPA />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter; 