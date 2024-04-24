import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ExpertCard from './ExpertCard';
import { FaArrowLeftLong } from 'react-icons/fa6';

const AyurvedaExperts = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    console.log(sliderIndex);
    const handleSlideChange = (swiper) => {
        setSliderIndex(swiper.realIndex);
    
    };
  return (
    <div className='w-full py-20'>
        <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-16'>
            <div className='flex flex-col items-center gap-y-10 lg:gap-y-16'>
                <div className='text-[32px] lg:text-[48px] text-[#3A643B] font-bold leading-[36px] lg:leading-[54px] text-center lg:border-[#C3D0C4] lg:border-b-[5px] px-1 lg:px-6'>
                    Meet Our Ayurveda Experts
                </div>

                <div className='flex flex-col gap-y-16 w-full'>
                    <div className='flex items-center w-full'>
                        <div className='text-[#BCBCBC] w-[10%] hover:cursor-pointer hidden lg:flex'>
                            <div className='text-[#BCBCBC] border-[#BCBCBC] border-[1px] rounded-full w-[70px] h-[70px] flex items-center justify-center'><FaArrowLeftLong size={24}/></div>
                        </div>

                        <div className='w-full lg:w-[80%]'>
                            <Swiper
                                // slidesPerView={1}
                                spaceBetween={20}
                                navigation={{
                                    nextEl: ".swiper_button_next3",
                                    prevEl: ".swiper_button_prev3",
                                }}
                                // pagination={true}
                                keyboard={true}
                                mousewheel={{forceToAxis:true,thresholdDelta:30}}
                                onSlideChange={(swiper) => handleSlideChange(swiper)}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                breakpoints={{
                                    300: { spaceBetween: 10, slidesPerView: 1 },
                                    320: { spaceBetween: 10, slidesPerView: 1 },
                                    375: { spaceBetween: 10, slidesPerView: 1 },
                                    425: { spaceBetween: 10, slidesPerView: 1 },
                                    500: { spaceBetween: 10, slidesPerView: 1 },
                                    768: { slidesPerView: 2, spaceBetween: 10 },
                                    1024: { slidesPerView: 3 ,spaceBetween:20},
                                }}
                                className="mySwiper"
                            >
                                <SwiperSlide><ExpertCard/></SwiperSlide>
                                <SwiperSlide><ExpertCard/></SwiperSlide>
                                <SwiperSlide><ExpertCard/></SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='hidden lg:flex rotate-180 w-[10%] hover:cursor-pointer'>
                            <div className='text-[#BCBCBC] border-[#BCBCBC] border-[1px] rounded-full w-[70px] h-[70px] flex items-center justify-center'><FaArrowLeftLong size={24}/></div>
                        </div>
                    </div>

                    <div className='w-fit mx-auto hidden lg:flex lg:flex-row justify-center items-center gap-x-3 bg-[#DBE3DC63] border-[#3A643B] border-[1px] rounded-[7px] px-5 py-3 text-[#3A643B] font-medium text-[24px] hover:cursor-pointer'>
                        <div>Find more experts</div>
                        <FiChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AyurvedaExperts