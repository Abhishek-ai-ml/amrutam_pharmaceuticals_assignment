import React from 'react'
import Image1 from '../assets/AyurvedicConsultation/image1.png'
import Image2 from '../assets/AyurvedicConsultation/image2.png'
import Image3 from '../assets/AyurvedicConsultation/image3.png'

const AyurvedicConsultation = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#FFF7E2] to-[#FFFAEE] py-20'>
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <div className='flex flex-col items-center gap-y-16 w-full'>
                <div className='text-[32px] text-center lg:text-[48px] text-[#3A643B] font-bold leading-[54px] border-[#C3D0C4] border-b-[5px] px-2 lg:px-6'>
                    What sets Ayurvedic consultations apart?
                </div>

                <div className='flex flex-col gap-y-5 lg:gap-y-3 w-full'>
                    <div className='flex flex-row gap-x-3 flex-wrap lg:flex-nowrap w-full h-full lg:h-[286px] lg:min-h-[286px] lg:max-h-[286px] items-center gap-y-5'>
                        <div className='w-full lg:w-[45%] flex flex-col bg-white border-[#3A643B] border-t-[5px] rounded-[20px] justify-center gap-y-4 h-[286px] min-h-[286px] max-h-[286px] lg:h-full'>
                            <div className='text-[#3A643B] text-[24px] lg:text-[32px] font-semibold lg:font-bold text-center'>
                                स्वस्थस्य स्वास्थ्य रक्षणं, <br/> आतुरस्य विकार प्रशमनं ।"
                            </div>

                            <div className='text-[#3A643B] font-normal text-[18px] px-12 text-center'>
                                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                            </div>
                        </div>

                        <div className='w-full lg:w-[30%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full rounded-[20px]'>
                            <img src={Image1} alt='FirstConsultant' className='w-full h-full object-cover rounded-[20px]'/>
                        </div>

                        <div className='w-full lg:w-[25%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full flex flex-col bg-white border-[#3A643B] border-t-[5px] rounded-[20px] gap-y-4 justify-center'>
                            <div className='text-[#3A643B] text-[24px] text-center font-bold'>
                                Precise Diagnosis
                            </div>

                            <div className='text-[#3A643B] font-normal text-[18px] text-center px-2'>
                                Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-row flex-wrap lg:flex-nowrap justify-between h-full lg:h-[280px] lg:min-h-[280px] lg:max-h-[280px] gap-x-3 gap-y-5'>
                        <div className='w-full lg:w-[25%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full flex flex-col bg-white border-[#3A643B] border-t-[5px] rounded-[20px] gap-y-4 justify-center'>
                            <div className='text-[#3A643B] text-[24px] font-bold text-center'>
                                Zero side-effects
                            </div>

                            <div className='text-[#3A643B] font-normal text-[18px] px-2 text-center'>
                                Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
                            </div>
                        </div>

                        <div className='w-full lg:w-[25%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full rounded-[20px]'>
                            <img src={Image2} alt='SecondConsultant' className='w-full h-full object-cover rounded-[20px]'/>
                        </div>

                        <div className='w-full lg:w-[25%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full flex flex-col bg-white border-[#3A643B] border-t-[5px] rounded-[20px] gap-y-4 justify-center'>
                            <div className='text-[#3A643B] text-[24px] font-bold text-center'>
                                Individual Treatment
                            </div>

                            <div className='text-[#3A643B] font-normal text-[18px] px-2 text-center'>
                                All Treatments are personalized based on a person's unique constitution and health concerns.
                            </div>
                        </div>

                        <div className='w-full lg:w-[25%] h-[286px] min-h-[286px] max-h-[286px] lg:h-full rounded-[20px]'>
                            <img src={Image3} alt='ThirdConsultant' className='w-full h-full object-cover rounded-[20px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AyurvedicConsultation