import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = ({ id }) => {
  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform built with React and Node.js.',
      category: 'Web',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Travel Companion App',
      description: 'A mobile app for travel enthusiasts to plan their trips and share experiences.',
      category: 'Mobile',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Dashboard UI Kit',
      description: 'A modern dashboard UI kit with customizable components.',
      category: 'UI/UX',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'A web application to search and filter recipes based on ingredients.',
      category: 'Web',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile app to track workouts and monitor fitness progress.',
      category: 'Mobile',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for developers and designers.',
      category: 'UI/UX',
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.demo}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;