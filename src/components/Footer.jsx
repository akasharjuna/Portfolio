import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="glass border-t-0 py-8 transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
          &copy; {new Date().getFullYear()} Akash Arjun A. All rights reserved.
        </p>
        <p className="text-gray-600 dark:text-gray-400 flex items-center font-medium">
          Built with <FiHeart className="mx-2 text-red-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
