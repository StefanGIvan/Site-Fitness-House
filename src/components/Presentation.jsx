import React from "react";
import appStore from "../../public//Photos/appStore.png";
import googlePlay from "../../public/Photos/googlePlay.png";
import backgroundPhone from "../../public/Photos/backgroundPhone.jpg";
import phone from "../../public/Photos/phone.png";

function Presentation() {
  return (
    <>
      {/*First Part of Presentation*/}
      <section className="bg-primaryGreen py-16 px-8 text-black">
        {/*Main Amplify Section */}
        <div className="max-w-7xl mx-auto text-center mb-24 ">
          <h1 className="text-7xl font-bold mb-8">Amplify</h1>
          <h2 className="text-5xl font-bold mb-8">
            When you move, life amplifies
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Fitness House means an entire ecosystem of fitness and wellness
            created to amplify every move you make. You will benefit from the
            advantages of a fully digitalized gym, but also ftom the coaching of
            our professional trainers. All for a great training session!
          </p>
        </div>

        {/*Feature section*/}
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-around items-start gap-y-24 text-center px-4">
          {/*Feature 1*/}
          <div className="w-[20%] min-w-[250px] flex flex-col items-center">
            <div className="text-5xl mb-4">🏋️</div>
            <div>
              <h3 className="text-xl font-bold mb-2">HIGH-END EQUIPMENT</h3>
              <p className="text-left text-md leading-relaxed">
                For us, premium is standard! Starting from the appliances, to
                the way the space is arranged - our services are of the best
                quality - regardless of the subscription you choose.
              </p>
            </div>
          </div>

          {/*Feature 2*/}
          <div className="w-[20%] min-w-[250px] flex flex-col items-center">
            <div className="text-5xl mb-4">⌚</div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                YOU MONITOR YOUR EVOLUTION EASILY!
              </h3>
              <p className="text-left text-md leading-relaxed">
                With the Sweat bracelet you have control over your training! The
                bracelet records the number of calories burned, heart rate,
                duration and intensity of effort, relating them to the goals you
                have set. With the Sweat Workout Tracking app you can check
                everything easily.
              </p>
            </div>
          </div>

          {/*Feature 3*/}
          <div className="w-[20%] min-w-[250px] flex flex-col items-center">
            <div className="text-5xl mb-4">🤝</div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                INVOLVED IN YOUR SUCCESS!
              </h3>
              <p className="text-left text-md leading-relaxed">
                We are with you step by step on your way to results. You will
                work alongside experienced fitness trainers who will guide you
                and boost your enthusiasm for movement.
              </p>
            </div>
          </div>

          {/*Feature 4*/}
          <div className="w-[20%] min-w-[250px] flex flex-col items-center">
            <div className="text-5xl mb-4">🌍</div>
            <div>
              <h3 className="text-xl font-bold mb-2">COMMUNICATION & SPACE</h3>
              <p className="text-left text-md leading-relaxed">
                At Sweat, community is everything. That's why we have a limited
                number of members for each room. That way you'll meet only
                motivated people with whom you can share your passion for
                fitness, and you'll enjoy a spacious, never crowded space.
              </p>
            </div>
          </div>
        </div>

        {/*Second Part of Presentation*/}
        <div className="max-w-screen-2xl text-center mx-auto mt-24">
          <h2 className="text-5xl font-bold mb-2">OUR APPS</h2>
          <h3 className="text-2xl font-bold mb-6">WORK OUT SMART, NOT HARD</h3>
        </div>

        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16 mt-16 relative">
          {/*Text & Buttons Section*/}
          <div className="flex-1 z-10">
            <p className="text-lg mb-8 leading-relaxed">
              Through apps and technology in the gym you amplify your every
              move. Fitness House is a guided transformational experience.
            </p>
            <p className="text-xl font-bold mb-2">
              Here are some benefits of our apps:
            </p>
            <h3 className="text-2xl font-bold mb-4">FITNESS HOUSE APP</h3>
            <ul className="list-disc ml-5 text-lg mb-8">
              <li>Super easy check in & out</li>
              <li>Book fitness classes anytime</li>
              <li>You schedule your sessions with your own fitness coach</li>
            </ul>
            <h3 className="text-2xl font-bold mb-4">DOWNLOAD THE APP</h3>
            <div className="flex">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-40 h-auto"
              />
              <img
                src={appStore}
                alt="Download on the App Store"
                className="w-40 h-auto"
              />
            </div>
          </div>

          {/*Phone & Image Section*/}
          <div className="flex flex-1 items-center justify-center relative">
            <img
              src={backgroundPhone}
              alt="Gym Background"
              className="absolute w-full h-auto max-h-[500px] lg:w-[1200px] lg:max-h-[600px] rounded-lg shadow-lg object-cover"
            />
            <img
              src={phone}
              alt="Fitness House App on Phone"
              className="w-[300px] lg:w-[400px] shadow-lg z-10 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Presentation;
