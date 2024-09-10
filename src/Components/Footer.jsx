
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BiLogoTwitter } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa6";
import { SiDiscover } from "react-icons/si";
import { BsAmazon } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa6";

function Footer() {


  useEffect(() => {
 
  })
  return (
    <>
    <div className='  h-[38vh] w-[100%] sm:h-[90vh] bg-gray-100  xs:h-[130vh] md:h-[85vh]  flex items-center flex-col mt-10'>
      <div className=' pt-4 w-[80%]  h-[32vh] md:h-[80vh] sm:h-[80vh] bg-gray-100  grid grid-cols-4 grid-rows-1 place-items-center md:grid-rows-2 md:grid-cols-2 sm:grid-rows-2 sm:grid-cols-2 xs:grid-rows-4 xs:grid-cols-1 xs:mt-14 mx-auto xs:h-[120vh] gap-4 mt-10 '>
          <div className='  w-full h-[300px]'>
            
              <div className=' w-[300px]  lg:w-[200px] xs:w-[300px] '>
                <NavLink to='/'>
                  <h3 className=' text-3xl  font-bold '>Mini<span className=' text-red-500'>Mart</span></h3>
                </NavLink>
            </div>
              <p className=' mt-8 text-sm text-gray-500'>Exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className='flex justify-around w-[150px] mt-7 text-gray-500'>
                <BiLogoTwitter/>
                <FaFacebookF/>
                <IoLogoGoogleplus/>
                <TfiYoutube/>
                <FaLinkedinIn/>
                <FaWhatsapp/>
              </div>
          </div>
          <div className='  w-full h-[300px]'>
            <p className=' font-semibold text-[20px] text-gray-800'>Twtter</p>
            <div className=' h-[180px] flex flex-col justify-evenly'>
                <div className='flex text-gray-500'>
                  <BiLogoTwitter className=' text-[40px]'/>
                  <p className=' text-xs ml-3'>Laboris nisi ut #schön aliquip econse-quat.<span className=' font-bold text-gray-600'> https://t.co/vreNJ9nEDt</span></p>
               </div>

               <div className='flex text-gray-500'>
                  <BiLogoTwitter className=' text-[40px]'/>
                  <p className=' text-xs ml-3'>Laboris nisi ut #schön aliquip econse-quat.<span className=' font-bold text-gray-600'> https://t.co/vreNJ9nEDt</span></p>
                </div>
            </div>
          </div>
          <div className=' bg-red-60   h-[300px] w-full lg:hidden'>
            <h1 className='font-semibold text-[20px] text-gray-800'>Product Tags</h1>
          <div className='mt-8'>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none '>Table</button>
            <button  className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Sofas</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2 '>Armchair</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Living</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Bedroom</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Lighting</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Tables</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Pouf</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Wood</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Office</button>
            <button className=' w-[100px] h-[25px] border-[1px] text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Footstools</button>
            <button className=' w-[100px] h-[25px] border-[1px] sm:hidden text-gray-500 border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-none mb-2'>Desks</button>
          </div>
          </div>
          <div className='  w-full h-[300px] xs:mt-16'>
          <h1 className='font-semibold text-[20px] text-gray-800'>Information</h1>
          <div className='flex mt-8 items-center w-[305px] '>
            <p className=' text-sm text-gray-500'>Connaugt Road Central Suite 18B, 148</p>
            <MdLocationPin className=' text-sm ml-[3px] text-gray-500'/>
          </div>
          <p className=' text-sm text-gray-500 ml-40'>Bangladesh</p>

          <div  className='flex items-center ml-[150px]  mt-2 w-[105px]'>
            <p className='text-gray-500 text-sm'>01857165115</p>
            <IoIosCall className=' ml-1 text-gray-500'/>
          </div>
          <div className=' flex items-center ml-[85px] mt-2 w-[200px]'>
            <p className='text-gray-500 text-sm'>info@minimart.furniture</p>
            <MdOutlineMail className='ml-1 text-gray-500'/>
          </div>
          </div>
        </div>
       
    </div>

    <div className=' w-[100%] h-[70px] '>
      <div className='  w-[75%] mx-auto '>
          <div className=' flex justify-between items-center'>
                <div className=' w-full h-[80px] mx-auto flex items-center'>
                   <div>
                      <MdOutlineCopyright/>
                   </div>
           
                    <div>
                         <NavLink to='/'>
                             <h3 className=' text-sm  font-bold '>mini<span className=' text-red-500'>Mart</span></h3>
                          </NavLink>
                      </div>

                    <div className=' text-xs xs:hidden'>.- All rights Reserved</div>

                </div>
            
                <div className=' w-[400px] h-[50px] flex justify-evenly items-center'>
                      <RiVisaLine className=' text-[30px] xs:text-sm sm:text-sm'/>
                      <FaAmazonPay className=' text-[30px] xs:text-sm sm:text-sm'/>
                      <SiDiscover className=' text-[40px] xs:text-sm sm:text-sm'/>
                      <BsAmazon className=' text-[20px] xs:text-sm sm:text-sm'/>
                      <FaCcPaypal className=' text-[20px] xs:text-sm sm:text-sm'/>

                </div>

          </div>

    
      
          </div>
      </div>  

    </>
  )
}

export default Footer