import React from 'react';

const About = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="/api/placeholder/400/500"
                  alt="About Me"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              I'm a passionate developer with a love for creating beautiful web experiences
            </h3>
            
            <p className="text-gray-600 mb-6">
              I specialize in building modern, responsive websites and applications using React, Tailwind CSS, and other cutting-edge technologies. With over 5 years of experience in web development, I've worked on a variety of projects from small business websites to complex enterprise applications.
            </p>
            
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen. I believe in continuous learning and am always exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                <h4 className="font-semibold text-indigo-600">Education</h4>
                <p className="text-gray-700">BS in Computer Science</p>
              </div>
              
              <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                <h4 className="font-semibold text-indigo-600">Location</h4>
                <p className="text-gray-700">New York, USA</p>
              </div>
              
              <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                <h4 className="font-semibold text-indigo-600">Availability</h4>
                <p className="text-gray-700">Freelance & Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;