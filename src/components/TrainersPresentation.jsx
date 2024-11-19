import React from "react";
import trainer1 from "../../public/Photos/Trainers/trainer1.jpg";
import trainer2 from "../../public/Photos/Trainers/trainer2.jpg";
import trainer3 from "../../public/Photos/Trainers/trainer3.jpg";
import trainer4 from "../../public/Photos/Trainers/trainer4.jpg";
import trainer5 from "../../public/Photos/Trainers/trainer5.jpg";
import trainer6 from "../../public/Photos/Trainers/trainer6.jpg";

function TrainersPresentation() {
  const trainers = [
    {
      name: "Patrick Johnston",
      specialty: "Boxing Trainer",
      image: trainer1,
      description:
        "Patrick Johnston is a passionate Boxing Trainer dedicated to helping his clients achieve peak fitness and confidence through strength and technique. With years of experience in both personal training and boxing, Patrick brings motivation, discipline, and a wealth of knowledge to every session. He believes in building not just physical power but also mental resilience in his trainees, guiding them step-by-step to push their limits and achieve their goals.",
    },
    {
      name: "Jamie Baxter",
      specialty: "Calisthenics Instructor",
      image: trainer2,
      description:
        "Jamie Baxter is a dedicated Calisthenics Instructor who believes in harnessing the power of the human body to achieve extraordinary feats. Specializing in bodyweight strength and functional fitness, Jamie uses minimal equipment to help clients build impressive strength, flexibility, and control. His training sessions focus on mobility, endurance, and mastering advanced calisthenics moves like muscle-ups and planches, ensuring every client reaches new heights of athleticism while staying injury-free.",
    },
    {
      name: "Alexander Fisher",
      specialty: "Cardio Specialist",
      image: trainer3,
      description:
        "Alexander Fisher is a dedicated Cardio Specialist who understands the importance of cardiovascular fitness for overall health and wellness. With years of experience in both indoor and outdoor cardio workouts, Alexander focuses on helping clients improve their endurance, stamina, and heart health. Whether it's high-intensity interval training (HIIT), running, cycling, or functional cardio exercises, Alexander creates dynamic and fun workout programs tailored to each individual's fitness level and goals.",
    },
    {
      name: "Brandon Austin",
      specialty: "Pilates Instructor",
      image: trainer4,
      description:
        "Brandon Austin is a dedicated Pilates Instructor, known for his innovative approach to building core strength and flexibility. With a focus on helping clients improve their posture, mobility, and overall stability, Brandon's classes blend traditional Pilates techniques with modern fitness elements. Whether you're a beginner or looking to deepen your practice, Brandon is committed to helping you enhance your body awareness and develop strength from the inside out.",
    },
    {
      name: "Sam Dawson",
      specialty: "Fitness Coach",
      image: trainer5,
      description:
        "Sam Dawson is a passionate Fitness Coach with a focus on personalized training programs that help clients achieve their fitness goals efficiently. Whether you want to lose weight, gain muscle, or simply lead a healthier lifestyle, Sam's expertise ensures every workout is both effective and enjoyable. Known for his motivating attitude, Sam adapts his training style to meet each individual’s needs, pushing you to excel while respecting your limits.",
    },
    {
      name: "Noel Osborn",
      specialty: "Nutrition Expert",
      image: trainer6,
      description:
        "Noel Osborn is a dedicated Nutrition Expert who believes that proper diet is the foundation of an active and healthy lifestyle. With years of experience in guiding clients towards optimal nutrition, Noel creates customized meal plans that align with your fitness goals—whether it's weight loss, muscle gain, or improved overall health. Known for his motivational approach and positive attitude, Noel combines his deep knowledge of nutrition with practical advice to help you make sustainable lifestyle changes.",
    },
  ];

  return (
    <div className="bg-softBlack max-w-full mx-auto py-32 px-8 min-h-screen">
      <h2 className="text-primaryGreen text-5xl font-bold text-center mb-6">
        Meet Our Trainers
      </h2>
      <h3 className="text-2xl text-center text-white mb-20">
        Our trainers are here to help you.{" "}
        <span className="text-primaryGreen">Click on the one you prefer</span>{" "}
        and let's walk this journey together!
      </h3>
      <div className="flex flex-wrap justify-center gap-16">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-primaryGreen rounded-lg shadow-lg overflow-hidden transition duration-300 hover:hover:shadow-xl hover:scale-105 w-[600px] h-[850px]"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-[60%] object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold mb-1">{trainer.name}</h3>
              <p className="text-xl text-secondaryGray mb-3">
                {trainer.specialty}
              </p>
              <p className="text-xl text-justify">{trainer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainersPresentation;
