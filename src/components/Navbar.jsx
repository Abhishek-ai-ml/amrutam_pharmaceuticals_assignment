import React from 'react'
import {IoReorderThreeOutline} from 'react-icons/io5'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full bg-[#FFF7E2] h-[80px]'>
        <div className='w-10/12 mx-auto flex flex-row items-center h-full justify-between lg:hidden text-[#3A643B]'>
          <div className=''><IoReorderThreeOutline size={24}/></div>

          <div>
            <img src={Logo}/>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Navbar