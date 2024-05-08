import React, { useState, useEffect } from "react";
import image from "../../assets/body1background.jpeg";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import { motion } from "framer-motion";
import "./bodysectionone.css";
import { useNavigate } from "react-router-dom";

const images = [image, pic1, pic4, pic3,pic2];

const BodySectionOne = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

const navigate = useNavigate();
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Optional: smooth scrolling animation
  });
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const transition = { type: "tween", duration: 1 }; // Change transition to "tween" and adjust duration

  return (
    <motion.div // Wrap the entire content in a motion.div for Framer Motion animation
      className="z-50 h-dvh sm:w-full mt-24 maindiv"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", // Center the background image
        marginTop: "80px",
        opacity: 0.9,
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation when component mounts
      exit={{ opacity: 0 }} // Animation when component unmounts
      transition={transition} // Apply the transition
    >
      <motion.h1 // Wrap each text element in a motion.h1 for Framer Motion animation
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        exit={{ opacity: 0, y: -50 }} // Animation when component unmounts
        transition={transition} // Apply the transition
        className="text-4xl sm:text-6xl pt-24 text-center overflow-hidden text-white font-bold text-resize"
      >
        Elevate Your Employee Wellness
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 500 }}
        transition={transition}
        className="text-4xl sm:text-6xl pt-10 text-center overflow-hidden italic text-white font-bold text-resize"
      >
        With
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={transition}
        className="text-4xl sm:text-6xl pt-10 text-center overflow-hidden text-white font-bold text-resize"
      >
        Restory Healthytech's AI-Driven Health Check!
      </motion.h1>

      <h3 className="text-lg sm:text-2xl pt-10 text-center text-resize">
        <mark className="bg-red-600 text-white">
          Give your employees the most advanced and AI-driven annual health
          checkup
        </mark>
      </h3>
      <div className="text-center pt-10">
        <button className="border-solid text-center border-2 my-5 border-l-yellow-50 w-max px-2 py-2 text-white rounded-md transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default BodySectionOne;
