'use client';

import React from 'react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-400 to-orange-400 rounded-full hidden md:block"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative mb-12 md:mb-20 ${index % 2 === 1 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full hidden md:block z-10 top-8"></div>

              <div className={`bg-white rounded-2xl shadow-xl p-8 mx-4 md:mx-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                  <div className="text-lg text-purple-600 font-semibold mb-1">{experience.company}</div>
                  <div className="text-orange-500 font-medium">{experience.period}</div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;