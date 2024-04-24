import React from 'react'
import Mobile from '../assets/AppInfo/mobile.png'
import GooglePlay from '../assets/AppInfo/googlePlay.png'
import AppStore from '../assets/AppInfo/appStore.png'
import Iphone from '../assets/AppInfo/iphone.png'

const AppInfo = () => {
  return (
    <div className='w-full bg-[#FFF7E2] py-20'>
        <div className='w-11/12 lg:w-10/12 mx-auto flex flex-row'>
            <div className='w-full lg:w-1/2 flex flex-col gap-y-16  justify-center'>
                <div className='flex flex-col gap-y-3'>
                    <div className='text-[32px] text-center lg:text-left lg:text-[48px] font-bold text-[#3A643B]'>Amrutam Home App</div>
                    <div className='font-normal text-[14px] lg:text-base w-[90%] lg:w-full text-center lg:text-left mx-auto text-[#676767]'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</div>
                    <div className='flex lg:hidden justify-center'>
                        <img src={Iphone}/>
                    </div>
                    <div className='text-[20px] text-center lg:text-left lg:text-[32px] font-medium'>Get a Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe</div>
                </div>

                <div className='flex flex-col items-center lg:items-start gap-y-6'>
                    <div className='text-[36px] font-bold'>Get The App Now</div>

                    <div className='flex flex-row justify-center flex-wrap lg:flex-nowrap gap-x-3 gap-y-5'>
                        <img src={GooglePlay}/>

                        <img src={AppStore}/>
                    </div>
                </div>
            </div>

            <div className='w-0 lg:w-1/2'>
                <img src={Mobile}/>
            </div>
        </div>
    </div>
  )
}

export default AppInfo