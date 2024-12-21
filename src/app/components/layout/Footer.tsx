"use client"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <motion.div
        className="container mx-auto flex justify-center items-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Social Media Links */}
        <a
          href="https://github.com/brianhilsden"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-omondi-1603529a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://x.com/BrianHilsden?t=cpd9ZhEJxI3JSb2NfD5CnA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaTwitter className="w-8 h-8" />
        </a>
      
      </motion.div>

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Brian Omondi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
