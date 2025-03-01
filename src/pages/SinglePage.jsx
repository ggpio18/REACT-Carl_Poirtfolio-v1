import React, { useEffect, useState } from 'react'

import { ChevronRight } from 'lucide-react';

export const SinglePage = () => {
    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Poppins'] text-gray-900 overflow-x-hidden">
    {/* Header */}
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolling ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">Jawad.com</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-pink-500 transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-pink-500 transition-colors">Services</a>
          <a href="#projects" className="font-medium hover:text-pink-500 transition-colors">Projects</a>
          <a href="#testimonials" className="font-medium hover:text-pink-500 transition-colors">Testimonials</a>
        </nav>
        
        <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">Let's Talk</button>
      </div>
    </header>

    {/* Hero Section */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hello, I'm <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">Jawad</span>,<br />
            ui/ux designer<br />
            based in USA.
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            I am a freelance ux/x designer with experience of 3 years. In this 3 years I have worked at many big companies & startups
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">GET IN TOUCH</button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors">VIEW ALL WORKS</button>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 rounded-full opacity-20 absolute"></div>
          <div className="relative z-10">
            <svg className="w-64 h-64 md:w-80 md:h-80 absolute top-0 left-0" viewBox="0 0 400 400" fill="none">
              <path d="M200 0L250 50L300 25L325 75L375 100L350 150L375 200L325 225L300 275L250 250L200 300L150 250L100 275L75 225L25 200L50 150L25 100L75 75L100 25L150 50L200 0Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <defs>
                <linearGradient id="paint0_linear" x1="25" y1="25" x2="375" y2="275" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6B6B"/>
                  <stop offset="0.5" stopColor="#FF8E53"/>
                  <stop offset="1" stopColor="#9B6DFF"/>
                </linearGradient>
              </defs>
            </svg>
            <img 
              src="/api/placeholder/320/320" 
              alt="Jawad" 
              className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover relative z-10" 
            />
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Services I Am Providing</h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            I am giving all kind of ui/ux service you need with good price. I am ensure quality with unlimited revisions. So you can get best design
          </p>
          <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">GET IN TOUCH</button>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">WEB DESIGN</h3>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">APP DESIGN</h3>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">DASHBOARD DESIGN</h3>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">DESIGN STRATEGY</h3>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Scrolling Tags */}
    <div className="py-8 overflow-hidden bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-white mx-4 text-xl font-semibold">• Web Design</span>
        <span className="text-white mx-4 text-xl font-semibold">• App Design</span>
        <span className="text-white mx-4 text-xl font-semibold">• Dashboard</span>
        <span className="text-white mx-4 text-xl font-semibold">• Strategy</span>
        <span className="text-white mx-4 text-xl font-semibold">• Web Design</span>
        <span className="text-white mx-4 text-xl font-semibold">• App Design</span>
        <span className="text-white mx-4 text-xl font-semibold">• Dashboard</span>
        <span className="text-white mx-4 text-xl font-semibold">• Strategy</span>
      </div>
    </div>

    {/* Projects Section */}
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Client Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src="/api/placeholder/400/300" 
                alt="Web Design Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">WEB DESIGN</h3>
                <p className="text-gray-600 text-sm">Did so many complex web designs with code designs & code templates.</p>
              </div>
              <span className="text-lg font-bold">500+ project</span>
            </div>
          </div>
          
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src="/api/placeholder/400/300" 
                alt="App Design Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">APP DESIGN</h3>
                <p className="text-gray-600 text-sm">Did so many complex app designs with wireframes & mockups.</p>
              </div>
              <span className="text-lg font-bold">350+ project</span>
            </div>
          </div>
          
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src="/api/placeholder/400/300" 
                alt="Dashboard Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">DASHBOARD</h3>
                <p className="text-gray-600 text-sm">I have designed so many dashboards & web admin panels with data visualization.</p>
              </div>
              <span className="text-lg font-bold">250+ project</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">15+</h3>
            <p className="text-gray-300 uppercase text-sm">PROJECTS DONE</p>
          </div>
          
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">7+ Years</h3>
            <p className="text-gray-300 uppercase text-sm">EXPERIENCE</p>
          </div>
          
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">100%</h3>
            <p className="text-gray-300 uppercase text-sm">CLIENTS SATISFACTION</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">EXPLORE OUR CLIENTS FEEDBACK</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <p className="text-gray-600 mb-6">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a gallery of type specimen book.</p>
            <div className="flex items-center">
              <img 
                src="/api/placeholder/48/48" 
                alt="John Smith" 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-semibold">John Smith</h4>
                <p className="text-gray-500 text-sm">CEO, Company</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <p className="text-gray-600 mb-6">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a gallery of type specimen book.</p>
            <div className="flex items-center">
              <img 
                src="/api/placeholder/48/48" 
                alt="Robert Smith" 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-semibold">Robert Smith</h4>
                <p className="text-gray-500 text-sm">CTO, Company</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <p className="text-gray-600 mb-6">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a gallery of type specimen book.</p>
            <div className="flex items-center">
              <img 
                src="/api/placeholder/48/48" 
                alt="Maria Doe" 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-semibold">Maria Doe</h4>
                <p className="text-gray-500 text-sm">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have An Awesome Project Idea? Let's Discuss</h2>
        </div>
        
        <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all mt-6 md:mt-0">Start Project</button>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600">
              I am a freelance ux/x designer with experience of 3 years. In this 3 years I have worked at many big companies & startups
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About Me</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>

  );
};