import React from 'react'
import { NavLink } from 'react-router-dom'

function CompleteOder() {
  return (
    <div className=' w-full h-[100vh]  mx-auto flex items-center justify-center'>
      <div className=' w-[40%] xs:w-[70%] sm:w-[70%] md:w-[65%] mx-auto  h-[60vh] shadow-2xl grid place-items-center '>
          <img className=' mx-auto' src="/images/HomePage1/Confirm.PNG"/>
          <div className=' grid place-items-center'>
            <h1 className=' font-bold text-2xl text-center'>Thank you for ordering</h1>
            <div className=' flex gap-3'>
              <NavLink to='/productpage1'><button className=' grid place-items-center mt-5  w-[180px] xs:w-[160px] rounded-[3px] xs:text-xs h-9 text-[13px] text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500' >CONTINUE SHOPPING</button></NavLink>
              <button className=' grid place-items-center mt-5  w-[150px] rounded-[3px] xs:w-[160px] xs:text-xs h-9 text-[13px] text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500' >VIEW ODER</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CompleteOder