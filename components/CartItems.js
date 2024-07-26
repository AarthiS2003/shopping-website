import React from 'react'
import { useSelector } from 'react-redux'
import {MdOutlineClose} from 'react-icons/md'
import { decrementQuantity, increamentQuantity } from '../redux/bazaarslice';


const CartItems = () => {
    const productsData = useSelector((state) => state.bazaar.productsData);
  return (
    <div className='w-2/3 pr-10'>
       <div className='w-full'>
        <h2 className='text-2xl'>Shopping cart</h2>
        </div> 
        <div>
            {
                productsData.map((item) =>(
                 <div key={item._id}
                 className='flex items-center justify-between gat-6 mt-6'>
                    <div className='flex items-center gap-2'>
                        <MdOutlineClose className='text-xl text-gray-600 hover:text-red-600
                        cursor-pointer duration-300'/>
                        <img 
                        className='w-32 h-32 object-cover'
                        src={item.image}
                        alt='productimg'
                        />
                   </div>
                   <h2 className='w-32'>{item.title}</h2>
                   <p className='w-10'>${item.price}</p>
                   <p className='flex items-center gap-4 text-sm font-semibold'>Quantity</p>
                    <div>
                       <span 
                      //  onClick={() =>
                      //   dispatch(
                      //     decrementQuantity({
                      //       _id: item._id,
                      //       title: item.title,
                      //       image: item.image,
                      //       price: item.price,
                      //       quantity: 1,
                      //       description: item.description,
                      //     })
                      //   )
                      //  }
                       className='border h-5 font-normal text-lg flex items-center 
                       justify-center px-2 hover:bg-gray-700 hover:text-white 
                       cursor-pointer duration-300 active:bg-black'
                       >
                        -
                       </span>
                       {/* {item.quantity} */}
                        1
                       <span
                        // onClick={() =>
                        //   dispatch(
                        //     increamentQuantity({
                        //       _id: item._id,
                        //       title: item.title,
                        //       image: item.image,
                        //       price: item.price,
                        //       quantity: 1,
                        //       description: item.description,
                        //     })
                        //   )
                        // }
                        className='border h-5 font-normal text-lg flex items-center 
                        justify-center px-2 hover:bg-gray-700 hover:text-white 
                        cursor-pointer duration-300 active:bg-black'
                        >
                          +
                       </span>
                    </div>
                    <p className='w-14'>${item.quantity + item.price}</p>
                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default CartItems