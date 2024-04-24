import React from 'react'
import {FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'
import {PiYoutubeLogoThin, PiTwitterLogoThin} from 'react-icons/pi'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
    const footerData = [
        {
            id: 1,
            title: "About Us",
        },
        {
            id: 2,
            title: "Terms and Conditions",
        },
        {
            id: 3,
            title: "Privacy Policy",
        },
        {
            id: 4,
            title: "Privacy Policy for Mobile Apps",
        },
        {
            id: 5,
            title: "Shipping and Return Policy",
        },
        {
            id: 6,
            title: "International Delivery",
        },
        {
            id: 7,
            title: "For Buisness, Hotels and Resorts",
        },
    ]
  return (
    <div className='w-full flex flex-row flex-wrap lg:flex-nowrap justify-center bg-[#3a643b2d] py-20 gap-y-12'>
        <div className='w-10/12 lg:w-0 flex flex-col lg:hidden mx-auto gap-y-5'>
            <div className='text-[18px] font-bold text-[#3A643B]'>Get in touch</div>
            <div className='text-[18px] font-normal'>support@amrutam.co.in</div>
            <div className='text-[18px] font-normal'>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</div>
            <div className='text-[18px] font-normal'>+91 9713171999</div>
            <div className='flex flex-row justify-between text-white items-center'>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><FiFacebook size={24}/></div>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><FiInstagram size={24}/></div>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><PiYoutubeLogoThin size={24}/></div>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><PiTwitterLogoThin size={24}/></div>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><FiLinkedin size={24}/></div>
                <div className='bg-[#3A643B] w-[40px] h-[40px] rounded-full flex justify-center items-center'><FaPinterestP size={24}/></div>
            </div>
        </div>

        <div className='flex flex-col gap-y-4'>
            <div className='text-[#3A643B] text-[18px] font-bold'>Information</div>

            <div className='flex flex-col gap-y-2'>
                {
                    footerData?.map((d) => (
                        <div key={d.id} className='text-[18px] text-[#474747] font-normal'>{d.title}</div>
                    ))
                }
            </div>
        </div>

        <div className='w-11/12 lg:w-0 flex flex-col lg:hidden mx-auto gap-y-5 pb-12'>
            <div className='text-[#3A643B] text-[18px] font-bold'>
                Subscribe to our Newsletter and join Amrutam Family today!
            </div>

            <div className='border-[1px] border-black rounded-2xl flex flex-row items-center justify-between w-full'>
                <div className='flex w-[65%] px-5'>Your Email Address</div>
                <div className='w-[40%] bg-black text-white rounded-r-2xl py-3 px-5 text-center hover:cursor-pointer'>Subscribe</div>
            </div>
        </div>
    </div>
  )
}

export default Footer