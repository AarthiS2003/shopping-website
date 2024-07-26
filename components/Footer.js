import React from 'react'
import { BAZAAELOGO } from '../assets'
import {Payments} from '../assets'
import { ImGithub } from 'react-icons/im'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome, FaLocationArrow, FaPaypal} from 'react-icons/fa'
import {BsPersonFill} from 'react-icons/bs'



const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20' >
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            {/* logoicon */}
            <div className='flex flex-col gap-7'>
                <img className='w-32' src={BAZAAELOGO} alt=''/>
                <p className='text-white text-sm tracking-wide'>© ReactBD.com</p>
                <img className='w-56' src={Payments} alt='payment'/>
                <div className='flex gap-5 text-lg text-gray-400'>
                  <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                 <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                 <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                 <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                  <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                </div>
            </div>
                            {/* logoicon end and lacateus start */}
              <div>
                  <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                  <div className='text-base flex flex-col gap-2'>
                    <p>DA Road,Porur,Chennai</p>
                    <p>Mobile: +91 9988665544</p>
                    <p>Phone: +91 8844556677</p>
                    <p>e-mail: Bazaar@gmail.com</p>
            </div>
            </div>
                {/* locate us end and profile start */}
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
              <div className='flex flex-col gap-2 text-base'>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                <span><BsPersonFill/></span>
                my account</p>

                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                <span><FaPaypal/></span>
                Checkout</p>
 
                 <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                <span><FaHome/></span>
                order tracking</p> 

                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                <span><FaLocationArrow/></span>
                help & support</p>
              </div>
            </div>
              <div className='flex flex-col justify-center'>
                <input 
                className='bg-transparent border px-4 py-2 text-sm'
                placeholder='e-mail'
                type='text' />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900
                active:bg-white active:text-black'>Subscribe</button>
              </div>
        </div>
       
    </div>

  );
};



export default Footer