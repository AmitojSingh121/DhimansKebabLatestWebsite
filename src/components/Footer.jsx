import React from 'react'
import { FaFacebook , FaInstagram, FaYoutube } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';


export default function Footer() {
        const [state, handleSubmit] = useForm("xojndkdn");
      
    
  return (
    <div className='bg3 flex flex-col gap-12 px-16 py-16 '>
        {/* 1st Div */}
       <div className='grid place-content-center gap-6 text-center '>
         <h2 className='text-4xl font-bold'>Don’t Miss Our Special Deals</h2>
         <p className='text-lg text-gray-400 '>Suscribe To Our NewsLetter to Get Frequent Updates </p>
         <div className='flex items-center justify-center '> 
            <input type="email" name='emailcustomer'  id='' placeholder='Enter Email Address' className="flex-grow px-4 py-3 border-2 border-r-0 border-amber-500 rounded-l-full outline-none  text-sm" />
               <ValidationError 
                    prefix="EmailCustomer" 
                    field="emailcustomer"
                    errors={state.errors}/>
            <button className='bg-amber-500 text-white px-6 py-3 rounded r-full font-bold'>Join Now</button>
         </div>
       </div>

    {/* 2nd Div */}
       <div className='flex flex-col md:flex-row justify-between items-center md:text-left gap-6 '>
            <div className='flex justify-between md:justify-start gap-4 mt-3 text-yellow-500'>
                <h2 className='text-2xl font-bold'>Dhimans Kebab Pizza Cafe</h2>
                <div className='flex justify-between md:justify-start gap-4 mt-3 text-yellow-500'>
                  <a href='https://www.facebook.com/p/Dhimans-kebab-pizza-cafe-100063674913679/' target='_blank'>
                      <FaFacebook className='text-3xl cursor-pointer' ></FaFacebook>
                  </a>

                  <a href='https://www.instagram.com/dhimanspizza.pt/ ' target='_blank'>
                     <FaInstagram className='text-3xl cursor-pointer'></FaInstagram>

                  </a>
                        {/* <FaYoutube className='text-3xl cursor-pointer'></FaYoutube> */}
                </div>
            </div>
            <div>
                <ul className='flex gap-6 justify-center font-medium text-sm'>
                    <a href=''>
                        <li>Home</li>
                    </a>
                    <a href='#'>
                       <li>About Us</li>
                    </a>
                    <li>Menu</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
       </div>

       {/* 3rd Paragraph */}
       <p className='text-center text-sm mt-4'>Copyright © 2026 All Rights Reserved</p>
    </div>
  )
}

