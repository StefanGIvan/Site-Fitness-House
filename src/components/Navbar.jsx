import React from "react";
import { Link } from "react-router-dom";
import fitnessHouseLogo from "/Photos/fitnessHouseLogo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primaryBlue text-white py-4 px-4">
      {/*Left-aligned Logo(Home) button*/}
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold hover:text-black">
          <img
            src={fitnessHouseLogo}
            alt="Fitness House Logo"
            className="w-20 h-auto mr-2 rounded"
          />
        </Link>
      </div>

      {/*Centered links*/}
      <div className="space-x-8">
        <Link to="/trainers" className="text-xl hover:text-black">
          Trainers
        </Link>
        <Link to="/gym-classes" className="text-xl hover:text-black">
          Gym Classes
        </Link>
        <Link to="/subscriptions" className="text-xl hover:text-black">
          Subscriptions
        </Link>
        <Link to="/contact" className="text-xl hover:text-black">
          Contact
        </Link>
      </div>

      {/*Right-aligned Account*/}
      <div className="flex-shrink-0">
        <Link
          to="/account"
          className="px-6 py-2 bg-secondaryBlue border-2 border-black rounded hover:text-black"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
