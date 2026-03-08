'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-400 to-orange-400 rounded-full hidden md:block"></div>

          {projects.map((project, index) => (
            <div key={index} className={`relative mb-12 md:mb-20 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full hidden md:block z-10 top-8"></div>

              <div className={`bg-white rounded-2xl shadow-xl p-8 mx-4 md:mx-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;