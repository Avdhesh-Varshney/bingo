import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav-container p-4">
      <div className="container mx-auto flex  items-center">
        <div className="text-white font-bold text-xl mr-5 ">Bingo</div>
        <ul className="flex space-x-4 ">
          <li>
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
