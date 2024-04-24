import React from 'react'
import '../App.css'
import BannerImage from '../assets/bannerImage.png'
import BannerMobile from '../assets/bannerMobile.png'

const HeroBanner = () => {
  return (
    <div className='w-full h-[100vh] lg:h-[100vh] relative bg-[#861916]'>
        <div className="absolute inset-0  bg-gradient-to-b from-[#181818DE] to-[#2222227A] lg:bg-gradient-to-r lg:from-[#121212E0] lg:via-[#121212EB] lg:to-[#01010100] lg:gradient z-[10]"></div>
        
        <div className='w-10/12 mx-auto'>
            <div className='w-[95%] lg:w-[70%] absolute top-1/4 lg:top-14 z-[100] flex flex-col gap-y-4 lg:gap-y-7'>
                <div className='text-[#FFF7E2] text-base lg:text-[28px] font-normal'>Namaste, Welcome to Amrutam</div>
                <div className='text-[24px] lg:text-[48px] font-bold text-white'>Step into Holistic Healing with Ayurveda Book Consultation with certified Experts.</div>
                <div className='text-[#C9C9C9] font-medium text-[20px] leading-7 w-full lg:w-3/4'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</div>
                <div className='bg-[#3A643B] text-white text-[14px] lg:text-[20px] font-medium rounded-2xl w-fit hover:cursor-pointer mt-0 px-10 py-5'>BOOK AN APPOINTMENT</div>
            </div>

            {/* <div  style={{backgroundImage: `url(${BannerImage})`}} className='w-1/2 h-full absolute right-0 top-0'></div> */}
            <img src={BannerImage} alt='BannerImage' className='w-[60%] h-full absolute right-0 top-0 hidden lg:flex'/>
            <img src={BannerMobile} alt='MobileBannerImage' className='w-full h-full absolute top-0 left-0 flex lg:hidden'/>
        </div>
    </div>
  )
}

export default HeroBanner