import React from 'react'
import clockicon from '../../assets/clockicon.png'
import bargraph from '../../assets/barGraph.png'
import uparrow from '../../assets/uparrow.png'

const BodySectionThree = () => {
  return (
    <div className=' flex flex-row justify-around pt-16' >
      <div className='w-1/4'>
           <img  className="m-auto" src={clockicon} alt='image load' height={120} width={120}/> 
          <h5 className="text-center font-bold my-8  text-2xl">Convenience & Efficiency</h5>
          <div><p className='text-justify'>This is done at the convenience of their house or workplace based on employee requirement and organizational policy. The report comes as a overall score which is measurable and repeatable enabling comprehensive tracking of their health as a whole and for individual body systems</p></div>
      </div>
      <div className='w-1/4'>
          <div> <img  className="m-auto" src={bargraph}  height={120} width={120} />  </div>
          <h5 className="text-center font-bold my-8  text-2xl">Proactive Healthcare</h5>
          <div><p className='text-justify'>Early identification of medical, social and nutritional challenges and risks such as cardiac health, bone health, Gut health, brain health, kidney and liver health are provided</p></div>
      </div>
      <div className='w-1/4'>
          <div> <img className="m-auto" src={uparrow}  height={120} width={120}/>  </div>
          <h5 className="text-center font-bold my-8  text-2xl">Increased Productivity</h5>
          <div><p className='text-justify'>Early identification of issues impacting quality of life, wellness and nutrition and trackable and measurable health insights will improve their productivity and satisfaction</p></div>
      </div>
    </div>
  )
}

export default BodySectionThree