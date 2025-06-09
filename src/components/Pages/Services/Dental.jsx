import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck, 
         LineChart, ClipboardCheck, Clock, DollarSign, Shield, BarChart, Award,
         Code2, FileText, ArrowRight, Star, TrendingUp as TrendingUpIcon } from "lucide-react";
import CountUp from '../../UI/CountUp';
import ScrollReveal from '../../UI/ScrollReveal';
import FluidBackground from '../../UI/FluidBackground';
import Aurora from '../../UI/Aurora';
import hipaaLogo from "../../../assets/hipaa_blue-3.webp";

// Import dental logo images
import dentrixLogo from "../../../assets/Dental Logos/Dentrix-logo.png";
import eaglesoftLogo from "../../../assets/Dental Logos/eaglesoft-logo.png";
import openDentalLogo from "../../../assets/Dental Logos/open-dental.webp";
import curveDentalLogo from "../../../assets/Dental Logos/CurveDental_New Logos_square full color on transp (1)-1.webp";
import carestreamLogo from "../../../assets/Dental Logos/carestream-dental-logo.png";
import denticonLogo from "../../../assets/Dental Logos/denticon.webp";
import abeldentLogo from "../../../assets/Dental Logos/abeldent.webp";
import tab32Logo from "../../../assets/Dental Logos/tab-logo-dark.png";
import dentiMaxLogo from "../../../assets/Dental Logos/DentiMax-Logo-Retina.png.webp";
import aceDentalLogo from "../../../assets/Dental Logos/Ace Dental88b249b2-ee09-485b-9d3c-6ee6142035fb.webp";
import dentalMasterLogo from "../../../assets/Dental Logos/cropped-dentalMaster-logo-08.png";
import iDentalSoftLogo from "../../../assets/Dental Logos/idslogo_color_220x37dp.png";

// Dental Hero Component
const DentalHero = () => {
  const benefits = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      line1: "Improve your",
      line2: "patient experience",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      line1: "Increase",
      line2: "your revenue",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      line1: "Elevate your",
      line2: "business office",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      line1: "Empower your",
      line2: "staff productivity",
    },
    {
      icon: <BarChartBig className="h-8 w-8 text-primary" />,
      line1: "Unlock data-driven",
      line2: "decision making",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      line1: "Strengthen your",
      line2: "compliance & security",
    },
  ];

  return (
    <section className=" py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Text Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-8 leading-tight">
              Reimagine your <br /> Dental Practice Revenue Cycle.
            </h1>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Powered by intelligent automation, proven methods, and experienced
              dental professionals, our RCM solutions are purpose-built to help dental
              practices improve performance and patient care.
            </p>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Through partnership with cutting-edge dental technology, you can improve your
              financial results quickly and advance every aspect of your
              dental practice with digital solutions. With a strong business office and
              trusted partner, you can focus on delivering amazing dental care.
            </p>
            <p className="text-slate-600 text-md mb-10">
              The future of dental practice management is evolving. Are you ready for the
              change?
            </p>
            <motion.div>
              <Link 
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 px-10 rounded-md text-lg uppercase tracking-wider shadow-lg transition-colors duration-300 inline-block text-center"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  TRANSFORM MY DENTAL PRACTICE
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 md:mt-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
              {/* Left Column of Benefits */}
              <div className="space-y-10">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={`benefit-left-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="flex items-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-xl border-2 border-primary flex-shrink-0 mr-5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {benefit.line1}
                      </h4>
                      <p className="text-slate-600 text-base">{benefit.line2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column of Benefits */}
              <div className="space-y-10">
                {benefits.slice(3, 6).map((benefit, index) => (
                  <motion.div
                    key={`benefit-right-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index + 3) * 0.2 }}
                    className="flex items-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-xl border-2 border-primary flex-shrink-0 mr-5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {benefit.line1}
                      </h4>
                      <p className="text-slate-600 text-base">{benefit.line2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Dental How It Works Component
const DentalHowItWorks = () => {
  const blurTextVariants = {
    hidden: { 
      filter: "blur(10px)",
      opacity: 0,
      y: 20 
    },
    visible: { 
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      id: "01",
      icon: <Code2 className="w-8 h-8" />,
      title: "DENTALCODING.AI",
      description: "Intelligent dental coding automation that assigns CDT and ICD-10 codes with AI precision, understanding clinical context for improved accuracy."
    },
    {
      id: "02",
      icon: <FileText className="w-8 h-8" />,
      title: "DENTALBILLING.AI",
      description: "Smart dental billing solutions that automate charge capture, insurance verification, and claim generation while predicting and preventing denials."
    },
    {
      id: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "DENTALCOMPLIANCE.AI",
      description: "AI-driven compliance system that analyzes dental codes against insurance rules and regulatory guidelines, ensuring audit readiness."
    },
    {
      id: "04",
      icon: <Stethoscope className="w-8 h-8" />,
      title: "ORALCARE.AI",
      description: "Smart dental data extraction using specialized language processing to support treatment planning and clinical decision-making."
    }
  ];

  return (
    <FluidBackground>
      <section id="how-it-works" className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              className="text-sm text-primary font-medium"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Solutions
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              AI-Powered Dental Practice APIs
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-primary mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FluidBackground>
  );
};

// Dental Features Component
const DentalFeatures = () => {
  const features = [
    {
      icon: <LineChart className="w-12 h-12 text-primary" />,
      title: "Dental Practice Analytics",
      description: "Track dental procedure revenues, patient appointments, and insurance claim status in real-time with our intuitive analytics dashboard."
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Automated Insurance Verification",
      description: "Streamline dental insurance eligibility verification and benefits checking with our automated system, reducing front desk workload by 85%."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Faster Dental Claims Processing",
      description: "Reduce dental claim processing time by up to 75% with AI-powered validation and automated submission systems customized for dental procedures."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Dental Revenue Optimization",
      description: "Maximize reimbursements with intelligent procedure coding and dynamic pricing optimization for your dental practice."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Dental Compliance Assurance",
      description: "Stay compliant with automatic updates to dental CDT coding rules and regulatory requirements specific to dental practices."
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Practice Performance Metrics",
      description: "Track and improve key dental metrics including Days in AR, Clean Claim Rate, and Production-to-Collection Ratio."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Dental Patient Engagement",
      description: "Enhance patient satisfaction with transparent dental billing processes and multiple payment options for procedures."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Best-in-Class Support",
      description: "24/7 expert support and continuous training to ensure maximum value from our dental practice management solution."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comprehensive Dental Practice Features
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything You Need for Dental Practice Excellence
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dental Benefits Component
const DentalBenefits = () => {
  const benefits = [
    {
      stat: 96,
      title: "Dental Claim Approval Rate",
      description: "Achieve industry-leading first-pass dental claim acceptance rates with our AI-powered validation."
    },
    {
      stat: 60,
      title: "Reduced A/R Days",
      description: "Significantly decrease your dental practice's Days in A/R with automated follow-up and denial management."
    },
    {
      stat: 15,
      title: "Practice Revenue Increase",
      description: "Our dental clients see an average of 15% increase in revenue within the first 6 months."
    },
    {
      stat: 85,
      title: "Front Desk Time Saved",
      description: "Reduce manual dental billing work by up to 85% with our automated dental practice workflows."
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dental Practice ROI & Benefits
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Maximize Your Dental Practice Revenue
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our AI-powered dental billing solution delivers measurable results that directly impact your practice's bottom line
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary inline-flex items-baseline">
                  <CountUp
                    from={0}
                    to={benefit.stat}
                    duration={1}
                    className="tabular-nums"
                  />
                  <span>%</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">*Based on average dental customer results after implementing our solution</p>
        </motion.div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={-3}
          blurStrength={6}
          containerClassName="text-center py-12 mt-12"
        >
          Trusted by leading dental practices worldwide to optimize their billing workflow
        </ScrollReveal>
      </div>
    </section>
  );
};

// Dental Integrations Component
const DentalIntegrations = () => {
  const integrations = [
    { logo: dentrixLogo, name: "Dentrix" },
    { logo: eaglesoftLogo, name: "Eaglesoft" },
    { logo: openDentalLogo, name: "Open Dental" },
    { logo: curveDentalLogo, name: "Curve Dental" },
    { logo: carestreamLogo, name: "Carestream Dental" },
    { logo: denticonLogo, name: "Denticon" },
    { logo: abeldentLogo, name: "ABELDent" },
    { logo: tab32Logo, name: "Tab32" },
    { logo: dentiMaxLogo, name: "DentiMax" },
    { logo: aceDentalLogo, name: "Ace Dental" },
    { logo: dentalMasterLogo, name: "DentalMaster" },
    { logo: iDentalSoftLogo, name: "iDentalSoft" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="integrations" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-medium px-4 py-2 bg-primary/10 rounded-full inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Seamless Integrations
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Software integrates with your dental practice management software
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Connect with all your favorite tools and platforms to streamline your dental practice workflow
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {integrations.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <div className="flex items-center justify-center h-16 mb-3">
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="text-primary font-medium hover:underline inline-flex items-center group"
          >
            <span className="group-hover:translate-x-[-4px] transition-transform">Request custom integration</span>
            <svg 
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Dental Case Studies Component
const DentalCaseStudies = () => {
  const caseStudies = [
    {
      title: "Multi-Location Dental Group",
      challenge: "Managing complex dental billing across 6 locations with high insurance denial rates",
      solution: "Implemented AI-powered dental billing system with centralized dashboard",
      results: [
        { icon: <TrendingUpIcon />, text: "45% reduction in dental claim denials" },
        { icon: <Clock />, text: "60% faster dental insurance processing" },
        { icon: <DollarSign />, text: "10% increase in practice revenue" }
      ]
    },
    {
      title: "Small Dental Practices",
      challenge: "Manual coding process leading to errors and delayed insurance payments",
      solution: "Automated CDT coding with AI and real-time verification",
      results: [
        { icon: <TrendingUpIcon />, text: "95% clean dental claim rate" },
        { icon: <Clock />, text: "75% reduction in front desk workload" },
        { icon: <DollarSign />, text: "8% increase in collections from insurance" }
      ]
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dental Practice Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real Results from Real Dental Practices
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Results:</h4>
                {study.results.map((result, i) => (
                  <div key={i} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">{result.icon}</span>
                    {result.text}
                  </div>
                ))}
              </div>
              <motion.button
                className="mt-6 flex items-center text-primary font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dental Testimonials Component
const DentalTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Anya Desai",
      role: "Practice Owner",
      company: "Bright Smiles Dental Group",
      content: "CareStack dropped our insurance aging by 70%. Automated eligibility checks and e-claims streamlined our billing, saving hours weekly and boosting collections.",
      rating: 5,
      avatar: "AD"
    },
    {
      name: "Michael Jennings",
      role: "Office Manager",
      company: "Premier Dental Care",
      content: "Denticon made claims processing much faster. Claim scrubbing reduced denials dramatically. Our A/R is the lowest ever and monthly revenue consistently higher.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Dr. Laura Stevens",
      role: "Dentist / Owner",
      company: "Serene Dental Studio",
      content: "eAssist increased our collections by 15% in six months. Their billing expertise is incredible - no more worrying about aging claims or insurance follow-ups.",
      rating: 5,
      avatar: "LS"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Revenue Growth Champions
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>

                {/* Rating */}
                <div className="flex mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dental Demo CTA Component
const DentalDemoCTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora Background - positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] rotate-180">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center mb-80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Dental Practice?
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-8">
              Join thousands of dental practices who have already optimized their billing and coding with our AI-powered solution.
            </p>
            <a 
              href="https://automed.adamtechnologies.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-lg font-medium inline-flex items-center gap-2 transition-all shadow-xl text-lg"
            >
              Try Now <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* HIPAA Compliance Section */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={hipaaLogo} 
                  alt="HIPAA Compliance" 
                  className="h-24 mb-4"
                />
                <p className="text-gray-700 flex items-center gap-2 font-medium">
                  <Shield className="w-5 h-5 text-primary" />
                  Your patient data is protected with HIPAA-compliant security
                </p>
                <p className="text-sm text-gray-500 mt-2 max-w-md">
                  Our dental practice software adheres to all HIPAA regulations, ensuring your patients' information remains secure and private at all times.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Dental = () => {
  return (
    <>
      <DentalHero />
      <DentalHowItWorks />
      <DentalFeatures />
      <DentalBenefits />
      <DentalIntegrations />
      <DentalCaseStudies />
      <DentalTestimonials />
      <DentalDemoCTA />
    </>
  );
};

export default Dental; 