import React from "react";

function TrainersPresentation() {
  const trainers = [
    { name: "Patrick Johnston", specialty: "Strength Training" },
    { name: "Jamie Baxter", specialty: "Yoga Instructor" },
    { name: "Isabel Fisher", specialty: "Cardio Specialist" },
    { name: "Brandon Austin", specialty: "Pilates Instructor" },
    { name: "Sarah Dawson", specialty: "Boxing Coach" },
    { name: "Noel Osborn", specialty: "Nutrition Expert" },
  ];

  return (
    <div className="w-full h-screen max-screen-xl mx-auto py-16 px-8 bg-softBlack">
      <h2 className="text-5xl text-primaryGreen font-semibold text-center mb-12 mt-32">
        MEET OUR TRAINERS!
      </h2>
      <h3 className="text-2xl text-white text-center mb-12">
        Our trainers are here to help you. Choose the one you prefer and let's
        walk this journey together!
      </h3>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {/* {trainers.map((trainer, index) => (

        ))}
        */}
      </div>
    </div>
  );
}

export default TrainersPresentation;
