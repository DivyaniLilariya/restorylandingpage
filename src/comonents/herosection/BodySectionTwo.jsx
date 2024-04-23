import React, { useState } from "react";
import "./bodysectiontwo.css";
import image1 from "../../assets/t-image1.png";
import image2 from "../../assets/t-image2.jpg";
import image3 from "../../assets/t-image3.jpg";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightnewarrow.jpg";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    image: image1,
    review:
      "What sets Restory apart from others is our holistic approach to health assessment. In addition to standard blood parameters, we consider over 150 lifestyle factors including nutrition, psychological well-being, and social aspects to provide a thorough evaluation of individual health. ",
  },
  {
    image: image2,
    review:
      "Our proprietary AI driven LyfTrac Report synthesizes this information into actionable insights, empowering individuals to make informed and proactive decisions about their health. This is then reviewed by our Medical Team and personalised solutions are provided for each individual tailored to their requirements  ",
  },
  {
    image: image3,
    review:
      "Furthermore, Restory conducts prescription audits for all participants, identifying potential drug-drug interactions and instances of medication duplication. Our aim is to ensure that individual receives personalized attention and guidance for optimal health outcomes",
  },
];
const BodySectionTwo = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div>
      <div className="testimonials">
        <div className="  text-4xl mt-10 text-center overflow-hidden text-white font-bold ">
          <span> Revolutionize Employee </span>
          <span > with Wellness AI-Powered </span>
          <span> Health Assessments</span>
        </div>
      </div>
      <div className="testimonials" id="testimonial">
        <div
          className="left-t my-24 leading-10 text-xl"
          style={{ lineHeight: "50px",marginTop:"150px" }}
        >
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
        </div>
        <div className="right-t my-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt=""
            height={1000}
            width={600}
          />
          <div className="arrows">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={leftArrow}
              alt=""
            />
            <img
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={rightArrow}
              alt="" // Make sure alt text is provided
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionTwo;
