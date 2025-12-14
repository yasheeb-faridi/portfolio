import { infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h1 className='font-serif text-center text-3xl mb-2'>Introduction</h1>
        <h2 className='font-serif text-center text-5xl'>About me</h2>

        <div className='flex-1 mt-6'>
          <p className='font-serif mx-auto text-left'>
            I am a Software Developer with Background in Mathematics and have a knack for Problem solving.<br/>
            I have been programming using Linux since 2021. <br/> <br/>
            I am well versed in C++, Python, Javascript, Typescript, Bash <br/>
            I have also developed websites in React + Vite and Next JS as frontend and Express JS, Node.js, RestAPI for Backend and MongoDB, MySQL for database<br/>
            I am also famiiliar with tools like Git/GitHub, VS Code, Postman.
        </p>
        </div>

        <div className='flex flex-col items-center'>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mt-8 mb-8'>
          {infoList.map(({icon, iconDark, title, description}, index) => (
            <li className='border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:-translate-y-1 duration-500'
             key={index}> <Image src={icon} alt={title} className='w-7 mt-2' />
            <h3 className='font-serif font-semibold'>{title}</h3>
            <p className='my-3'>{description}</p>
            </li>
          )
          )}
        </ul>
        </div>

    </div>
  )
}

export default About
