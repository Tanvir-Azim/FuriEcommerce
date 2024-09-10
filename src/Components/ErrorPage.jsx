import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <Header/>
        <div className=' h-full w-full grid place-items-center'>
             <img src='/images/error.svg'/>
             <NavLink to='/'><button className=' w-[140px] h-[35px] bg-red-500 mt-7 font-semibold text-white hover:bg-gray-700'>Go Back</button></NavLink>
        </div>
      
   
    </>
  )
}

export default ErrorPage