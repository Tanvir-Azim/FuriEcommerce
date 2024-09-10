import React from 'react'
import styled from 'styled-components'
import { RxCross2 } from "react-icons/rx";
import Header from './Header';


function LoginPage({getData}) {



  


  //absolute  top-6 left-[-200px] right-[-24] w-[300px] bg-green-300 h-[200px]
  return (
    <>
    <Header/>
    <div className='w-[100%] mt-5'>
    
      <div className=' w-[30%] mx-auto bg-gray-50'>
          <div className=' w-full h-16 bg-[#f1eded] flex items-center justify-between'>
            <div>
              <h3 className=' text-[18px] ml-8 font-normal text-gray-500'>MY ACCOUNT</h3>
            </div>

            <div>
              <RxCross2 onClick={()=>{getData()}}  className=' text-xl mr-8 text-gray-500 hover:text-red-500' >kkkk</RxCross2>
            </div>

          
          </div>

          <div className=' w-full h-full m-auto   '>
                <div className=' w-full h-32  flex  flex-col place-content-center ml-4'>
                    <h3 className=' text-[18px] font-normal text-gray-500'>SIGN IN</h3>
                    <p className='text-gray-500 text-sm mt-1'>Welcome back! Sign in to Your Account</p>
                </div>

            
              
                <form action='https://formspree.io/f/mgegzodp' method='POST'>
                    <div className=' w-full h-20 flex flex-col'>
                      <div className='w-[470px] h-8 rounded-full placeholder:pl-3 pb-1 bg-gray-200 grid place-items-center'><input type='text'name='user name' placeholder="Usename or email address" autoComplete='off' required className=' w-[370px] h-8  placeholder:pl-3 pb-1 bg-gray-200 border-none outline-none placeholder:text-xs '/></div><br/>
                      <div className='w-[470px] h-8 rounded-full placeholder:pl-3 pb-1 bg-gray-200 grid place-items-center mt-[-11px]'> <input type='password'name='password' placeholder='Password' autoComplete='off' required className='w-[370px] h-8  placeholder:pl-3 pb-1 bg-gray-200 border-none outline-none placeholder:text-xs'/><br/></div>
                    
              
                    
                    </div>

                    <div className=' w-[93px]  h-16 grid place-items-center'>
                      <button className=' w-[75px] text-sm h-7 bg-gray-500 text-[#fdfafa] font-thin rounded-full pb-[2px] hover:bg-red-500 '><input type='submit'value='' className='btn '/> Login</button>
                    </div>
                    
                </form>
                
                    <div className=' grid place-items-center   w-full h-20'>
                
                      <div className='  w-full h-[1px] bg-[#d1cece] relative'>
                        <p className=' absolute left-[230px] top-[-14px] w-8 h-8 rounded-full grid place-items-center  font-semibold bg-[#EFEEEB] border-[1px] border-[#d1cece]'>OR</p>
                      </div>
                    </div>


                    <div className=' w-full h-28  flex  flex-col place-content-center ml-4'>
                      <h3 className=' text-[18px] font-normal text-gray-500 tracking-wide'>CREATE NEW ACCOUNT</h3>
                      <p className='text-gray-500 text-sm mt-1'>Create your very own account</p>
                    </div>
                 
                 <form>
                    <div className=' w-full h-10 '>
                        <div className='w-[470px] h-8 rounded-full placeholder:pl-3 pb-1 bg-gray-200 grid place-items-center'><input type='text'name='user name' placeholder="Usename or email address" autoComplete='off' required className=' w-[370px] h-8  placeholder:pl-3 pb-1 bg-gray-200 border-none outline-none text-xs '/></div><br/>
                    </div>

                    
                    <div className=' w-[93px]  h-14 grid place-items-center'>
                      <button className=' w-[75px] text-sm h-7 bg-gray-500 text-[#fdfafa] font-thin rounded-full pb-[2px] hover:bg-red-500 '><input type='submit'value='' className='btn '/>Register</button>
                    </div>

                 </form>
                
                
            </div>
            
          
      </div>
      
    </div>
    
    
    </>

  )
}

export default LoginPage