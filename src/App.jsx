import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import GymClasses from "./Pages/GymClasses";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right" // Position of the toast on the page
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false} // Show the progress bar
        newestOnTop={false} // Place new toast at the bottom
        closeOnClick // Allow closing the toast on click
        rtl={false} // Right to left layout
        pauseOnFocusLoss // Pause the toast timer on focus loss
        draggable // Allow the toast to be draggable
        pauseOnHover={false} // Pause the timer on hover
        theme="dark" // Optional: set theme to "dark" for a darker appearance
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gym-classes" element={<GymClasses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
