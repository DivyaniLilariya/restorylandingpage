import React from "react";
import lyftrac from "../assets/LyfTrac.jpg";
import pharmony from "../assets/PHarmony.jpg";
import activage from "../assets/Activage.jpg";
import subscription from '../assets/subscription.png'

const Services = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <h3 className="text-2xl text-center font-bold p-10 dark:text-gray-800  uppercase">
        Stay healthy with Lyftrac by Restory: Your complete year-round
        healthcare partner.
      </h3>
      <div className="mx-16 my-30">
        <h3 className="text-md pl-8 font-medium uppercase mb-4">
          Our Single Yearly Subscription includes :
        </h3>

        <ol className="space-y-1 pl-8 list-decimal list-inside">
          <li>90+ Parameters Master Health Check</li>
          <li>
            150 Lifestyle and Functional parameters for identifying health risks
          </li>
          <li>Daily healthcare tracking via Whatsapp</li>
          <li>Quarterly blood tests to track your progress</li>
          <li>Prescription audits for drug-drug interactions</li>
          <li>On demand Counselling and Quarterly Assessments</li>
          <li>Intuitive Smart reports</li>
          <li>Nutritional Guidance</li>
          <li>Daily Activage Functional Fitness</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl text-center font-bold p-10 dark:text-gray-800  uppercase">
          To request for a sample report and brochure copy call us on +91 80082
          47365
        </h3>

        <div className="flex flex-wrap  px-16 justify-around my-16">
          <div className="border-2 w-96 rounded-md h-96">
            <div className="">
              <img src={lyftrac} className="h-28 hover:bg-sky-700 " alt="image loading" />
            </div>
            <div className="w-full  px-9 ">
              <h3 className="text-xl text-center font-bold mb-5">LYFTRAC</h3>
              <p className="text-justify font-normal  text-gray-700">
                A Comprehensive and holistic health assessment using medical and
                lifestyle data. It assesses pathological values, physiological
                parameters, nutritional status, physical and emotional health to
                develop a personalised and proprietary LyfTrac Score to help
                improve your quality of life
              </p>
            </div>
          </div>

          <div className="border-2 w-96 rounded-md">
            <div>
              <img src={pharmony} className="h-28" alt="image loading" />
            </div>
            <div className="w-full px-9">
              <h3 className="text-xl text-center font-bold mb-5">PHARMONY</h3>
              <p className="text-justify font-normal text-gray-700">
                Analyze drug interactions basis your different prescriptions
                thus preventing potential adverse events in elders who are on
                multiple medications
              </p>
            </div>
          </div>

          <div className=" border-2 w-96 rounded-md">
            <div>
              <img src={activage} className="h-28" alt="image loading" />
            </div>
            <div className="w-full px-9">
              <h3 className="text-xl text-center font-bold mb-5">ACTIVAGE</h3>
              <p className="text-justify font-normal text-gray-700">
                It is devised for elders to incorporate physical exercises into
                their daily routine without any special equipment which can be
                done from the comfort of their home, hence taking care of your
                physical and functional fitness
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* subscription section */}
      <div className="my-20">
        <img src={subscription} className="m-auto" height={870} width={1310} alt="subscription image loading"/>
      </div>
    </div>
  );
};

export default Services;
