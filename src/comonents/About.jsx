import React from "react";
import aboutus from "../assets/aboutus.jpg";
import { FaCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex justify flex-wrap justify-around p-9"  style={{ marginTop: "80px" }}>
      <div>
        <img src={aboutus} className="h-auto mt-16 "  height="700" width="500"
        alt="image is loading" />
      </div>
      <div className="w-1/2 m-4">
        <div className="">
          <h3 className="text-2xl  font-medium text-gray-500 dark:text-gray-400">
            ABOUT US
          </h3>
          <h1 className="text-4xl font-bold overflow-hidden font-['Poppins']">WHO ARE WE</h1>
        </div>
        <div className="my-4">
          <p className="text-justify text-lg w-md font-['Poppins']">
            Restory HealthyTech is India’s first Geriatric Healthcare Technology
            Enterprise. We are a team of committed and passionate people who
            have seen our parents and grandparents go through the ageing process
            and realized that technology can simplify and add meaningful value
            to their lives and help them age with dignity.
          </p>
        </div>

        <div>
          <ul className=" w-md space-y-1 list-disc list-inside ">
            <li className="text-justify text-lg font-['Poppins']">   
              The Motivation of our journey stems from personal experience of
              witnessing the painful aging process of our parents and
              grandparents
            </li>
            <li className="text-justify text-lg font-['Poppins']">
             Our Passion is to alleviate the sufferings of our seniors while
              they age, gracefully.
            </li>
            <li className="text-justify text-lg font-['Poppins']">
           We strongly Believe that Quality of Life and Dignity in growing
              old is a Right and not an option for our elders.
            </li>
            <li className="text-justify text-lg font-['Poppins']">
            We have converged our feelings and experiences to achieve the Goal
              of reducing preventable hospitalizations of our seniors by 70%
            </li>
            <li className="text-justify text-lg font-['Poppins']">
              We are a dedicated team of Doctors , Management Professionals and
              Deep- tech experts with over 100 years of combined experience in
              the healthcare industry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
