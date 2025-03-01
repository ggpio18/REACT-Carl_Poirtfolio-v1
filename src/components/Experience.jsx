import React from 'react';

const Experience = ({ id }) => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Front-end Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 - Present',
      description: 'Leading the front-end development team in creating modern web applications using React, Next.js, and Tailwind CSS. Implemented best practices and improved performance by 40%.',
      achievements: [
        'Led a team of 5 developers to launch 3 major products',
        'Reduced load times by 60% through code optimization',
        'Implemented CI/CD pipelines for automated testing and deployment'
      ]
    },
    {
      id: 2,
      role: 'Front-end Developer',
      company: 'Web Innovations LLC',
      duration: 'Mar 2019 - Dec 2021',
      description: 'Developed responsive websites and web applications for clients across various industries. Collaborated with designers and back-end developers to ensure seamless integration.',
      achievements: [
        'Created 15+ websites for clients in finance, healthcare, and retail',
        'Implemented responsive designs using modern CSS frameworks',
        'Integrated RESTful APIs and implemented error handling'
      ]
    },
    {
      id: 3,
      role: 'Junior Web Developer',
      company: 'Digital Creations',
      duration: 'Jun 2017 - Feb 2019',
      description: 'Started as an intern and was promoted to a full-time position. Worked on various web development projects and assisted senior developers.',
      achievements: [
        'Contributed to the company\'s internal CMS development',
        'Created interactive UI components using jQuery and vanilla JavaScript',
        'Optimized web assets to improve page load times'
      ]
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="relative border-l-4 border-indigo-600 pl-6 ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full bg-indigo-600 border-4 border-white"></div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 inline-block">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="absolute -left-4 h-5 w-5 -bottom-2 rounded-full bg-indigo-600 border-4 border-white"></div>
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="/resume.pdf"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;