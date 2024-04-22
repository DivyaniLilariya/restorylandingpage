import React from "react";

const BodySectionfour = () => {
  return (
    <div
      className="w-screen h-screen text-white"
      style={{
        background:"linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      overflow:"hidden"
      }}
    >
      <div class="container mx-auto flex px-5 pt-20 items-center justify-center flex-col text-center lg:w-5/12 w-full">
        <h1 className="my-4 text-5xl font-bold leading-tight overflow-hidden  font-['Poppins'] mt-3">
          Tailored Solutions for Your Business Needs
        </h1>

        <p className="text-2xl mb-8 pt-4 text-justify font-['Poppins'] overflow-hidden " >
          Depending on organizational policies and budgets this is available in
          a variety of of offerings suited to all organizations at price points
          between INR 1200 - INR 4000 per head to cater to diverse company needs
          and policies.
        </p>
      </div>

      <div className="flex justify-center mx-auto">
        <button
          onClick={() => console.log("leads to the contact form")}
          className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8"
        >
          Get a Quote
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default BodySectionfour;
