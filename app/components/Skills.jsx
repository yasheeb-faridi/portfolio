import { languageData, skillsData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div  id='skills' className='w-full px-[12%] py-10 flex flex-col item-center scroll-mt-20'>
        <h2 className='font-serif text-center text-3xl mb-2'>Skills</h2>

        <h4 className='font-serif font-semibold text-center mb-8 mt-4'>Languages</h4>
                <ul className='flex items-center justify-center gap-2 sm:gap-4'>
                  {languageData.map((lang, index) => (
                    <li className='flex items-center justify-center w-16 sm:w-12 cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                      <Image src={lang} alt='lang' className='w-8 sm:w-12' />
                    </li>
                  ))}
                </ul>

         <h4 className='font-serif font-semibold text-center mb-8 mt-4'>Framework</h4>
                <ul className='flex items-center justify-center gap-2 sm:gap-4'>
                  {skillsData.map((skill, index) => (
                    <li className='flex items-center justify-center w-16 sm:w-10 cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                      <Image src={skill} alt='skill' className='w-8 sm:w-12' />
                    </li>
                  ))}
                </ul>

        <h4 className='font-serif font-semibold text-center mb-8 mt-8'>Tools I use</h4>
        <ul className='flex items-center justify-center gap-4 sm:gap-6'>
          {toolsData.map((tool, index) => (
            <li className='flex items-center justify-center w-12 sm:w-14 cursor-pointer hover:-translate-y-1 duration-500' 
                key={index}> <Image src={tool} alt='Tool' className='w-8 sm:w-12' />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Skills