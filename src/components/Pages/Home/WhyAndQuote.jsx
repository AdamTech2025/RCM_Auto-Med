import React from 'react';

const WhyAndQuote = () => {
  const services = [
    'Adam Billing - Billing team all USA based',
    'Patient Recare Program (new service)',
    'Dental Consulting',
    'Dental Practice Management Services',
    'Search Engine Optimization',
    'Website Design',
    'Team Training',
  ];

  return (
    <section className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Why We Are Different Section */}
        <div className="lg:pr-8">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-100">Why we are different?</h2>
          <p className="mb-6 text-gray-300 text-lg">
            We are the only outsourcing Adam Billing company which offers not
            only <strong className="font-semibold text-white">dental practice management</strong> but we also offer the following:
          </p>
          <ul className="space-y-3 mb-8">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#8226;</span>
                <span className="text-gray-300">{service}</span>
              </li>
            ))}
          </ul>
          <button 
            className="border border-white text-white font-semibold py-3 px-8 hover:bg-white hover:text-gray-800 transition-colors duration-300 rounded-md"
          >
            VISIT SERVICES PAGE
          </button>
        </div>

        {/* Get a Quote Section */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-100">Get a quote</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="w-full bg-gray-600 border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:ring-primary focus:border-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-gray-600 border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:ring-primary focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone No. *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full bg-gray-600 border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:ring-primary focus:border-primary"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-300 mb-1">
                Service Needed *
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                required
                className="w-full bg-gray-600 border-gray-500 text-white rounded-md p-3 focus:ring-primary focus:border-primary appearance-none"
              >
                <option value="" disabled selected>Select a service</option>
                <option value="dental-billing">Adam Billing</option>
                <option value="patient-recare">Patient Recare Program</option>
                <option value="dental-consulting">Dental Consulting</option>
                <option value="practice-management">Dental Practice Management</option>
                <option value="seo">Search Engine Optimization</option>
                <option value="website-design">Website Design</option>
                <option value="team-training">Team Training</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300 text-lg"
            >
              GET YOUR QUOTE NOW!
            </button>
            <p className="text-sm text-gray-400 text-center">
              We promise that your details are secure with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhyAndQuote; 