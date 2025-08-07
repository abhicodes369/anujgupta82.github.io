import React from 'react';
import { FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Anuj Gupta
            </h3>
            <p className="text-gray-400 text-sm">
              © 2025 Anuj Gupta | All Rights Reserved
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              I'm always excited to meet new people. Let's connect and see where it takes us!
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
            >
              <FaEnvelope className="mr-2" />
              contact@example.com
            </a>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a 
                href="https://www.linkedin.com/in/anujgupta-82/" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/anujgupta82" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://gradient-advisors.ai/" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-gray-400 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Empowering businesses through AI innovation and strategic leadership
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;