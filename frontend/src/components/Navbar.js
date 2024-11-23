import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-orange-200 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo and Project Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/763/734/non_2x/3d-cv-resume-icon-png.png"
            alt="Company Logo"
            className="w-10 h-10 transition-transform transform hover:scale-110 duration-300"
          />
          <div className="text-orange-900 text-2xl font-bold">
            TalentLen
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:flex space-x-8 hidden">
          <a
            href="/"
            className="font-semibold text-orange-700 hover:text-orange-900 transition-colors duration-300 hover:underline py-2"
          >
            Home
          </a>
          <a
            href="/upload"
            className="font-semibold text-orange-700 hover:text-orange-900 transition-colors duration-300 hover:underline py-2"
          >
            Upload
          </a>
          <a
            href="/reccomend"
            className="font-semibold text-orange-700 hover:text-orange-900 transition-colors duration-300 hover:underline py-2"
          >
            Recommendation
          </a>
          <a
            href="/cost"
            className="font-semibold text-orange-700 hover:text-orange-900 transition-colors duration-300 hover:underline py-2"
          >
            Pricing
          </a>
        </div>


        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-orange-700 transition-transform transform hover:scale-110 duration-300"
          />
          <div className="text-orange-700 hover:text-orange-900 font-semibold">
            Guest
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
