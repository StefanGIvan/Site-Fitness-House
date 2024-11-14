import React from "react";
import { Link } from "react-router-dom";
import fitnessHouseLogo from "/Photos/fitnessHouseLogo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black/70 backdrop-blur-md text-white py-2 px-4 fixed top-0 left-0 w-full z-50">
      {/*Left-aligned Logo(Home) button*/}
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold hover:text-black">
          <img
            src={fitnessHouseLogo}
            alt="Fitness House Logo"
            className="w-24 h-auto mr-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </Link>
      </div>

      {/*Centered links*/}
      <div className="space-x-8">
        <Link
          to="/trainers"
          className="text-xl shadow-lg transition duration-300 hover:text-primaryGreen"
        >
          Trainers
        </Link>
        <Link
          to="/gym-classes"
          className="text-xl shadow-lg transition duration-300 hover:text-primaryGreen"
        >
          Gym Classes
        </Link>
        <Link
          to="/subscriptions"
          className="text-xl shadow-lg transition duration-300 hover:text-primaryGreen"
        >
          Subscriptions
        </Link>
        <Link
          to="/contact"
          className="text-xl shadow-lg transition duration-300 hover:text-primaryGreen"
        >
          Contact
        </Link>
      </div>

      {/*Right-aligned Account*/}
      <div className="flex-shrink-0">
        <Link
          to="/account"
          className="px-6 py-2 bg-secondaryGray border-2 border-black rounded-full shadow-lg transition duration-300 hover:text-primaryGreen hover:shadow-primaryGreenGlow"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
