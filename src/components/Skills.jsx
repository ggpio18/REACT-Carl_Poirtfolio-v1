import React from 'react';

const Skills = ({ id }) => {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 75 },
    { name: 'Adaptability', level: 80 },
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {/* Technology logos */}
          {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
            <div key={tech} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                {/* Replace with actual tech logos */}
                <div className="text-indigo-600 font-semibold">{tech.slice(0, 2)}</div>
              </div>
              <p className="text-gray-700 text-sm">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;