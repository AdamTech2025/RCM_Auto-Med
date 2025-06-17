import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BookDemo from '../../shared/BookDemo';
import { Button } from '../../shared/Button';

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mtclw2v',
        'template_m6qkl3j',
        formRef.current,
        'dbKQHsTo93fB5grrY'
      )
      .then(
        (result) => {
          setStatus('success');
          formRef.current.reset();
        },
        (error) => {
          setStatus('error');
        }
      );
  };

  return (
    <div className="bg-white min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-700 mb-4">
            Need Adam Billing
            <span className="font-bold text-black block sm:inline-block mt-2 sm:mt-0 sm:ml-2">Contact us now!</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-serif text-gray-500 mb-1">Contact <span className="font-bold text-black">us</span></h2>
              <div className="text-gray-600 space-y-1 mt-4 text-sm">
                <p>125 South Wacker Dr Suite </p>
                <p>New York, NY 10001</p>
                <p><span className="font-semibold text-black">Phone:</span> +1 (858) 888-0645</p>
                <p><span className="font-semibold text-black">Fax:</span> +1 (858) 888-0645</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-serif font-bold text-black mb-3">Availability</h2>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>We're here for you <span className="font-semibold text-black">24/7</span>.</p>
                {/* <p><span className="text-red-500 font-semibold">Closed on Sundays.</span></p> */}
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Ready to see how Adam Billing can transform your practice? Book a personalized demo with our experts.
              </p>
              <BookDemo 
                variant="default" 
                className="w-full text-base py-2.5 shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="user_surname"
                    className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                    placeholder="Surname"
                    required
                  />
                </div>
              </div>
              <input
                type="email"
                name="user_email"
                className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="user_phone"
                className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="user_subject"
                className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows={5}
                className="block w-full px-4 py-3 border-b border-gray-300 sm:text-sm placeholder-gray-400"
                placeholder="Message"
                required
              ></textarea>
              <div>
                <Button
                  type="submit"
                  className="w-auto px-10 py-3 border border-transparent rounded-sm text-base font-medium text-white bg-black hover:bg-gray-800"
                >
                  Send
                </Button>
              </div>

              {status === 'success' && (
                <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-2">❌ Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
