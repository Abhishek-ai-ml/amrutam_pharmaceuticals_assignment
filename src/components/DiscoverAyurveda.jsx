import React from 'react'
import Yoga from '../assets/DiscoverAyurvedsAssets/Yoga.png'
import Img1 from '../assets/DiscoverAyurvedsAssets/heartbeat.png'
import Img2 from '../assets/DiscoverAyurvedsAssets/ribbon.png'
import Img3 from '../assets/DiscoverAyurvedsAssets/lotus-position.png'
import Img4 from '../assets/DiscoverAyurvedsAssets/protection.png'
import Img5 from '../assets/DiscoverAyurvedsAssets/ayurveda.png'
import Img6 from '../assets/DiscoverAyurvedsAssets/strong.png'

const DiscoverAyurveda = () => {
    const data = [
        {
            id:1,
            title: "Personalized Wellness",
            desc: "Get treatments made just for you based on your individual doshas.",
            img: Img1,
            secondaryColor: 'EDF5FA',
            dir:"left",
        },
        {
            id:2,
            title: "Focus on prevention",
            desc: "Stop problems even before they start.",
            img: Img2,
            primaryColor: "",
            secondaryColor: 'EAF2EA',
            dir:"left",
        },
        {
            id:3,
            title: "Mind-Body Connection",
            desc: "Keep your mind and body in sync for a happy life.",
            img: Img3,
            primaryColor: "",
            secondaryColor: 'FCF1F1',
            dir:"left",
        },
        {
            id:4,
            title: "Holistic Healing",
            desc: "Fix the root problem for long-lasting health.",
            img: Img4,
            primaryColor: "",
            secondaryColor: "F5F3FC",
            dir:"right",
        },
        {
            id:5,
            title: "Natural Remedies",
            desc: "Using herbs and natural therapies for healing.",
            img: Img5,
            primaryColor: "",
            secondaryColor: "FEF6ED",
            dir:"right",
        },
        {
            id:6,
            title: "Boosting immunity",
            desc: "Stay strong and healthy for life, not just for today.",
            img: Img6,
            primaryColor: "",
            secondaryColor: "EAF2EA",
            dir:"right",
        },
    ]
  return (
    <div className='w-full py-20'>
        <div className='w-11/12 lg:w-11/12 mx-auto flex flex-col gap-y-16 pb-16'>
            <div className='flex flex-col items-center gap-y-5'>
                <div className='text-[32px] lg:text-[48px] text-[#3A643B] font-bold leading-[36px] lg:leading-[54px] text-center lg:border-[#C3D0C4] lg:border-b-[5px] px-1 lg:px-6'>
                    Discover Ayurveda’s magic with us
                </div>

                <div className='text-center text-[#666666] text-[14px] lg:text-[20px] font-normal leading-[21px] lg:leading-7 w-[90%]'>
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony <br className='hidden lg:block'/>and vitality. It's like a journey to better health using ancient wisdom, <br className='hidden lg:block'/> a totally effective approach for a better life.
                </div>
            </div>

            <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between lg:items-center w-11/12 mx-auto lg:mx-0 lg:w-full'>
                <div className='hidden lg:flex lg:flex-col justify-between lg:gap-y-8 w-[30%]'>
                    {
                        data.map((d) => (
                            d.dir === 'left' && <div key={d.id} className={`flex flex-row gap-x-3 w-full ${d.id === 2 ? 'pr-8' : ''}`}>
                                                    <div className='flex flex-col gap-y-2 w-full'>
                                                        <div className='text-[20px] font-bold leading-[25.76px] text-right'>{d.title}</div>
                                                        <div className=' text-[16px] font-normal text-right text-[#515151]'>{d.desc}</div>
                                                    </div>

                                                    <div style={{ backgroundColor: `#${d.secondaryColor}` }} className={` flex flex-row justify-center items-center max-w-[100px] max-h-[100px] min-h-[100px] min-w-[100px] rounded-full`}>
                                                        <img src={d.img} alt={d.title} className='max-w-[65px] max-h-[55px] min-h-[55px] min-w-[65px]'/>
                                                    </div>
                                                </div>
                        ))
                    }
                </div>

                <div className='w-full lg:w-[33%]'>
                    <img src={Yoga} alt='Yoga' className='w-full'/>
                </div>

                <div className='hidden lg:flex lg:flex-col justify-between lg:gap-y-8 w-[30%]'>
                    {
                        data.map((d) => (
                            d.dir === 'right' && <div key={d.id} className={`flex flex-row-reverse gap-x-3 w-full ${d.id === 5 ? 'pl-8' : ''}`}>
                                                    <div className='flex flex-col gap-y-2'>
                                                        <div className='text-[20px] font-bold leading-[25.76px] text-left'>{d.title}</div>
                                                        <div className=' text-[16px] font-normal text-left text-[#515151]'>{d.desc}</div>
                                                    </div>

                                                    <div style={{ backgroundColor: `#${d.secondaryColor}` }} className={` flex flex-row justify-center items-center max-w-[100px] max-h-[100px] min-h-[100px] min-w-[100px] rounded-full`}>
                                                        <img src={d.img} alt={d.title} className='max-w-[65px] max-h-[55px] min-h-[55px] min-w-[65px]'/>
                                                    </div>
                                                </div>
                        ))
                    }
                </div>

                <div className='grid grid-cols-2 lg:hidden gap-y-2 gap-x-2'>
                    {
                        data.map((d) => (
                            <div className='flex flex-col items-center gap-y-2 border-[#E4E4E4] border-[1px] rounded-xl py-4 px-3'>
                                <div style={{ backgroundColor: `#${d.secondaryColor}` }} className={` flex flex-row justify-center items-center p-3 max-w-[60px] max-h-[60px] rounded-full`}>
                                    <img src={d.img} alt='d.title' className='max-w-[42px] max-h-[42px]'/>
                                </div>
                                <div className='text-[15px] font-bold text-center'>{d.title}</div>
                                <div className='text-[#6D6B6B] text-[13px] font-medium text-center'>{d.desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverAyurveda