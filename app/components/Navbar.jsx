import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className='sticky top-0 w-full fixed flex px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between z-50'>
      <a href='#top'>
        <Image src={assets.logo} className='w-32 alt="logo" cursor-pointer mr-16'/>
      </a>
      <ul className='hidden md:flex items-center gap-6 rounded-full lg:gap-8 px-12 py-3'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>
      <div className='flex items-center gap-4'> 
        <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-1 border border-gray-500 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} alt='arrow' className='w-3'/> 
        </a> 

        <button className='md:hidden ml-3'>  
          <Image src={assets.menu_black} alt='menu-btn' className='w-6'/>
        </button>
      </div>

       {/*------ mobile-menu ------*/}
      <ul className='flex md:hidden flex-col gap-4 py-15 px-10 transition'>   {/** h-screen */}
          <li><a href='#top'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact Me</a></li>
      </ul>

    </nav>
    </div>
  )
}

export default Navbar