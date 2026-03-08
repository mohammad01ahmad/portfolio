'use client';

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600">Let's work together on something amazing</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about data science and technology,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 p-3 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">mohammad01ahmad@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 p-3 rounded-full">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-600">UAE</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 p-3 rounded-full">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600">+971 58 512 4841</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => alert('Thanks for your message! This is a demo form.')}
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;