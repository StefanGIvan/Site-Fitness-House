import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import gymPattern from "../../public/Photos/gymPattern.png";

function Form({ variant }) {
  //State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    terms: false,
  });

  //Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  //POST client data
  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Sending data to db.json
      const response = await axios.post(
        "http://localhost:3000/registrations",
        formData
      );
      console.log("Form Submitted:", response.data);
      toast.success("Form successfully submitted!");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form:", error);
    }
    //Clear the input fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      terms: false,
    });
  };

  return (
    <section
      className={`${
        variant === "contact" ? "py-32" : "bg-softBlack py-20"
      } px-20 h-screen text-white`}
      style={{
        backgroundImage: variant === "contact" ? `url(${gymPattern})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${
          variant === "contact" ? "bg-softBlack" : ""
        } w-1/2 max-w-screen-2xl h-full mx-auto p-10 shadow-lg`}
      >
        <h1 className="text-5xl font-bold text-center mb-2">FITNESS HOUSE</h1>
        <h2 className="text-3xl font-semibold text-center mb-14 text-primaryGreen">
          Registration
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/*Input Fields*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-row md:flex-col items-start md:items-center">
              <label
                className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
                htmlFor="firstName"
              >
                FIRST NAME*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full md:w-2/3 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-row md:flex-col items-start md:items-center">
              <label
                className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
                htmlFor="lastName"
              >
                LAST NAME*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full md:w-2/3 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-row md:flex-col items-start md:items-center">
              <label
                className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
                htmlFor="email"
              >
                E-MAIL*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full md:w-2/3 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-row md:flex-col items-start md:items-center">
              <label
                className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
                htmlFor="phoneNumber"
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full md:w-2/3 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
          </div>
          {/*Select Field*/}
          <div className="flex flex-row md:flex-col items-start md:items-center">
            <label
              className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
              htmlFor="subject"
            >
              SUBJECT*
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-5/6 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            >
              <option value="">Choose subject...</option>
              <option value="registration">Registration</option>
              <option value="free">Free day pass</option>
              <option value="buyback">BuyBack program</option>
            </select>
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-center">
            <label
              className="self-center md:w-auto mb-2 md:mr-2 text-lg font-medium"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              type="text"
              name="message"
              rows="10"
              cols="40"
              maxlength="2000"
              value={formData.message}
              onChange={handleChange}
              className="w-5/6 h-48 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            />
          </div>

          <div className="flex items-center pl-24 pt-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required={formData.terms}
              onChange={handleChange}
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
