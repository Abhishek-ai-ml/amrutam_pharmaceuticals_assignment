import React from 'react'
import Img1 from '../assets/InfoAssets/speech-bubble.svg'
import Img2 from '../assets/InfoAssets/shield.png'
import Img3 from '../assets/InfoAssets/doctor.png'
import Img4 from '../assets/InfoAssets/prescription.svg'

const Info = () => {
    const infoData = [
        {
            id: 1,
            desc: "Convenient Online & In-clinic Consultations",
            img: Img1,
        },
        {
            id: 2,
            desc: "Safe And Effective Treatment",
            img: Img2,
        },
        {
            id: 3,
            desc: "Experienced Ayurvedic Practitioners",
            img: Img3,
        },
        {
            id: 4,
            desc: "Personalized Treatment Plans & Guidance",
            img: Img4,
        },
    ]
  return (
    <div className='w-full bg-[#FFF7E2] py-10'>
        <div className='w-10/12 lg:w-10/12 mx-auto flex flex-row flex-wrap lg:flex-nowrap gap-y-8 justify-between'>
            {
                infoData?.map((info) => (
                    <div key={info.id} className='flex flex-row justify-between gap-x-4 items-center w-full lg:w-[22%]'>
                        <div className='flex flex-row justify-center items-center bg-white rounded-full border-[#3A643B] min-w-[70px] h-[70px] border-[1px] '>
                            <img src={info.img} className='w-[40px] h-[40px]'/>
                        </div>

                        <div className='text-[#3A643B] text-[18px] font-bold leading-[25.2px] flex-wrap w-full'>{info.desc}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Info