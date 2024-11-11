import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import GymClasses from "./Pages/GymClasses";
import Subscriptions from "./Pages/Subscriptions";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Trainers />
    <GymClasses />
    <Subscriptions />
    <Contact />
    <Account />
  </StrictMode>
);
