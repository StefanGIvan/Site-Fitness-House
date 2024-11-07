import React from "react";
import { Link } from "react-router-dom";
import fitnessHouseLogo from "../Photos/fitnessHouseLogo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primaryBlue text-white py-4 px-4">
      {/*Left-aligned Logo(Home) button*/}
      <div className="flex-shrink-0">
        <link to="/" className="text-2xl font-bold hover:text-black">
          <img
            src={fitnessHouseLogo}
            alt="Fitness House Logo"
            className="w-20 h-auto mr-2 rounded"
          />
        </link>
      </div>

      {/*Centered links*/}
      <div className="space-x-8">
        <link to="/trainers" className="text-xl hover:text-black">
          Trainers
        </link>
        <link to="/gymClasses" className="text-xl hover:text-black">
          Gym Classes
        </link>
        <link to="/subscriptions" className="text-xl hover:text-black">
          Subscriptions
        </link>
        <link to="/contact" className="text-xl hover:text-black">
          Contact
        </link>
      </div>

      {/*Right-aligned Account*/}
      <div className="flex-shrink-0">
        <link
          to="/account"
          className="px-6 py-2 bg-secondaryBlue border-2 border-black rounded hover:text-black"
        >
          Account
        </link>
      </div>
    </nav>
  );
}

export default Navbar;
