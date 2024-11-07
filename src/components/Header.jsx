import React from "react";
import headerBackground from "../Photos/headerBackground.jpg";

function Header() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/*Welcome Message*/}
      <div className="relative flex justify-start items-center h-full w-full">
        <div className="absolute top-[40%] text-left text-white space-y-4 max-w-md pl-20">
          <h1 className="text-5xl font-bold">Welcome to Fitness House!</h1>
          <p className="text-xl">
            We help you finally build the lifestyle you always wanted. Step by
            step, it is possible.
          </p>
          <button className="bg-primary text-white font-semibold border-2 border-primaryBlue py-2 px-4 rounded hover:text-black">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
