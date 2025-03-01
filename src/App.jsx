import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Smooth scrolling implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Experience id="experience" />
        {/* <Contact id="contact" /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;