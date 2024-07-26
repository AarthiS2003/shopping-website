import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../components/CartItems';

const Cart = () => {
  const productsData = useSelector((state) => state.bazaar.productsData);
  return (
    <div>
      <img 
      className='w-full h-60 object-cover'
      src='https://cdn.pixabay.com/photo/2016/02/22/12/37/waves-1215449_1280.jpg'
      alt='cartimg'
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItems/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className=' font-bold text-lg'>
                $ 200
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit, Quos, veritatis.
              </span>
            </p>
          </div>
          <p className='font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>$200</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart