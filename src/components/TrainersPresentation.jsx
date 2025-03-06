import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function TrainersPresentation() {
  const [trainers, setTrainers] = useState([]);

  //GET trainers
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get(
          "https://67c8693b0acf98d070867559.mockapi.io/stefan-fitness-api/trainers"
        );
        setTrainers(response.data);
      } catch (error) {
        console.log("Error fetching trainers: ", error);
        toast.error("Error fetching trainers: ", error);
      }
    };

    fetchTrainers();
  }, []);

  //PATCH chosen trainer
  const handleChoose = async (trainerId, isChosen) => {
    try {
      //Check if a trainer was already chosen
      const alreadyChosen = trainers.some(
        (trainer) => trainer.chosen & (trainer.id !== trainerId)
      );
      if (alreadyChosen && !isChosen) {
        toast.error("Only one trainer can be chosen at a time.");
        return;
      }
      await axios.patch(
        `https://67c8693b0acf98d070867559.mockapi.io/stefan-fitness-api/trainers/:id`,
        {
          chosen: !isChosen,
        }
      );
      //Update state to reflect the chosen/unchosen trainer
      setTrainers((prevTrainers) =>
        prevTrainers.map((trainer) =>
          trainer.id === trainerId ? { ...trainer, chosen: !isChosen } : trainer
        )
      );
      toast.success(isChosen ? "Trainer unchosen!" : "Trainer chosen!");
    } catch (error) {
      console.log("Error choosing/unchoosing trainer: ", error);
      toast.error("Error choosing/unchoosing trainer: ", error);
    }
  };

  return (
    <div>
      <div className="bg-darkBlack pt-40 pb-8">
        <h2 className="text-primaryGreen text-5xl font-bold text-center mb-6">
          Meet Our Trainers
        </h2>
        <h3 className="text-2xl text-center text-white mb-20">
          Our trainers are here to help you.{" "}
          <span className="text-primaryGreen">Click on the one you prefer</span>{" "}
          and let's walk this journey together!
        </h3>
      </div>
      <div className="bg-softBlack max-w-full mx-auto py-32 px-8 min-h-screen">
        <div className="flex flex-wrap justify-center gap-16">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-primaryGreen rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-purpleGlow w-[600px] h-[850px]"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[60%] object-cover object-top"
              />
              <div className="p-6 text-left flex flex-col">
                <h3 className="text-3xl font-semibold mb-1">{trainer.name}</h3>
                <p className="text-xl text-secondaryGray mb-3">
                  {trainer.specialty}
                </p>
                <p className="text-xl text-justify">{trainer.description}</p>
                <button
                  className="align-center text-white bg-purple  px-4 py-2 mt-4 mx-auto rounded-full font-semibold transition duration-300 hover:shadow-lg hover:shadow-purpleGlow hover:scale-105"
                  onClick={() => handleChoose(trainer.id, trainer.chosen)}
                >
                  {trainer.chosen ? "Unchoose" : "Choose"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainersPresentation;
