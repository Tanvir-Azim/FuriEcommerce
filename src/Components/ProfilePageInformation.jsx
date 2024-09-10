import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineGift } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { useFilterContax } from './FilterContax';
import ChangePassword from './Profile/ChangePassword';
import ManageAddress from './Profile/ManageAddress';
import ProfileInfo from './Profile/ProfileInfo';
import UserProfile from './UserProfile';
import { CiHeart } from "react-icons/ci";
import Heart from '../Heart';
import ManageAccount from './ManageAccount';
import Header from './Header';
import Footer from './Footer';


function ProfilePageInformation() {
  const{handelProfile,ToggleInformation,ToggleAddress,TogglePassword,Profile,Manage,Password,profileinfo,WishProfile,ProfileWish,Logout,ToggleManage,ManageAc}=useFilterContax()


  console.log(ProfileWish)
  return (
    <>
    <Header/>
    <div className=' w-[80%] h-[70vh] xs:h-[120vh] sm:h-[120vh] md:h-[120vh]   mx-auto flex justify-between  xs:flex-col sm:flex-col md:flex-col mt-8' >
        <div className= '  w-[25%] xs:w-full sm:w-full md:w-full   h-[50vh] grid grid-cols-1  grid-rows-[1fr,2fr,1fr,1fr]'>
            <div className=' bg-red-20 border-[1px] border-gray-300 h-full flex justify-center items-center bg '>
  
              <div onClick={()=>{handelProfile()}} className=' w-[90%] h-full mx-auto flex items-center cursor-pointer'>
                
                <div>
                    <img className=' rounded-full w-12 h-12' src="/images/HomePage1/profile.PNG"/>
                </div>
                <div className=' ml-4  '>
                    <p className=' text-xs'>Hellow</p>
                    <p className=' font-[500] text-gray-800'>Tanvir Azim</p>
                </div>
              </div>



          </div>

            <div className=' bg-red-40 border-[1px] border-gray-300 border-t-0 '>
              <div className= 'w-[90%] h-[90%] mx-auto  flex  flex-col justify-center text-gray-700 mt-1'>
                <div onClick={()=>{ToggleManage()}} className={ManageAc?' w-[150px] text-red-500   flex items-center justify-between h-6  cursor-pointer   ':' w-[150px]    flex items-center justify-between h-6  cursor-pointer   '}>
                    <MdOutlineFormatListBulleted/>
                    <p>Manage Account</p>
                </div>
                <div className={ profileinfo?' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer  text-red-500':' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer '}>
                  <p onClick={()=>{ToggleInformation()}} className=' '>Profile Information</p>
                </div>

                <div className={Manage?' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer text-red-500 ':' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer '}>
                  <p onClick={()=>{ToggleAddress()}} className=' '>Manage Address</p>
                </div>

                <div className={Password?' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer text-red-500 ':' ml-8    mt-1 flex items-center justify-between h-6 cursor-pointer '}>
                  <p onClick={()=>{TogglePassword()}} className=' '>Change Password</p>
                </div>
              </div>
            </div>

            <div className='border-[1px] border-gray-300 border-t-0  '>
                <div onClick={()=>WishProfile()} className={ProfileWish?' w-[113px]  md:ml-8 sm:ml-8  ml-4  h-[90%] flex items-center justify-between   cursor-pointer  text-red-500 ':' w-[113px]  md:ml-8 sm:ml-8  ml-4  h-[90%] flex items-center justify-between   cursor-pointer text-gray-700 '}>
                    <CiHeart  className=' text-xl'/>
                    <p>My Wishlist</p>
                </div>
              </div>

            <div className='border-[1px] border-gray-300 border-t-0 '>
              
                <div onClick={()=>{Logout()}}  className=' w-[85px] hover:text-red-500   md:ml-8 sm:ml-8  ml-4  h-[90%] flex items-center justify-between   cursor-pointer text-gray-700 '>
                <NavLink to='/'>
                  <div className=' flex w-full h-full items-center justify-center'>
                    <TbLogout />
                    <p className=' ml-4'>LogOut</p>
                  </div>
                </NavLink>
                </div>

              </div>
        </div>
        <div className=' xs:w-full xs:mt-8 sm:w-full sm:mt-8 md:w-full md:mt-8 w-[70%] h-[90vh] '>
      

            <div>
              {
                Profile && <UserProfile/>
              }
            </div>

            <div>
              {
                profileinfo && <ProfileInfo/>
              }
            </div>

            {
                Manage && <ManageAddress/>
            }

            <div>
              {
                Password && <ChangePassword/> 
              }
            </div>
            <div>
                {
                  ProfileWish && <Heart/>
                }
            </div>

            {
              ManageAc && <ManageAccount/>
            }
        </div>



    </div>
    <Footer/>
    </>
  )
}

export default ProfilePageInformation