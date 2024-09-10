import { useState } from "react"
import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useCardContax } from './CartContax';
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import InStock from "./InStock";
import OutOfStock from "./OutOfStock";

function CartData({product}) {
  const{AddToCart}=useCardContax()
    const{stock,colors,available}=product
  
    const[quantity,setQuantity]=useState(1)
    const[color,setColor]=useState(colors[0])

    const Increment=()=>{
       quantity<stock? setQuantity(quantity+1):setQuantity(stock)
    }
  
    const Decrement=()=>{
     quantity>1?setQuantity(quantity-1):setQuantity(1)
    }
  
  return (
    <>
    
    <div className=" w-[33%] flex justify-around">
    <p className=" font-bold">Colors:</p>
      {
        colors.map((curColor)=>{
          
          return <button style={{backgroundColor:curColor}} className=" h-5 w-5 rounded-full grid place-items-center" onClick={()=>{setColor(curColor)}}>
            {color===curColor?<FaCheck className=" text-white text-xs"/>:null}
          </button>
        })
      }
    </div>
    <p className=" ml-2 mt-3 font-semibold">{available?<InStock/>:<OutOfStock/>}</p>
    <div className='flex w-[400px] h-[100px]  items-center justify-around'>
    QTY 
    <div className=' flex items-center bg-white border-[1px] border-gray-500 cursor-pointer'>
        <div className=' w-10 h-8  grid place-items-center border-r-2 border-gray-400'><FaMinus onClick={()=>{ Decrement()}}/></div>
        <div className=' w-10 h-8  grid place-items-center ' >{quantity}</div>
        <div className='w-10 h-8  grid place-items-center border-l-2 border-gray-400 '><FaPlus onClick={()=>{Increment()}}/></div>

    </div>

                      <div>
                         <NavLink to='/cart'><button className=' w-40 h-9 bg-red-500 font-bold text-white rounded-3xl hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500' onClick={()=>{AddToCart(product,quantity,color)}}> ADD TO CART</button></NavLink> 
                      </div>

                      
    </div>    
         
    </>
  )
}

export default CartData