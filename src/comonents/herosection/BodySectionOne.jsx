import React from "react";
import image from "../../assets/body1background.png";

const BodySectionOne = () => {
  return (
    <div
      className=" h-dvh"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      
      <h1 className="text-6xl pt-36 text-center  text-white font-bold">
        Elevate Your Employee Wellness
      </h1>
      <h1 className="text-6xl pt-10 text-center text-white font-bold italic">with</h1>
      <h1 className="text-6xl text-center pt-10 text-white font-bold">
        Restory Healthytech's AI-Driven Health Check!
      </h1>
      <h3 className="text-white text-2xl pt-10 text-center">
        Give your employees the most advanced and AI driven annual health
        checkup
      </h3>
      <div className="text-center pt-10">
 
        <button className=" border-solid text-center border-2 my-5 border-l-yellow-50 w-max px-2 py-2 text-white rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BodySectionOne;
