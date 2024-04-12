import React from 'react'
import image from '../../assets/body1background.png'

const BodySectionOne = () => {
  return (
    <div  className='w-screen h-dvh' style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <h1 className='text-7xl text-white font-bold' >Elevate Your Employee Wellness with Restory Healthytech's AI-Driven Health Check!</h1>
      <h4 className='text-white font-bold'>Give your employees the most advanced and AI driven  annual health checkup</h4>
      <button className=' w-max text-white rounded-md'>Learn More</button>
    
    </div>
  )
}

export default BodySectionOne