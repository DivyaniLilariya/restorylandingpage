import React from 'react'
import clockicon from '../../assets/clockicon.png'
import bargraph from '../../assets/barGraph.png'
import uparrow from '../../assets/uparrow.png'

const BodySectionThree = () => {
  return (
    <div style={{ backgroundColor: "#6f42c1" }} className='flex flex-col md:flex-row md:flex-wrap justify-around py-32 md:py-8 sm:py-8 lg:py-32 xl:py-32 2xl:py-32'>
      <div className='w-full md:w-80 lg:w-96 mb-8 md:mb-0'>
        <img className="m-auto rounded-full shadow-md" src={clockicon} alt='image load' height={120} width={120} />
        <h5 className="text-center shadow-gray-500 font-bold my-6 text-white text-lg md:text-2xl overflow-hidden font-['Poppins']">Convenience & Efficiency</h5>
        <p className="text-justify sm:text-center md:text-center text-white font-['Poppins']">This is done at the convenience of their house or workplace based on employee requirement and organizational policy. The report comes as a overall score which is measurable and repeatable enabling comprehensive tracking of their health as a whole and for individual body systems</p>
      </div>
      <div className='w-full md:w-80 lg:w-96 mb-8 md:mb-0'>
        <img className="m-auto rounded-full shadow-md" src={bargraph} height={120} width={120} alt="image load" />
        <h5 className="text-center shadow-gray-500 font-bold my-6 text-white text-lg md:text-2xl overflow-hidden font-['Poppins']">Proactive Healthcare</h5>
        <p className="text-justify  sm:text-center md:text-center text-white font-['Poppins']">Early identification of medical, social and nutritional challenges and risks such as cardiac health, bone health, Gut health, brain health, kidney and liver health are provided</p>
      </div>
      <div className='w-full md:w-80 lg:w-96'>
        <img className="m-auto rounded-full shadow-md" src={uparrow} height={120} width={120} alt="image load" />
        <h5 className="text-center shadow-gray-500 font-bold my-6 text-white text-lg md:text-2xl overflow-hidden font-['Poppins']">Increased Productivity</h5>
        <p className="text-justify sm:text-center md:text-center text-white font-['Poppins']">Early identification of issues impacting quality of life, wellness and nutrition and trackable and measurable health insights will improve their productivity and satisfaction</p>
      </div>
    </div>
  )
}

export default BodySectionThree
