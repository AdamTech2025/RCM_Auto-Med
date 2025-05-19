import React from 'react';
import BookDemo from '../shared/BookDemo';
import { Button } from '../shared/Button';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-700 mb-4">
            Need dental billing, SEO, Web Design or practice management? 
            <span className="font-bold text-black block sm:inline-block mt-2 sm:mt-0 sm:ml-2">Contact us now!</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info, Availability & Book Demo */}
          <div className="md:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-serif text-gray-500 mb-1">Contact <span className="font-bold text-black">us</span></h2>
              <div className="text-gray-600 space-y-1 mt-4 text-sm">
                <p>505 E. Windmill Ln., Ste 1C PMB 186</p>
                <p>Las Vegas NV 89123</p>
                <p><span className="font-semibold text-black">Phone:</span> 1 (480) 240-0070</p>
                <p><span className="font-semibold text-black">Fax:</span> 1 (480) 304-3494</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-serif font-bold text-black mb-3">Availability</h2>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>Our lovely team is awaiting your call <span className="font-semibold text-black">Monday thru Friday</span> from <span className="font-semibold text-black">8:30am to 5:00pm PST</span>.</p>
                <p>To reach us after normal business hours, click chat now for a response within minutes!</p>
              </div>
            </div>
            
            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Ready to see how Adam Rev Max can transform your practice? Book a personalized demo with our experts.
              </p>
              <BookDemo 
                variant="default" 
                className="w-full text-base py-2.5 shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-2">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="sr-only">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full px-4 py-3 border-b border-gray-300 focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400"
                  placeholder="Message"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-auto px-10 py-3 border border-transparent rounded-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 uppercase tracking-wider"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 