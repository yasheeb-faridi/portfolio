import React from 'react'

const Contacts = () => {
  return (
    <div>
      <h1 className='font-serif text-center text-2xl mb-2'>Connect with me</h1>
      <h2 className='font-serif text-center text-1xl mb-2'>Get in Touch using the form below</h2>
       <p className='font-serif mx-auto text-center'>My work email is: yasheebfaridi@proton.me
       </p>

      <form className='max-w-2xl mx-auto items-center'>
        <div className='grid grid-cols-auto gap-6 mt-8 mb-8'>
          <input type='text' placeholder='Enter your name ' required className='flex-1 p-3 border border-gray-300 rounded-md outline-none'></input>
          <input type='email' placeholder='Enter your email ' required className='flex-1 p-3 border border-gray-300 rounded-md outline-none'></input>
        </div>
        <textarea rows='5' placeholder='Enter your message....' required className='w-full p-2 border border-gray-300 rounded-md outline-none mb-6'></textarea>
        <button type='submit'>Send message</button>
      </form>
    </div>
  )
}

export default Contacts