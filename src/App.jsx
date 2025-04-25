import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Main/Navbar.jsx";
import ScrollReveal from './components/UI/ScrollReveal';
// import Footer from "./components/Main/Footer.jsx";

// Import page components
import Hero from "./components/Pages/Hero.jsx";
import HowItWorks from "./components/Pages/HowItWorks.jsx";
import Features from "./components/Pages/Features.jsx";
import Benefits from "./components/Pages/Benefits.jsx";
import Integrations from "./components/Pages/Integrations.jsx";
import CaseStudies from "./components/Pages/CaseStudies.jsx";
import Testimonials from "./components/Pages/Testimonials.jsx";
// import Pricing from "./components/Pages/Pricing.jsx";
import DemoCTA from "./components/Pages/DemoCTA.jsx";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
  </>
);

// Home page component combining multiple sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={3}
        blurStrength={8}
        containerClassName="text-center py-12 bg-gradient-to-r from-primary/5 to-blue-500/5"
      >
        Transform your dental practice revenue with AI-powered solutions that deliver results
      </ScrollReveal>
      <HowItWorks />
      <Features />
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={-3}
        blurStrength={6}
        containerClassName="text-center py-12"
      >
        Trusted by leading dental practices worldwide to optimize their billing workflow
      </ScrollReveal>
      <Benefits />
      <Integrations />
      <CaseStudies />
      <Testimonials />
      {/* <Pricing /> */}
      <DemoCTA />
    </>
  );
};

const App = () => {
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

export default App;
