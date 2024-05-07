import React from "react";
import aboutus from "../assets/aboutus.jpg";
import harsha from '../assets/harshaPic.jpg'
import subroto from '../assets/subroto.jpg'
import rajesh from '../assets/rajesh.jpg'

const About = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="flex justify flex-wrap justify-around p-9">
        <div>
          <img
            src={aboutus}
            className="h-auto mt-16"
            height="300"
            width="300"
            alt="image is loading"
          />
        </div>
        <div className="w-1/2 m-4">
          <div className="">
            <h3 className="text-2xl  font-medium text-gray-300 dark:text-gray-400">
              ABOUT US
            </h3>
            <h1 className="text-4xl font-bold overflow-hidden font-['Poppins']">
              WHO ARE WE
            </h1>
          </div>
          <div className="my-4">
            <p className="text-justify text-lg w-md font-['Poppins']">
              Restory HealthyTech is India’s first Geriatric Healthcare
              Technology Enterprise. We are a team of committed and passionate
              people who have seen our parents and grandparents go through the
              ageing process and realized that technology can simplify and add
              meaningful value to their lives and help them age with dignity.
            </p>
          </div>

          <div>
            <ul className="w-md space-y-1 list-disc list-inside">
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
                We have converged our feelings and experiences to achieve the
                Goal of reducing preventable hospitalizations of our seniors by
                70%
              </li>
              <li className="text-justify text-lg font-['Poppins']">
                We are a dedicated team of Doctors, Management Professionals,
                and Deep-tech experts with over 100 years of combined
                experience in the healthcare industry
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-9">
        <h1 className="text-4xl text-center font-bold overflow-hidden font-['Poppins'] pb-8">
          OUR TEAMS
        </h1>
        <div className=" flex flex-wrap justify-around my-8">
          <div className="hover:bg-cyan-300 hover:text-white relative">
          <div className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a href="https://www.facebook.com/restoryhealthytech/" className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a  href="https://twitter.com/RestoryH"  className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a  href="https://www.linkedin.com/company/restory-healthytech/mycompany/" className="mr-6 hover:bg-red-300 hover:p-1 hover:rounded-lg text-neutral-600 dark:text-neutral-200 text-lg mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z " />
              </svg>
            </a>
            </div>
            <img src={harsha} alt="image load" className="hover:bg-gray-200 rounded-lg p-2"/>
            <h5 className="text-2xl text-center font-bold overflow-hidden font-['Poppins']">Dr Harsha Guduru</h5>
            <p className="text-center  font-medium text-gray-300 dark:text-gray-400" >CEO</p>
          </div>

          <div className="hover:bg-cyan-300 hover:text-white relative">
          <div className="hover:bg-cyan-300 hover:text-white  relative">
          <div className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a href="https://www.facebook.com/restoryhealthytech/" className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a  href="https://twitter.com/RestoryH"  className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a  href="https://www.linkedin.com/company/restory-healthytech/mycompany/" className="mr-6 hover:bg-red-300 hover:p-1 hover:rounded-lg text-neutral-600 dark:text-neutral-200 text-lg mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            </div>

            <img src={subroto} alt="image load" className="hover:bg-gray-200 rounded-lg p-2"/>
            <h5 className="text-2xl text-center font-bold overflow-hidden font-['Poppins']">Subroto Banerjee</h5>
            <p className="text-center  font-medium text-gray-300 dark:text-gray-400">PRESIDENT MARKETING</p>
          </div>
          </div>
          <div className="hover:bg-cyan-300 hover:text-white relative">
          <div className="hover:bg-cyan-300 hover:text-white relative">
          <div className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a href="https://www.facebook.com/restoryhealthytech/" className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a  href="https://twitter.com/RestoryH"  className="mr-6 text-neutral-600 hover:text-white hover:bg-red-300 hover:p-1 hover:rounded-lg dark:text-neutral-200 text-lg mt-20"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a  href="https://www.linkedin.com/company/restory-healthytech/mycompany/" className="mr-6 hover:bg-red-300 hover:p-1 hover:rounded-lg text-neutral-600 dark:text-neutral-200 text-lg mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            </div>
            <img src={rajesh} alt="image load" className="hover:bg-gray-200 rounded-lg p-2"/>
            <h5 className="text-2xl text-center font-bold overflow-hidden font-['Poppins']">Rajesh Nair</h5>
            <p className="text-center  font-medium text-gray-300 dark:text-gray-400">COO</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



{/* <div className="hover:bg-cyan-300 hover:text-white">
            <img src={subroto} alt="image load" className="hover:bg-gray-200 rounded-lg p-2"/>
            <h5 className="text-2xl text-center font-bold overflow-hidden font-['Poppins']">Subroto Banerjee</h5>
            <p className="text-center  font-medium text-gray-300 dark:text-gray-400">PRESIDENT MARKETING</p>
          </div>

          <div className="hover:bg-cyan-300 hover:text-white">
            <img src={rajesh} alt="image load" className="hover:bg-gray-200 rounded-lg p-2"/>
            <h5 className="text-2xl text-center font-bold overflow-hidden font-['Poppins']">Rajesh Nair</h5>
            <p className="text-center  font-medium text-gray-300 dark:text-gray-400">COO</p>
          </div> */}