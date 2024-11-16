import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <section className="bg-softBlack px-20 py-20 h-screen text-white">
      <div className="w-full max-w-screen-2xl h-full mx-auto p-10 shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-2">FITNESS HOUSE</h1>
        <h2 className="text-3xl font-semibold text-center mb-14">
          Registration
        </h2>
        <form className="space-y-6">
          {/*Input Fields*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-end pr-5">
              <label
                className="self-start text-lg font-medium pl-44"
                htmlFor="firstName"
              >
                FIRST NAME*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-col items-start pl-5">
              <label className="text-lg font-medium" htmlFor="lastName">
                LAST NAME*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-col items-end pr-5">
              <label
                className="self-start text-lg font-medium pl-44"
                htmlFor="email"
              >
                E-MAIL*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-col items-start pl-5">
              <label className="text-lg font-medium" htmlFor="phoneNumber">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
          </div>
          {/*Select Field*/}
          <div className="flex flex-col items-start pl-44 pt-6">
            <label className="text-lg font-medium mb-2" htmlFor="subject">
              SUBJECT*
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-11/12 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            >
              <option value="">Choose subject...</option>
              <option value="registration">Registration</option>
              <option value="free">Free day pass</option>
              <option value="buyback">BuyBack program</option>
            </select>
          </div>

          <div className="flex flex-col items-start pl-44 pt-6">
            <label className="text-lg font-medium mb-2" htmlFor="message">
              MESSAGE
            </label>
            <input
              type="text"
              name="message"
              rows="10"
              cols="40"
              maxlength="2000"
              className="w-11/12 h-48 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            />
          </div>

          <div className="pl-44 pt-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="terms" className="text-md">
              I have read the site's{" "}
              <Link to="/" className="text-primaryGreen underline">
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link to="/" className="text-primaryGreen underline">
                privacy policy
              </Link>
              .
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primaryGreen text-black font-semibold rounded-full transition duration-300 hover:bg-primaryGreen hover:shadow-primaryGreenGlow shadow-lg"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
