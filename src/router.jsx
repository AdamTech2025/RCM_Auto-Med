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
import Hero from "./components/Pages/Hero.jsx";
import HowItWorks from "./components/Pages/HowItWorks.jsx";
import Features from "./components/Pages/Features.jsx";
import Benefits from "./components/Pages/Benefits.jsx";
import Integrations from "./components/Pages/Integrations.jsx";
import CaseStudies from "./components/Pages/CaseStudies.jsx";
import Testimonials from "./components/Pages/Testimonials.jsx";
import DemoCTA from "./components/Pages/DemoCTA.jsx";
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
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter; 