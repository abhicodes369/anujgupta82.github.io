import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaUserTie, FaBook, FaHandshake } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import Anujgupta from "../assets/images/Anuj_formal_high_res.png"

function Sidebar() {
  return (
    <aside className="w-1/5 bg-white p-8 rounded-lg shadow-lg py-2 h-fit pb-16">
      <div className="author__avatar mb-4 flex flex-col items-center">
        <img
          src={Anujgupta}
          className="w-40 h-40 mx-auto rounded-full border-4 border-blue-100 shadow-lg object-cover mt-16"
          alt="Anuj Gupta"          
        />
        
      </div>
      
      <div className="author__content flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Anuj Gupta</h3>
        
        <div className="mb-4 text-center">
          <p className="text-md font-medium text-blue-700 tracking-tight flex items-center justify-center gap-2">
            <FaUserTie className="text-blue-600" /> 
            On-Demand Head of AI | AI Advisor to Boards
          </p>
          <div className="w-16 h-0.5 bg-blue-100 mx-auto mt-2"></div>
        </div>
        
        <div className="text-sm text-gray-700 space-y-3">
          <p className="leading-snug flex items-start gap-2">
            <span className="mt-1 text-blue-600"><FaHandshake /></span>
            <span>
              <span className="font-medium text-gray-800">Helping Organizations</span> with their AI efforts.
            </span>
          </p>
          <p className="leading-snug flex items-start gap-2">
            <span className="mt-1 text-blue-600"><FaUserTie /></span>
            <span>
              <span className="font-medium text-gray-800">Coached 100+ CXOs</span> on AI adoption.
            </span>
          </p>
          <p className="leading-snug flex items-start gap-2">
            <span className="mt-1 text-blue-600"><FaBook /></span>
            <span>
              <span className="font-medium text-gray-800">Author</span> of Practical NLP (O'Reilly US) | 
              <span className="font-medium text-gray-800"> Angel Investor</span> | 
              <span className="font-medium text-gray-800"> Board Member</span>
            </span>
          </p>
        </div>
      </div>

      <div className="author__urls-wrapper mt-16">
        <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2.5 px-4 rounded-md transition-all duration-300 mb-6 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Follow
        </button>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/in/anujgupta-82/"
               className="text-[#0077B5] hover:text-[#005582] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
                <FaLinkedin className="w-7 h-7" />
            </a>
            <a href="https://twitter.com/anujgupta82"
               className="text-black hover:text-gray-800 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="X (Twitter)"
            >
                <FaXTwitter className="w-7 h-7" />
            </a>
            <a href="https://github.com/anujgupta82"
               className="text-[#333] hover:text-black transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="GitHub"
            >
                <FaGithub className="w-7 h-7" />
            </a>
          </div>
          
          <div className="flex space-x-5">
            <a href="https://gradient-advisors.ai/"
               className="text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Gradient Advisors"
            >
                <FaGlobe className="w-7 h-7" />
            </a>
            <a href="https://pragmaticai1.substack.com/"
               className="text-[#FF6719] hover:text-[#e05a14] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Substack"
            >
                <SiSubstack className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;