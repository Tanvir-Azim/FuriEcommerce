import React,{useEffect, useState} from 'react'
import { useCardContax } from './CartContax'
import Header from './Header'
import { FaMinus, FaTruck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

function Cart() {

  const {cart,RemoveCartData,Increment,Decrement,totalPrice}=useCardContax()
  if(cart.length==[]){
    return(
      <>
      <Header/>
      <div className=' text-2xl flex place-items-center justify-center w-full h-[600px]'>
          No Cart In Item
      </div>
      <Footer/>
      </>
    )
  }




  return (
 <>

<Header/>
<div className='flex w-[80%]  justify-around  lg:flex-col md:flex-col sm:flex-col xs:flex-col mx-auto '>
  <div className='w-[70%] xs:w-[85%] md:w-full mx-auto '>
  
      <div className=' w-[100%] h-[50px] grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr] grid-rows-1 place-items-center border-[1px] bg-[#e1e0db] mx-auto mt-5 '>
        <div className='  w-[80px]  xs:ml-1 xs:w-[70px] font-semibold text-gray-800 '>Product</div>
        <div className=' bg-green-500 w-[250px] sm:w-[120px] xs:w-[70px] md:w-[160px] lg:w-[230px] '></div>
        <div className='  w-28  sm:w-[80px]  xs:w-[70px] xs:ml-[25%] sm:ml-2  md:ml-2  lg:ml-3 font-semibold ml-10'>Quantity</div>
        <div className='  xs:ml-5 md:ml-[25%] font-semibold  ml-[-10px] '>Total</div>
        <div className=' bg-sky-300'></div>
      </div>

    <div className=' w-[100%] relative mx-auto'>
       {
        cart.map((curElement)=>{
          return (
           <>
           <div className=' w-full h-[100px] flex justify-around items-center border-[1px] border-gray-300 mt-5 '>
           <div className=' w-[90px] '>
                <img src={curElement.image} className='  w-[80px]   h-[80px] xs:w-[80px] xs:h-[80px]  '/>
                
              </div>

              <div className='w-[250px] sm:w-[140px] xs:w-[100px] xs:ml-3 md:w-[180px] sm:ml-3 md:ml-4'>
                <p className=' font-bold text-gray-700 sm:text-[11px] xs:text-[9px] md:text-[13px] '>{curElement.name}</p>
                <div className='flex items-center mt-1 '>
                  <p className=' font-bold text-base text-red-500  sm:text-[12px] xs:text-xs xs:text-[10px] md:text-[13px] '>{curElement.price}</p>
                  <TbCurrencyTaka className=' text-red-500 text-xl xs:text-[10px] sm:text-[15px] md:text-[15px]'/>
                </div>
                <div className='flex w-[75px]  xs:w-[57px] place-items-center h-7 items-center justify-between xs:text-xs sm:text-sm md:text-sm'>
                    <p className=' font-bold text-gray-700 sm:text-[12px]'>Colors:</p>
                      <p style={{backgroundColor:curElement.color}} className="h-4 w-4 xs:w-3 xs:h-3 sm:w-3 sm:h-3 rounded-full "></p>
                </div>
              </div>

            
              <div className=' flex items-center bg-white border-[1px] border-gray-500 cursor-pointer '>
                <div className=' w-10 h-8 sm:w-6 sm:h-5 xs:w-5 xs:h-5 lg:w-8 lg:h-7 md:w-7 md:h-6 grid place-items-center border-r-2 border-gray-400'><FaMinus onClick={()=>{ Decrement(curElement.id)}} className='xs:text-xs'/></div>
                <div className=' w-10 h-8 sm:w-6 sm:h-5 xs:w-5 xs:h-5 lg:w-8 lg:h-7 md:w-7 md:h-6 sm:text-xs   grid place-items-center xs:text-xs ' >{curElement.quantity}</div>
                <div className='w-10 h-8  sm:w-6 sm:h-5 xs:w-5 xs:h-5 lg:w-8 lg:h-7 md:w-7 md:h-6  grid place-items-center border-l-2 border-gray-400 '><FaPlus onClick={()=>{Increment(curElement.id)}} className='xs:text-xs'/></div>
              </div>

              <div>
                <div className='flex items-center  xs:ml-4 md:ml-3 sm:ml-2   w-[80px] justify-center'>
                  <p className=' font-bold text-base text-red-500 xs:text-xs sm:text-sm'>{curElement.quantity*curElement.price}</p>
                  <TbCurrencyTaka className=' text-red-500 text-xl xs:text-lg'/>
                </div>
              </div>
            
              <div>
                <FaTrash className=' hover:text-red-500 cursor-pointer text-gray-700 xs:mr-1 sm:mr-2 md:mr-3 lg:mr-3 ' onClick={()=>{RemoveCartData(curElement.id)}}/>
              </div>

          </div>

               
                
            </>
          )

        })
    
      }
    </div>
    
   
  </div>

  <div className='mx-auto  xl:ml-5 md:w-full mb-3 '>
  <div className='w-[330px]   h-[350px] mx-auto border-[1px] border-gray-400 p-3 bg-red-30 mt-7 flex flex-col justify-around   '>  
     <h1 className='text-[18px] text-gray-800 font-bold'>ODER SUMMUARY</h1>
   
     <div className=' flex w-full h-[10px] justify-between items-center'>
        <p  className='text-[16px] font-medium'>Subtotal</p>
        <div className='flex items-center'>
          <TbCurrencyTaka className='text-xl'/>
          <p className='text-[16px] font-bold'>{totalPrice}</p>
          
        </div>
    </div>
    <div className=' flex w-full h-[10px] justify-between items-center'>
        <p  className='text-[16px] font-medium'>Delevery</p>
        <p className='text-[16px] font-medium'>Free</p>
    </div>

     <div className=' flex w-full h-[10px] justify-between items-center'>
     <p  className='text-[16px] font-medium'>Tax</p>
     <p className='text-[16px] font-medium'>Free</p>
      
    </div>
    <div className=' flex w-full h-[40px] justify-between items-center '>
        <p  className='text-[16px] font-bold'>Total</p>
        <div className='flex items-center'>
           <TbCurrencyTaka className='text-xl'/>
          <p className='text-[16px] font-bold'>{totalPrice}</p> 
        </div>
       
      
    </div>
   <div className=' w-full h-[40px] bg-red-500 '>
       <input type='text' placeholder='Coupon'  className=' border-2 border-red-500 w-[70%] h-full rounded-[2px] outline-none placeholder:pl-3'/>
       <button className='bg-red-500 h-[40px] w-[90px] font-semibold text-white flec items-center hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-red-500 hover:border-l-0  hover:border-r-0'>Apply</button>
    </div>
    <NavLink to='/checkoutpage'>
      <div className=' w-full  h-[50px] '>
        <button className='w-full h-full text-[13px] bg-red-500 uppercase rounded-[2px] text-white font-bold  hover:border-red-500 hover:border-[2px] hover:text-red-500  hover:bg-white'>Process to Checkout</button>
      </div>
    </NavLink>
    
   
  </div>
    
    
</div>
</div>

<Footer/>

 </>
  
 
  )
}

export default Cart