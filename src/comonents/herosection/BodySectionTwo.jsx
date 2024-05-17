import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

import image1 from '../../assets/img14.png';
import image2 from '../../assets/img15.png';
import image3 from '../../assets/img16.png';

const BodySectionTwo = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-t from-neutral-400 to-neutral-900 '>
      <div className="text-4xl overflow-hidden mt-10 text-center text-white font-bold">
        <span>Revolutionize Employee </span>
        <span>Wellness with AI-Powered </span>
        <span>Health Assessments</span>
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='p-5'
      >
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center m-4 '>
            <div className='w-full h-72 md:w-2/3 md:h-80 overflow-hidden '>
              <img src={image3} alt='Health Assessment' className='object-cover w-full h-full rounded-sm pl-2' />
            </div>
            <div className='w-full md:w-2/3 mt-4 md:mt-0 md:ml-4'>
              <p className="md:text-left text-white leading-7 md:leading-9 text-xl font-bold font-['Poppins'] ml-5">
                What sets Restory apart from others is our holistic approach to health assessment. In addition to standard blood parameters, we consider over 150 lifestyle factors including nutrition, psychological well-being, and social aspects to provide a thorough evaluation of individual health.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center m-4 '>
            <div className='w-full h-72 md:w-2/3 md:h-80 overflow-hidden '>
              <img src={image2} alt='Health Assessment' className='object-cover w-full h-full rounded-sm pl-2' />
            </div>
            <div className='w-full md:w-2/3 mt-4 md:mt-0 md:ml-4'>
              <p className="md:text-left leading-7 md:leading-9 text-xl font-bold font-['Poppins'] text-white ml-5">
                Our proprietary AI-driven LyfTrac Report synthesizes this information into actionable insights, empowering individuals to make informed and proactive decisions about their health. This is then reviewed by our Medical Team and personalised solutions are provided for each individual tailored to their requirements.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center m-4 '>
            <div className='w-full h-72 md:w-2/3 md:h-80 overflow-hidden '>
              <img src={image1} alt='Health Assessment' className='object-cover w-full h-full rounded-sm pl-2' />
            </div>
            <div className='w-full md:w-2/3 mt-4 md:mt-0 md:ml-4'>
              <p className="md:text-left leading-7 md:leading-9 text-xl font-bold font-['Poppins'] text-white ml-5">
                Furthermore, Restory conducts prescription audits for all participants, identifying potential drug-drug interactions and instances of medication duplication. Our aim is to ensure that each individual receives personalized attention and guidance for optimal health outcomes.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              color: white !important;
            }
            .swiper-pagination-bullet {
              background-color: white;
            }
            .swiper-pagination-bullet-active {
              background-color: blue;
            }

            @media (max-width: 768px) {
              .swiper-button-prev,
              .swiper-button-next {
                display: none !important;
              }
              .swiper-slide {
                padding: 0 !important;
                margin: 0 !important;
              }
              .swiper-slide img {
                border-radius: 0 !important;
                width: 100%; /* Take full width */
                height: 100%; /* Ensure full height */
                min-height: 200px; /* Minimum height */
              }
              .swiper-slide p {
                margin-left: 0 !important;
                width: 100%; /* Take full width */
              }
            }
          `}
        </style>
      </Swiper>
    </div>
  );
}

export default BodySectionTwo;
