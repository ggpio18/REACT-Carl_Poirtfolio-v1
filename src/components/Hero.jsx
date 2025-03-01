import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build beautiful, responsive websites and web applications with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 overflow-hidden">
            {/* Replace with your image */}
            <img
              src="/api/placeholder/320/320"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-indigo-600 hover:text-indigo-700"
      >
        <FaArrowDown size={30} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;