import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import GymClasses from "./Pages/GymClasses";
import Subscriptions from "./Pages/Subscriptions";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gym-classes" element={<GymClasses />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
