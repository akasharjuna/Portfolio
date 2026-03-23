import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import heroPhoto from '../assets/hero_photo.png';
import resumePDF from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent transition-colors pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6 flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl md:text-2xl text-indigo-500 font-semibold tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
            <span className="text-gradient">Akash Arjun A</span>
          </h1>
          <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 flex space-x-2">
            <span>I am a</span>
            <span className="text-indigo-500 font-bold min-w-[200px]">
              <Typewriter
                options={{
                  strings: ['Full Stack Web Developer', 'MERN Stack Developer', 'AI Enthusiast', 'Software Developer'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'text-indigo-500',
                  cursorClassName: 'text-indigo-500'
                }}
              />
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
            I am a third-year IT student passionate about building highly scalable web applications, exploring Artificial Intelligence, and diving into Full Stack development. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 w-full">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 text-center w-full sm:w-auto">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full font-medium transition-all transform hover:-translate-y-1 text-center w-full sm:w-auto">
              Contact Me
            </a>
            <a href={resumePDF} download className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center w-full sm:w-auto">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Resume
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
              <img
                src={heroPhoto}
                alt="Akash Arjun"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
