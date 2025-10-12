import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  return (
    <div> {/**sticky top-0 important */}
    <nav className='sticky top-0 w-full fixed flex px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between z-50'>
      <a href='#top'>
        <Image src={assets.logo} className='w-48 alt="logo" cursor-pointer mr-16'/>
      </a>
      <ul className='hidden md:flex items-center gap-6 rounded-full lg:gap-8 px-12 py-3 shadow-sm'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        {/* <li><a href='#contact'>Contact Me</a></li> */}
      </ul>
      <div className='flex items-center gap-4'> 
        <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-1 border border-gray-500 rounded-full ml-4'>
            Contact Me<Image src={assets.arrow_icon} alt='arrow' className='w-3'/> 
        </a> 

        <button className='block md:hidden ml-3' onClick={openMenu}>  
          <Image src={assets.menu_black} alt='menu-btn' className='w-7'/>
        </button>
      </div>

       {/*------ mobile-menu ------*/}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-3 py-15 px-10 w-64 z-50 fixed top-0 right-0 h-screen bg-white/10 backdrop-blur-lg border border-black/30 transform transition ease-in-out duration-200 translate-x-full'>   {/** h-screen */}

        <div className='absolute top-6 right-6' onClick={closeMenu}>
          <Image src={assets.close_black} alt='close-btn' className='w-4 cursor-pointer'/>
        </div>
          <li><a onClick={closeMenu} href='#top'>Home</a></li>
          <li><a onClick={closeMenu} href='#about'>About</a></li>
          <li><a onClick={closeMenu} href='#skills'>Skills</a></li>
          <li><a onClick={closeMenu} href='#experience'>Experience</a></li>
          <li><a onClick={closeMenu} href='#projects'>Projects</a></li>
          <li><a onClick={closeMenu} href='#contact'>Contact Me</a></li>
      </ul>

    </nav>
    </div>
  )
}

export default Navbar