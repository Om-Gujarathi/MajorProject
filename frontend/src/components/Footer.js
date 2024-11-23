import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-200 p-6 shadow-inner">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Footer Logo and Name */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/763/734/non_2x/3d-cv-resume-icon-png.png"
            alt="Company Logo"
            className="w-10 h-10 transition-transform transform hover:scale-110 duration-300"
          />
          <div className="text-orange-900 text-xl font-bold">
            TalentLen
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-4 sm:mb-0">
          <a href="/about" className="text-orange-700 hover:text-orange-900 transition-colors duration-300">
            About Us
          </a>
          <a href="/contact" className="text-orange-700 hover:text-orange-900 transition-colors duration-300">
            Contact
          </a>
          <a href="/privacy" className="text-orange-700 hover:text-orange-900 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="/terms" className="text-orange-700 hover:text-orange-900 transition-colors duration-300">
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="Twitter"
              className="w-8 h-8 transition-transform transform hover:scale-110 duration-300"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="Facebook"
              className="w-8 h-8 transition-transform transform hover:scale-110 duration-300"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8 transition-transform transform hover:scale-110 duration-300"
            />
          </a>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="text-center text-orange-800 mt-4 text-sm">
        © 2024 TalentLen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
