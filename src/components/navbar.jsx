import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/20 border-b border-white/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center p-5">
        <ul className="flex space-x-10 text-lg font-semibold text-gray-500">
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#Works" className="hover:text-blue-400 transition">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
