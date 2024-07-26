import React from 'react'
import { BAZAAELOGO } from '../assets/index'
import { Cartbag } from '../assets/index'
import { Cart } from '../assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaLessThanEqual } from 'react-icons/fa'

const Header = () => {
  const productsData = useSelector((state) => state.bazaar.productsData);
  console.log(productsData);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between '>
           <Link to="/">
             <div>
                <img className='w-28' src={ BAZAAELOGO} alt='bazaaerlogo'/>
             </div>
           </Link>
        <div  className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoreation-[1px] cursor-pointer 
                duration-300'> Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoreation-[1px] cursor-pointer 
                duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoreation-[1px] cursor-pointer 
                duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoreation-[1px] cursor-pointer 
                duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoreation-[1px] cursor-pointer 
                duration-300'>Blog</li>
            </ul>
           <Link to="/cart">
           <div className='relative'>
                <img className='w-9' src={Cartbag} alt='cartbag'></img>
                <span className='absolute w-6 top-2 left-1.5 text-sm flex items-center justify-center font-semibold'>
                  {productsData.length}</span>
            </div>
           </Link>
            <img className='w-8 h-8 rounded-full' src={Cart} alt='cart'></img>
        </div>
    </div>
      
    </div>

  )
}

export default Header;