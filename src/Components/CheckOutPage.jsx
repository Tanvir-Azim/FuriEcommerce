import React from 'react'
import { TbCurrencyTaka } from "react-icons/tb";
import { useCardContax } from './CartContax';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function CheckOutPage() {
  const{totalPrice}=useCardContax()
  return (
   <>
   <Header/>
    <div className=' w-[70%] h-[90vh] mt-10   mx-auto grid grid-cols-[2.5fr,1fr] grid-rows-1 gap-7 sm:h-[195vh] sm:grid-cols-1 sm:grid-rows-2 xs:h-[195vh] xs:grid-cols-1 xs:grid-rows-2 md:h-[195vh] md:grid-cols-1 md:grid-rows-2 '>
        <div className='border-[1px] border-gray-300'>
          <div className=' w-[92%] mx-auto mt-4'>
            <p className=' font-bold text-[16px]'>Checkout</p>
          </div>
          <div className='  w-[96%] mx-auto h-full  '>
              <div className='  w-[96%] mx-auto  flex justify-between mt-4'>
                  <div className=' w-[48%]   '>
                      <label className=' font-semibold text-gray-800'>Fast Name</label><br/>
                      <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
                  </div>

                  <div className='w-[48%] '>
                    <label className=' font-semibold text-gray-800 mt-4'>Last Name</label><br/>
                    <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
                  </div>
              </div>

              <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Company Name</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>

             
             <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Country/Region</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>

             
             <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Street Address</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>

             
             <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Town/City</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>

             
             <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Zip Code</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>


             
             <div className=' w-[96%] mx-auto mt-4'>
                <label className=' font-semibold text-gray-800'>Phone Number</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' />
             </div>
             </div>
   
          
        </div>
        <div className='w-full h-[50vh]'>
            <div className='w-[330px] h-[350px]  md:w-full sm:h-full xs:w-full  border-[1px] border-gray-400 p-3 bg-red-30 mt-2 flex flex-col justify-around mx-auto '>  
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

            <NavLink to="/completeoder">
              <div className=' w-full  h-[50px] '>
                 <button className='w-full h-full text-[15px] bg-red-500 uppercase rounded-[2px] text-white font-bold  hover:border-red-500 hover:border-[1px] hover:text-red-500  hover:bg-white'>PLACE ORDER</button>
              </div>
            </NavLink>
   
        </div>
      </div>
    </div>
    <Footer/>  
    </>
  )
}

export default CheckOutPage