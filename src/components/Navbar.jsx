import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaBook, FaBlog, FaMicrophone, FaChalkboardTeacher, FaFileAlt, FaUserGraduate, FaRobot } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/pages/book', label: 'Book', icon: <FaBook className="w-4 h-4" /> },
    { path: '/pages/blog-post', label: 'Blog Posts', icon: <FaBlog className="w-4 h-4" /> },
    { path: '/pages/talk', label: 'Talks', icon: <FaMicrophone className="w-4 h-4" /> },
    { path: '/pages/workshop', label: 'Workshop', icon: <FaChalkboardTeacher className="w-4 h-4" /> },
    { path: '/pages/publication', label: 'Publications', icon: <FaFileAlt className="w-4 h-4" /> },
    { path: '/pages/coaching', label: 'Coaching', icon: <FaUserGraduate className="w-4 h-4" /> },
    { path: '/pages/ai-playbook', label: 'AI Playbook', icon: <FaRobot className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
              ANUJ GUPTA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 px-2.5 py-1.5 rounded-md hover:bg-blue-700/50 text-sm"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-1.5 text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800/95 rounded-lg shadow-xl mb-2">
            <div className="px-2 pt-1 pb-2 space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-2 px-2.5 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;