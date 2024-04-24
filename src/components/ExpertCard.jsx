import React from 'react'
import Image from '../assets/AyurvedaExpert/ExpertImage.png'
import { IoStar } from 'react-icons/io5'
import { RiGraduationCapLine } from 'react-icons/ri'
import { BiCapsule } from 'react-icons/bi'

const ExpertCard = () => {
  return (
    <div className='bg-[#FFF7E2] rounded-[40px] flex flex-col gap-y-10 items-center'>
        <div className='relative flex justify-center pt-8'>
            <img src={Image} alt='ExpertImage'/>
            <div className='flex flex-row items-center absolute -bottom-2 py-1 px-3 rounded-[17px] bg-gradient-to-r from-[#0B0B0B] to-[#0B0B0BC9]'>
                <div className='text-white text-base font-bold'>4.5</div>
                <IoStar color='#EFDA3B'/>
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-1'>
            <div className='text-[20px] font-semibold'>Dr. Vaishali Sharma</div>
            <div className=' font-inter text-center text-[#838383] text-[15px] font-medium'>Ayurveda Practitioner (BAMS, MD)</div>
            <div className='flex flex-row gap-x-2 items-baseline text-base font-normal'>
                <div><RiGraduationCapLine/></div>
                <div>25 years of experience</div>
            </div>
            <div className='flex flex-row items-center gap-x-2 bg-[#3A643B1F] text-[#3A643B] text-base font-semibold rounded-[18px] mt-4 py-[6px] px-[13px]'>
                <div><BiCapsule size={18}/></div>
                <div>Skin Specialist</div>
            </div>
        </div>
        <div className='bg-[#3A643B] w-full rounded-b-[40px] text-center py-[19px] text-[20px] font-semibold text-white hover:cursor-pointer'>Book a session</div>
    </div>
  )
}

export default ExpertCard