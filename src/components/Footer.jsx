import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../public/Photos/instagramIcon.svg";
import facebookIcon from "../../public/Photos/facebookIcon.svg";
import youtubeIcon from "../../public/Photos/youtubeIcon.svg";
import mapsIcon from "../../public/Photos/mapIcon.svg";
import calendarIcon from "../../public/Photos/calendarIcon.svg";
import handshakeIcon from "../../public/Photos/handshakeIcon.svg";

function Footer() {
  return (
    <footer className="bg-darkBlack text-white py-16 px-8">
      <div className="text-center mb-8 items-center">
        <h2 className="text-5xl">VISIT US</h2>
        <p className="text-lg mt-8 text-center leading-relaxed text-gray-300">
          Come to Fitness House and discover the ultra-modern rooms,
          <br /> with a design specially thought to motivate you, to give you
          space and fill you with energy. <br /> We are waiting for you!
        </p>
        <h4 className="text-2xl mt-8 text-primaryGreen font-semibold">
          CONTACT US ON:
        </h4>
        <div className="flex flex-row justify-center mt-4 space-x-4">
          <Link to="/">
            <img src={instagramIcon} alt="Instagram Icon" />
          </Link>
          <Link to="/">
            <img src={facebookIcon} alt="Facebook Icon" />
          </Link>
          <Link to="/">
            <img src={youtubeIcon} alt="Youtube Icon" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-16 justify-evenly">
          <div className="text-md flex flex-row">
            <img src={mapsIcon} alt="Maps Icon" className="w-14 h-14 mr-8" />
            <div className="text-gray-300">
              <h3 className="text-xl mb-4 text-white">CONTACT DETAILS</h3>
              <p>Fitness House</p>
              <p>Bd.Iuliu Maniu 6Q, Etaj 11</p>
              <p>Phone number: +40723762478</p>
              <p>Sales number: +40784502333</p>
              <p>stefanivan41@gmail.com</p>
            </div>
          </div>

          <div className="text-md flex flex-row">
            <img
              src={calendarIcon}
              alt="Calendar Icon"
              className="w-14 h-14 mr-8"
            />
            <div className="text-gray-300">
              <h3 className="text-xl mb-4 text-white">SCHEDULE</h3>
              <p>L-Vi: 06:00 – 22:00</p>
              <p>S-D: 09:00 – 19:00</p>
            </div>
          </div>

          <div className="text-md flex flex-row ">
            <img
              src={handshakeIcon}
              alt="Handshake Icon"
              className="w-14 h-14 mr-8"
            />
            <div className="text-gray-300">
              <h3 className="text-xl mb-4 text-white">CORPORATE</h3>
              <p>E-mail: stefanivan41@gmail.com</p>
              <p>Phone number: +40786340211</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
