import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

import MeghnarCert from '../assets/meganar.pdf';
import JekaCert from '../assets/jeka internship certificate.pdf';
import MLCert from '../assets/Coursera ml.pdf';
import GAILCert from '../assets/GAIL.pdf';
import BitsCert from '../assets/Bits and Bytes.pdf';

const experienceAndCerts = [
  {
    id: 1,
    title: 'AI Developer Intern',
    issuer: 'Meghnar Technologies',
    date: 'Jun 2025',
    description: 'Worked on AI-based tutor video generation system for automated educational content creation.',
    link: MeghnarCert
  },
  {
    id: 2,
    title: 'C# Developer Intern',
    issuer: 'Jeka Innovations',
    date: 'Dec 2025',
    description: 'Worked with C# for backend logic development and implemented OOP principles in real-world projects.',
    link: JekaCert
  },

  {
    id: 4,
    title: 'Machine Learning Introduction for Everyone-Certification',
    issuer: 'Coursera',
    date: 'Completed',
    description: '',
    link: MLCert
  },
  {
    id: 5,
    title: 'Generative AI Leader Track-Certification',
    issuer: 'Google',
    date: 'Completed',
    description: '',
    link: '#'
  },
  {
    id: 6,
    title: 'The Bits and Bytes of Computer Networking-Certification',
    issuer: 'Google',
    date: 'Completed',
    description: '',
    link: '#'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceAndCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiAward size={100} className="text-indigo-500" />
              </div>
              <div className="relative z-10">
                <span className="text-sm font-semibold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-4 inline-block">
                  {cert.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                  View Details <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
