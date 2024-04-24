import React from 'react'
import BackgroundImage from '../assets/BookConsultation/BgImg.png'

const BookConsultation = () => {
  return (
    <div style={{backgroundImage: `url(${BackgroundImage})`}} className='relative h-[590px] w-full flex flex-row justify-center bg-cover'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00000096] to-[#0E0E0E66]"></div>
        <div className='flex flex-col justify-center items-center h-full w-11/12 lg:w-[60%] z-20 gap-y-10'>
            <div className='text-[32px] lg:text-[64px] text-[#FFF7E2] font-medium text-center'>Ready to restore harmony in your mind, body and spirit?</div>

            <div className='text-[20px] lg:text-[24px] font-medium bg-[#3A643B] text-white px-10 py-5 rounded-[16px] hover:cursor-pointer'>Book a consulatation</div>
        </div>
    </div>
  )
}

export default BookConsultation