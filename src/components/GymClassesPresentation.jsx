import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GymClasses() {
  const [classes, setClasses] = useState([]);

  //GET gym classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          "https://67c8693b0acf98d070867559.mockapi.io/stefan-fitness-api/classes"
        );
        setClasses(response.data);
      } catch (error) {
        console.log("Error fetching gym classes: ", error);
        toast.error("Error fetching gym classes: ", error);
      }
    };
    fetchClasses();
  }, []);

  //PATCH request joinNow
  const handleJoinNow = async (classId, joinNowStatus) => {
    try {
      if (joinNowStatus) {
        toast.success("You have already joined this class!");
        return;
      }
      await axios.patch(
        `https://67c8693b0acf98d070867559.mockapi.io/stefan-fitness-api/classes/:id`,
        {
          joinNow: true,
        }
      );
      setClasses((prevClasses) =>
        prevClasses.map((gymClass) =>
          gymClass.id === classId ? { ...gymClass, joinNow: true } : gymClass
        )
      );
      toast.success("You have joined the class!");
    } catch (error) {
      console.log("Error joining gym class: ", error);
      toast.error("Error joining gym class: ", error);
    }
  };

  return (
    <div>
      <div className="bg-darkBlack pt-40 pb-8">
        <h2 className="text-primaryGreen text-5xl font-bold text-center mb-6">
          Our Gym classes!
        </h2>
        <h3 className="text-2xl text-center font-semibold text-white mb-12">
          Check out our variety of classes to help you get fit and stay
          motivated!
        </h3>
      </div>
      <div className="bg-softBlack max-w-full mx-auto py-32 px-8 min-h-screen">
        <div className="flex flex-wrap flex-row justify-center gap-16">
          {classes.map((gymClass) => (
            <div
              key={gymClass.id}
              className="bg-primaryGreen rounded-2xl shadow-lg overflow-hidden
              transition duration:300 hover:shadow-purpleGlow w-[600px]
              h-[850px]"
            >
              <img
                src={gymClass.image}
                alt={gymClass.name}
                className="w-full h-[60%] object-cover object-top"
              />
              <div className="p-6 text-left flex flex-col">
                <h3 className="text-3xl font-semibold mb-1">{gymClass.name}</h3>
                <p className="text-xl text-secondaryGray mb-3">
                  {gymClass.instructor}
                </p>
                <p className="text-xl text-justify">{gymClass.description}</p>
                <button
                  className="align-center text-white bg-purple px-4 py-2 mt-8 mx-auto rounded-2xl font-semibold transition duration:300 hover:shadow-lg hover:shadow-purpleGlow hover:scale-105"
                  onClick={() => handleJoinNow(gymClass.id, gymClass.joinNow)}
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GymClasses;
