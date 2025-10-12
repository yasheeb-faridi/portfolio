import { assets } from '@/assets/assets'
import React, {useState} from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const Contacts = () => {

  const [result, setResult] = useState("");
  const access_key = process.env.NEXT_PUBLIC_MY_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <h1 className='font-serif text-center text-2xl mb-2'>Connect with me</h1>
      <h2 className='font-serif text-center text-1xl mb-2'>Get in Touch using the form below</h2>
       <p className='font-serif mx-auto text-center'>My work email is: yasheebfaridi@proton.me
       </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto items-center'>
        <div className='grid grid-cols-auto gap-6 mt-8 mb-8'>
          <input type='text' name='name' placeholder='Enter your name ' required className='flex-1 p-3 border border-gray-300 rounded-md outline-none'></input>
          <input type='email' name='email' placeholder='Enter your email ' required className='flex-1 p-3 border border-gray-300 rounded-md outline-none'></input>
        </div>
        <textarea rows='5' name='message' placeholder='Enter your message....' required className='w-full p-2 border border-gray-300 rounded-md outline-none mb-6' ></textarea>
        <button type='submit' className='py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
        Send message<Image src={assets.right_arrow_white} alt='right-arrow' className='w-4' />
        </button>
      </form>
      <span className='flex text-center justify-center'>{result}</span>
    </div>
  )
}

export default Contacts