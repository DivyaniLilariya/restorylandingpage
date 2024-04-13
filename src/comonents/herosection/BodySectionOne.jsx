import React from "react";
import image from "../../assets/background.gif";
import { motion } from "framer-motion";

const BodySectionOne = () => {
  const transition={type:"spring",duration:6}
  return (
    <div
      className=" h-dvh"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop:'90px'
      }}
    >
      
      <motion.h1
      initial={{opacity:0,x:-500}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:500}}
      transition={transition}
      className="text-6xl pt-36 text-center overflow-hidden  text-white font-bold">
      Elevate Your Employee Wellness
      </motion.h1>

      <motion.h1
      initial={{opacity:0,y:-500}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:500}}
      transition={transition}
      className="text-6xl pt-10 text-center overflow-hidden italic  text-white font-bold">
      With
      </motion.h1>

      <motion.h1
      initial={{opacity:0,x:-500}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:500}}
      transition={transition}
      className="text-6xl pt-10 text-center overflow-hidden  text-white font-bold">
      Restory Healthytech's AI-Driven Health Check!
      </motion.h1>

     
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
