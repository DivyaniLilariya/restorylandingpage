import React from "react";
import image from "../../assets/background.gif";
import { motion } from "framer-motion";

const BodySectionOne = () => {
  const transition={type:"spring",duration:3}
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop:'90px',
        opacity:0.9
      }}
    >
      
      <h1 className="text-6xl pt-36 text-center overflow-hidden  text-white font-bold">
        Elevate Your Employee Wellness
      </h1>
      <h1 className="text-6xl pt-10 text-center overflow-hidden text-white font-bold italic">with</h1>
      <h1 className="text-6xl text-center pt-10 overflow-hidden text-white font-bold">
        Restory Healthytech's AI-Driven Health Check!
      </h1>
      <h3 className="text-white text-2xl pt-10 text-center">
        Give your employees the most advanced and AI-driven annual health checkup
      </h3>
      <div className="text-center pt-10">
        <button className="border-solid text-center border-2 my-5 border-l-yellow-50 w-max px-2 py-2 text-white rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BodySectionOne;
