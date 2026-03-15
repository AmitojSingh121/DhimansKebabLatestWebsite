  import React from 'react'
  import image1 from "../assests/image1.jpg"
  import { RiDeleteBin6Line } from "react-icons/ri";
  import { useDispatch } from 'react-redux';
  import { DecrementQty, IncrementQty, RemoveItem } from '../Redux/cartSlice';

  function Card2({name , id , image , qty , price  , ingredients , drink }) {
        let dispatch = useDispatch();
    return (
      <div className='w-full min-h-[120px] p-2 shadow-lg  flex justify-between'>
          <div className='w-[60%] flex gap-5'>
              {/* image */} 
              <div className='w-[40%] h-full overflow-hidden'>
                  <img src= {image} alt="FoodImagesinAddToCart" className='object
                  cover'/>
              </div>

              <div className='w-[60%] h-full flex flex-col gap-5'>
                  <div className='text-lg text-gray-600 font-semibold'>{name}</div>

              {/* Ingrediends Show Ho Rahe Ha  */}
                 <p className='text-xs text-gray-500 italic'>
                     {Array.isArray(ingredients) ? ingredients.join(", ") : ""}
                </p>

                {drink && (
                <p className="text-xs text-blue-500">
                   Drink: {drink}
                </p>
                  )}
                
                <div className='w-[120px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-md font-semibold border-2 border-yellow-500 '>
                      <button className='w-[33%]  bg-white flex justify-center items-center text-yellow-500 ' 
                      onClick={()=> qty>1?dispatch(DecrementQty(id)):null}
                      >-</button>

                      <span className='w-[60%] h-full bg-slate-300 flex justify-center items-center text-yellow-500 font-bold'>{qty}</span>

                      <button className='w-[33%] flex justify-center items-center bg-white text-yellow-500'
                       onClick={() =>{
                        dispatch(IncrementQty(id))
                      }}>+</button>
                </div>
              </div>
          </div>

          {/* Right Div price and Empty Box */}
          <div className='flex flex-col justify-start items-end gap-6'> 
            <span className='text-xl text-yellow-400 font-semibold'>€{price ? Number(price).toFixed(2) : "0.00"}</span>
              <RiDeleteBin6Line className='w-[30px] h-[40px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
          </div>
          
      </div>
    )
  }

  export default Card2
