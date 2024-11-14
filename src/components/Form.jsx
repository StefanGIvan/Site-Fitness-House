import React from "react";

function Form() {
  return (
    <section className="bg-softBlack px-20 py-20 h-screen text-white">
      <div className="w-full max-w-screen-2xl mx-auto p-10 shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-2">FITNESS HOUSE</h1>
        <h2 className="text-3xl font-semibold text-center mb-8">
          Registration
        </h2>
        <form className="space-y-6">
          {/*Input Fields*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div>
                <label
                  className="items-start block text-lg font-medium"
                  htmlFor="firstName"
                >
                  FIRST NAME*
                </label>
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="block text-lg font-medium" htmlFor="lastName">
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
            <div className="flex flex-col items-center">
              <label
                className="justify-start block text-lg font-medium"
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
            <div className="flex flex-col items-center">
              <label
                className="block text-lg font-medium"
                htmlFor="phoneNumber"
              >
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
          <div className="flex flex-col items-start">
            <label className="block text-lg font-medium mb-2" htmlFor="subject">
              SUBJECT*
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-3/4 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            >
              <option value="">Choose subject...</option>
              <option value="registration">Registration</option>
              <option value="free">Free day pass</option>
              <option value="buyback">BuyBack program</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
