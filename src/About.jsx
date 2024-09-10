import React from 'react'

import { BiLogoTwitter } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Loding from './Components/Loding';
import { useFilterContax } from './Components/FilterContax';
import Header from './Components/Header';
import Footer from './Components/Footer';


function About() {
  const{loading,aboutLoading}=useFilterContax()
  return (
   <>

 
    
    {aboutLoading?<Loding/>: <div>
    <Header/>  
    <div className=' w-full  mb-8 '>
      <div className=' w-full h-[28vh bg-gray-100'>
        <div className=' w-ful flex h-[28vh] items-center justify-center'>
            <div className=' w-[220px] h-[25vh]  grid place-items-cente'>
               <img className=' h-[25vh] ' src="/images/HomePage1/chair08.jpg"/>
            </div>
            <div className=' w-[300px] h-[25vh] xs:w-[190px] grid place-content-center  '>
                <h1 className=' text-5xl font-[700] text-gray-800 tracking-wide xs:text-3xl'>ABOUT US</h1>
                <div className=' mt-3 grid place-items-center  '>
                  
                </div>
            </div>
          </div>
      </div>

      <div className=' w-[80%] h-[61vh]   mx-auto'>
          <div className=' w-full h-[150px] flex items-center'>
            <h1 className=' text-3xl font-[700] text-gray-800'>WHO WE ARE</h1>
          </div>
            <div className=' '>
              <p className=''>Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
            </div>
            <div className=' w-full h-[75px] mt-2'>
              <p className=' text-2xl font-[500] text-gray-800 xs:text-[20px]'>Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.</p>
            </div>
            <div className='mt-6'>
              <p>Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at,</p>
            </div>

          <div className=' mt-6'>
          <p className=' font-bold'>Follow Us</p>
          <div className='flex justify-around w-[150px] text-gray-500 mt-2 text-lg'>
                <BiLogoTwitter/>
                <FaFacebookF/>
                <IoLogoGoogleplus/>
                <TfiYoutube/>
                <FaLinkedinIn/>
                <FaWhatsapp/>
              </div>
              </div>
             
      </div>

      <div className=' xs:mt-[250px] sm:mt-[220px] md:mt-[155px] lg:mt-[100px] xl:mt-[80px] 2xl:mt-[50px] w-[80%] mx-auto'>
          <div className=' h-[70px]'>
            <h1 className=' text-2xl text-gray-800 font-bold'>OUR TEAM</h1>
          </div>
      
        <div className=' h-[430px] place-content-center  w-[100%] mx-auto grid grid-cols-4 grid-rows-1 gap-5 md:grid-cols-2 md:grid-rows-2 md:h-[800px] sm:grid-cols-2 sm:grid-rows-2 sm:h-[800px] xs:grid-cols-1 xs:grid-rows-4 xs:h-[1500px]'>
      
            <div className=''>
              <img className=' xs:w-full xs:h-[300px] ' src="/images/HomePage1/img44.jpg"/>
                <div className=' mt-4  flex'>
                      <div className=' w-1 h-12 bg-gray-300'></div>
                      <div className=' ml-2'>
                        <p className=' text-xl font-[700] text-gray-800'>CLARA WOODEN</p>
                        <p className=' text-xs tracking-widest ml-1'>DESIGNER</p>
                      </div>
                </div>
            </div>
            <div className=' '>
              <img className=' xs:w-full xs:h-[300px] ' src="/images/HomePage1/img45.jpg"/>
                <div className=' mt-4 flex'>
                      <div className=' w-1 h-12 bg-gray-300'></div>
                      <div className=' ml-2'>
                        <p className=' text-xl font-[700] text-gray-800'>JOHN WICK</p>
                        <p className=' text-xs tracking-widest ml-1'>FOUNDER</p>
                      </div>
                </div>
            </div>
          

            <div className=' '>
              <img className=' xs:w-full xs:h-[300px] ' src="/images/HomePage1/img46.jpg"/>
              <div className=' mt-4 flex'>
                      <div className=' w-1 h-12 bg-gray-300'></div>
                      <div className=' ml-2'>
                        <p className=' text-xl font-[700] text-gray-800'>HARRY KANE</p>
                        <p className=' text-xs tracking-widest ml-1'>DESIGNER</p>
                      </div>
                </div>
       
            </div>
            <div className=' '>
              <img className=' xs:w-full xs:h-[300px]   z-0' src="/images/HomePage1/img44.jpg"/>
              
              <div className=' mt-4 flex'>
                      <div className=' w-1 h-12 bg-gray-300'></div>
                      <div className=' ml-2'>
                        <p className=' text-xl font-[700] text-gray-800'> CLARA WOODEN</p>
                        <p className=' text-xs tracking-widest ml-1'>DESIGNER</p>
                      </div>
                </div>
       
            </div>
        </div>
        </div>
        </div>
        <Footer/>
        </div> }

        </> 
  )
}

export default About