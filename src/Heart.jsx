import React from 'react'
import { useCardContax } from './Components/CartContax'
import Header from './Components/Header'
import { FaTrash } from "react-icons/fa";
import InStock from './Components/InStock';
import OutOfStock from './Components/OutOfStock';
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Empty from './Components/Empty';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Footer from './Components/Footer';

function Heart() {
  const {wish,WistToCart,RemoveWish}=useCardContax()
  const quantity = 1
  if(wish.length==[]){
    return(
      <>
      <Header/>
      <div className=' text-2xl flex place-items-center justify-center w-full h-[600px]'>
          No Wish In Item
      </div>
      <Footer/>
      </>
    )
  }
  
  return (
    <>
    <Header/>
    <div className=' h-16 w-full'>
    </div>

    <div className=' w-[75%] h-full mx-auto '>

      {
      wish.map((curElement)=>{
          return (
          
              <div className=' w-full  h-[100px] flex justify-around items-center border-[1px] border-gray-300 mt-5'>
                <div>
                  <img src={curElement.image} className=' w-[80px] h-[80px] xs:w-[70px] xs:h-[70px] '/>
                </div>

                <div className=' w-[250px]  sm:w-[140px]  xs:w-[100px]'>
                  <p className=' font-bold text-base sm:text-[12px] md:text-[13px] xs:text-[11px]'>{curElement.name}</p>
                 {curElement.available?<InStock/>:<OutOfStock/>}
                  
                </div>
                <div className='flex items-center '>
                  <p className=' font-bold text-base text-red-500 xs:text-xs'>{curElement.price}</p>
                  <TbCurrencyTaka className=' text-red-500 text-lg xs:text-xs'/>
                </div>

                <div>

                <NavLink to='/cart'><button className=' grid place-items-center w-[130px] h-[35px] xs:text-[10px] sm:text-xs sm:w-[115px] md:w-[118px] md:h-[33px] md:text-[13px] sm:h-[30px] xs:w-[90px] xs:h-[25px] text-base text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500' onClick={()=>{WistToCart(curElement,quantity,curElement.colors[0])}}>ADD TO CART</button></NavLink> 
                </div>

                <div>
                    <FaTrash className=' hover:text-red-500 cursor-pointer' onClick={()=>{RemoveWish(curElement.id)}}/>
                </div>
              </div>
           
          )

      })
    
    }
    </div>
    <Footer/>
    
    </>
  )
}

export default Heart
