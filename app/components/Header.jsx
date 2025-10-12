import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='w-11/12 text-center mx-auto flex flex-col items-center justify-center gap-4'>
        <h1 className='font-serif flex items-end gap-2 lg:text-[25px] mb-3'>
            Hi, I am Yasheeb Faridi
        </h1>
        <h2 className='text-3xl sm:text-4xl lg:text-[30px]'>
            Software Developer based in New Delhi
        </h2>
        <p className='max-w-2xl mx-auto'>
          I am a Full Stack Software developer with 4 years of experience
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href='#contact' className='px-8 py-2 border border-gray-500 rounded-full bg-black text-white flex items-center gap-4'>contact me <Image src={assets.right_arrow_white} alt='arr-wh' className="rounded-full w-4"/> </a>
          <a href='/Yasheeb_faridi-hackerresume.pdf' className='px-8 py-2 border border-gray-500 rounded-full flex items-center gap-2'>Download Resume<Image src={assets.download_icon} alt='dwn-icon' className="rounded-full w-5"/> </a>
          <a href='https://github.com/yasheeb-faridi' className='px-8 py-2 border border-gray-500 rounded-full flex items-center gap-2'>Visit My GitHub<Image src={assets.github} alt='github' className="rounded-full w-6"/> </a>
        </div>

    </div>
  )
}

export default Header