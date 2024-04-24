import React, { useState } from 'react'
import '../App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ApproachSection = () => {
    const data = [
        {
            id:1,
            title: "Make Appointment",
            desc: "You must make an appointment in advance, to choose the service and date.",
        },
        {
            id:2,
            title: "Consultations",
            desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
        },
        {
            id:3,
            title: "Treatment Planning",
            desc: "The Ayurvedic practitioner creates a personalized treatment plan for you",
        },
        {
            id:4,
            title: "Maintenance",
            desc: "These visits allow for assessment of progress, adjustments to the treatment.",
        },
    ]
    const [sliderIndex, setSliderIndex] = useState(0);
    console.log(sliderIndex)
    const handleSlideChange = (swiper) => {
        setSliderIndex(swiper.realIndex);
    
    };
  return (
    <div className='w-full py-20'>
        <div className='w-10/12 mx-auto flex flex-col gap-y-20'>
            <div className='flex flex-col items-center gap-y-5'>
                <div className='text-[32px] text-center lg:text-[48px] font-bold text-[#3A643B] leading-[41px] lg:leading-[61px] lg:border-[#C3D0C4] lg:border-b-[6px] px-2 lg:px-5'>
                    Our Ayurvedic Approach
                </div>

                <div  className='text-[16px] text-center text-[#323232] lg:text-[20px] font-normal leading-7'>
                    At Amrutam we follow a unique and personalized approach to healing. Our expert <br className='lg:block hidden'/> practitioners begin each treatment process by conducting a thorough analysis of the <br className='lg:block hidden'/> patient’s body type, medical history, and current health conditions.
                </div>
            </div>

            <div className='hidden lg:flex lg:flex-row w-full justify-between'>
                {
                    data.map((i) => (
                        <div className='flex flex-col gap-y-5 items-center bg-[#FFF7E2] w-[24%] rounded-[20px] border-[#3A643B] border-t-4 pt-5 pb-12 px-6'>
                            <div className='w-[90px] h-[90px] bg-[#3A643BA8] text-white rounded-full flex justify-center items-center border-[#3A643B] border-[1px] text-[48px] font-bold'>{i.id}</div>

                            <div className='flex flex-col items-center'>
                                <div className='text-[24px] text-center text-[#3A643B] font-bold'>{i.title}</div>
                                <div className='text-center text-[20px] font-normal text-[#2E2E2E]'>{i.desc}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-row lg:hidden w-full'>
                <Swiper
                slidesPerView={1.1}
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
                    300: { spaceBetween: 10, slidesPerView: 1.15 },
                    320: { spaceBetween: 10, slidesPerView: 1.15 },
                    375: { spaceBetween: 10, slidesPerView: 1.15 },
                    425: { spaceBetween: 10, slidesPerView: 1.15 },
                    500: { spaceBetween: 10, slidesPerView: 1.15 },
                    640: {spaceBetween:10, slidesPerView:2.1},
                    768: { slidesPerView: 2.5, spaceBetween: 10 },
                    // 1024: { slidesPerView: 4.15 ,spaceBetween:20},
                }}
                className="mySwiper"
            >
    
                {
                        data.map((i) => (
                            <SwiperSlide>
                                <div className='flex flex-col gap-y-5 items-center bg-[#FFF7E2] w-[100%] rounded-[20px] border-[#3A643B] border-t-4 pt-5 pb-12 px-4 max-h-[315px] min-h-[315px]'>
                                    <div className='min-w-[90px] min-h-[90px] bg-[#3A643BA8] text-white rounded-full flex justify-center items-center border-[#3A643B] border-[1px] text-[48px] font-bold'>{i.id}</div>

                                    <div className='flex flex-col items-center w-full gap-y-2'>
                                        <div className='text-[24px] text-center text-[#3A643B] font-bold leading-[30px]'>{i.title}</div>
                                        <div className='text-center text-[20px] font-normal text-[#2E2E2E] leading-6'>{i.desc}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default ApproachSection