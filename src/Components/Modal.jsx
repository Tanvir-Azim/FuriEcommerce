import React from 'react'
import { useFilterContax } from './FilterContax'
import { NavLink } from 'react-router-dom'


function Modal() {

    const{toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact,home,about,product,contact,pages,blog}=useFilterContax()

  
    
    
  return (

    <div className='w-full h-full lg:hidden xl:hidden 2xl:hidden'>
              <div onClick={()=>{toggleHome()}}  className={home?'text-red-500 text-[17px] relative  h-10 ml-5 flex items-center':'text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink className='active:text-red-500' to='/'>Home</NavLink></div>
              <hr/>
              <div onClick={()=>{toggleProducts()}} className={product?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':'text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink to='/product'>Product</NavLink></div>
              <hr/>
              <div onClick={()=>{toggleBlog()}}  className={blog?' text-red-500 text-[17px] relative  h-10 ml-5 flex items-center':'text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink to='/blog'>Blog</NavLink></div>
              <hr/>
              <div onClick={()=>{togglePages()}} className={pages?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500 xs:hidden sm:hidden md:hidden':'ext-[17px] relative  h-10 ml-5 flex items-center xs:hidden sm:hidden md:hidden'}><NavLink to=''>Pages</NavLink></div>
              <hr/>
              <div onClick={()=>{toggleAbout()}}  className={about?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':'text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink to='/about'>About</NavLink></div>
              <hr/>
              <div onClick={()=>{toggleContact()}} className={contact?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':' text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink to='/contact'>Contact</NavLink></div>

    </div>
  )
}

export default Modal