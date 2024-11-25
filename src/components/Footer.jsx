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
          <Link to="/Contact">
            <img src={instagramIcon} alt="Instagram Icon" />
          </Link>
          <Link to="/Contact">
            <img src={facebookIcon} alt="Facebook Icon" />
          </Link>
          <Link to="/Contact">
            <img src={youtubeIcon} alt="Youtube Icon" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-16 justify-evenly">
          <div className="text-md flex flex-row md:w-1/3 justify-center">
            <img src={mapsIcon} alt="Maps Icon" className="w-14 h-14 mr-8" />
            <div className="text-gray-300">
              <h3 className="text-xl mb-4 text-white">CONTACT DETAILS</h3>
              <p>Fitness House</p>
              <p>Bd.Iuliu Maniu 6Q, Etaj 11</p>
              <p>Phone number: +40723762478</p>
              <p>Sales number: +40784502333</p>
              <p>stefanivan41@gmail.com</p>
            </div>

            {/*Google Maps*/}
            <div className="w-full md:w-1/3 h-64 ml-10">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.556149385451!2d26.070073515649427!3d44.43794887910344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4d1e6e1e9f%3A0x7f5ec3f63569e1a2!2sBd.%20Iuliu%20Maniu%206Q%2C%20Bucharest!5e0!3m2!1sen!2sro!4v1699999999999!5m2!1sen!2sro"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-2 border-black rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="text-md flex flex-row md:w-1/3 justify-center">
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

          <div className="text-md flex flex-row md:w-1/3 justify-center">
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
