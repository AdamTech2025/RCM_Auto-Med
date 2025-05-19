import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Main/Navbar.jsx";
import ScrollReveal from './components/UI/ScrollReveal';
import CountUp from 'react-countup';
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
      {/* Premium, smooth info section */}
      <section className="bg-white/70 backdrop-blur-md py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-8">
            Adam Rev Max: <span className="italic font-black text-primary">AI-Powered Dental Revenue Automation</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-800 text-lg leading-relaxed mb-12">
            <div>
              <span className="font-bold italic text-primary">Adam Rev Max</span> is your all-in-one solution for dental billing, insurance verification, and practice management—powered by advanced AI. Automate claims, reduce costs, and boost productivity with seamless, secure technology trusted by modern dental practices.
            </div>
            <div>
              Focus on patient care while Adam Rev Max handles the revenue cycle. Our US-based team and AI-driven platform ensure accuracy, compliance, and faster payments. Experience the future of dental billing—today.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/your-premium-image.jpg" alt="Adam Rev Max Platform" className="rounded-xl shadow-lg w-full max-w-xs mx-auto md:mx-0" />
            <div className="text-gray-800 text-lg leading-relaxed">
              No contracts, no hidden fees—just results. Adam Rev Max adapts to your workflow, scales with your practice, and delivers real-time analytics so you always know your numbers. Join the practices already maximizing revenue and minimizing stress.
            </div>
          </div>
          {/* Stats Section */}
          <div className="mt-16 bg-white/90 rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-gray-200 overflow-hidden">
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={320} duration={2} />+
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Practices Automated</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={1800} duration={2.5} />+
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Claims Processed</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={98} duration={2} />%
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Accuracy Rate</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={5} duration={1.5} />
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>
      {/* End premium info section */}
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
