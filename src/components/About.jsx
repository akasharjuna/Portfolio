import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiCpu } from 'react-icons/fi';

const timeline = [
  {
    year: '2023 - 2027',
    title: 'B.Tech in Information Technology',
    institution: 'Thiagarajar College Of Engineering',
    description: 'CGPA: 8.01. Focusing on core computer science subjects, Full Stack web development, and AI methodologies.'
  },
  {
    year: '2023',
    title: 'Higher Secondary (12th)',
    institution: 'St.Paul’s Matric Higher Secondary School',
    description: 'Graduated with 95.6%. Built a strong foundation in mathematics and computer science fundamentals.'
  },
  {
    year: '2021',
    title: 'High School (10th)',
    institution: 'St.Paul’s Matric Higher Secondary School',
    description: 'Successfully passed with a solid understanding of core STEM subjects.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm Akash Arjun, a passionate third-year IT student with a strong inclination towards full-stack web development, MERN stack, and Artificial Intelligence. I believe in the power of technology to solve real-world problems and constantly strive to build scalable, intelligent, and user-centric applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring the latest AI advancements, developing Discord bots and automated systems, or actively contributing as a volunteer to community welfare initiatives.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <FiCode size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Web Dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                  <FiCpu size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">AI & ML</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                  <FiBookOpen size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Avid Learner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                  <FiAward size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Problem Solver</span>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education & Experience
            </h3>
            <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 pl-6 space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-800"></div>
                  <span className="text-sm font-semibold text-indigo-500 tracking-wide uppercase">{item.year}</span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
