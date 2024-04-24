import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import {IoStar} from 'react-icons/io5'

const ValuedCustomers = () => {
    const data = [
        {
            id:1,
            title: "Consulted for Skin",
            titleColor:"#ECE7FF",
            name:"Sophie Moore",
            city:"Chennai",
            date:"17/02/24",
            reviewTitle:"One of a kind service",
            reviewDesc:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
        {
            id:2,
            title: "Consulted for hair",
            titleColor:"#ECFEE7",
            name:"Sophie Moore",
            city:"Mumbai",
            date:"17/02/24",
            reviewTitle:"One of a kind service",
            reviewDesc:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
        {
            id:3,
            title: "Consulted for hair",
            titleColor:"#ECFEE7",
            name:"Sophie Moore",
            city:"Chennai",
            date:"17/02/24",
            reviewTitle:"One of a kind service",
            reviewDesc:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
    ];
    const [sliderIndex, setSliderIndex] = useState(0);
    console.log(sliderIndex);
    const handleSlideChange = (swiper) => {
        setSliderIndex(swiper.realIndex);
    
    };
  return (
    <div className='w-full bg-[#FFF7E2] py-20'>
        <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-20'>
        <div className='flex flex-col items-center gap-y-5'>
                <div className='text-[32px] text-center lg:text-[48px] font-bold text-[#3A643B] leading-[41px] lg:leading-[61px] lg:border-[#C3D0C4] lg:border-b-[6px] px-2 lg:px-5'>
                    Stories from our valued customers
                </div>
                
                <div className='flex flex-row w-full'>
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
                        300: { spaceBetween: 10, slidesPerView: 1.1 },
                        320: { spaceBetween: 10, slidesPerView: 1.1 },
                        375: { spaceBetween: 10, slidesPerView: 1.1 },
                        425: { spaceBetween: 10, slidesPerView: 1.1 },
                        500: { spaceBetween: 10, slidesPerView: 1.5 },
                        640: {spaceBetween:10, slidesPerView:2.1},
                        768: { slidesPerView: 2.3, spaceBetween: 10 },
                        1024: { slidesPerView: 3 ,spaceBetween:20},
                    }}
                    className="mySwiper"
                    >
                        {
                            data.map((i) => (
                                <SwiperSlide className='lg:w-1/3'>
                                    <div className='flex flex-col w-[100%]'>
                                        <div style={{ backgroundColor: `${i.titleColor}` }} className='text-base lg:text-[18px] font-bold rounded-t-[20px] pl-[26px] py-3'>
                                            {i.title}
                                        </div>

                                        <div className='bg-white rounded-b-[20px] w-full flex flex-col py-8 gap-y-3'>
                                            <div className='flex flex-row justify-between items-center w-10/12 mx-auto'>
                                                <div className='flex flex-row items-center gap-x-2'>
                                                    <div className='bg-[#515151] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full'></div>
                                                    <div className='flex flex-col'>
                                                        <div className='text-[#414141] text-base font-medium'>{i.name}</div>
                                                        <div className='text-[15px] font-normal'>{i.city}</div>
                                                    </div>
                                                </div>
                                                <div className='text-[12px] font-normal'>{i.date}</div>
                                            </div>
                                            <div className='w-10/12 text-[#EEDE4D] mx-auto flex flex-row gap-x-3 pt-3'>
                                                <IoStar size={24}/> <IoStar size={24}/> <IoStar size={24}/> <IoStar size={24}/> <IoStar size={24}/>
                                            </div>
                                            <div className='w-10/12 mx-auto text-[20px] text-[#333333] lg:text-[22px] font-bold'>{`"${i.reviewTitle}"`}</div>
                                            <div className='w-[88%]  mx-auto text-[#555555] leading-[30px] font-normal text-base lg:text-[18px]'>{i.reviewDesc}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ValuedCustomers