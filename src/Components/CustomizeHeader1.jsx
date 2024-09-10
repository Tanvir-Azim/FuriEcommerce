import React,{createContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Modal from './Modal';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from "react-icons/md";
import PageContent from './PageContent';
import { HiOutlineLockClosed } from "react-icons/hi2";
import ProfilePage from './ProfilePage';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";




function CustomizeHeader1() {
  
  const [showModal,setShowModal]=useState(false)
  const [profileDropdawn,setProfileDropdawn]=useState(false)


  

 

  const Menu = styled.section`
     li{
      
    }
    li ul{
      visibility: hidden;
      transition:all .1s linear;
      top:45px;
      
      
     
    }
  li:hover ul{
    visibility:visible;
    cursor: pointer;
    
    
    
  }

  `
    const ProductMenu = styled.section`
    li{
      
    }
    li ul{
      visibility: hidden;
      transition:all .1s linear;
      top:45px;
      
      
     
    }
  li:hover ul{
    visibility:visible;
    cursor: pointer;
    
    
    
  }

  `

const ProductMenus = styled.section`
li{
  
}
li ul{
  visibility: hidden;
  transition:all .4s ease;
  top:45px;
  
  
 
}
li:hover ul{
visibility:visible;
cursor: pointer;




}

`


  

  const tougleSwitch =()=>{
    setShowModal(!showModal)
  }
 
  return (
    <>
    <div className=' w-[100%] bg-gray-900  '>
    <div className=' w-[75%]  bg-gray-900 flex justify-between mx-auto'>
    <div className=' flex justify-between w-[400px] h-8 '>
        <div  className='flex items-center   mt-2 w-[115px] mb-2 sm:hidden xs:hidden '>
                <IoIosCall className=' mr-1 text-gray-400'/>
            <p className='text-gray-400 text-xs'>01857165115</p>
            
          </div>

        <div className=' flex items-center mt-2 w-[200px] mb-2 xs:hidden sm:hidden'>
            <MdOutlineMail className='ml-1 text-gray-400'/>
            <p className='text-gray-400 text-sm'>info@minimart.furniture</p>
            
          </div>
    </div>

    <div className=' w-[300px] sm:w-[400px] xs:w-[800px] h-8  flex justify-around'>
        <button className=' text-xs text-gray-400 font-semibold'>Oder Track</button>
        <button className=' text-xs text-gray-400 font-semibold'>My Accunt</button>
        <button className=' text-xs text-gray-400 font-semibold'>Checkour</button>
    </div>

    </div>
    <div className=' w-[100%] bg-white'>
        <div className=' w-[75%] h-16 flex justify-between items-center mini:w-[360px] bg-white mx-auto'>
            <div className=' w-[300px]grid place-items-center lg:w-[200px] xs:w-[200px]'>
                <NavLink to='/'>
                  <h3 className=' text-3xl  font-bold '>mini<span className=' text-red-500'>Mart</span></h3>
                </NavLink>
            </div>
            <div className='  flex mr-10  z-30'>
                <div className='flex space-x-12   font-light text-md tracking-[2px] xs:hidden sm:hidden md:hidden  lg:space-x-5 '>
                  <ul className=' flex space-x-14  font-light text-md tracking-[2px] xs:hidden sm:hidden md:hidden  lg:space-x-5  items-center'>

                    <Menu>
                      <li className=' relative'><NavLink  to=''>HOME</NavLink>
                      
                  
                        <ul className= ' bg-white  absolute w-32 top-11 left-[-35px] text-gray-500 tracking-tight '>

                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage1'>HOMEPAGE 1</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage2'>HOMEPAGE 2</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage3'>HOMEPAGE 3</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage4'>HOMEPAGE 4</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage5'>HOMEPAGE 5</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage6'>HOMEPAGE 6</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage7'>HOMEPAGE 7</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage8'>HOMEPAGE 8</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage9'>HOMEPAGE 9</NavLink></li>
                          <hr/>
                          <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage10'>HOMEPAGE 10</NavLink></li>
                          <hr/>
                          
                        </ul>
                      </li>
                      </Menu>
                      <ProductMenu>
                      
                      <li className=' relative'><NavLink  to=''>PRODUCTS</NavLink>
                        <ul className= ' bg-white  absolute w-32  top-11  right-[-15px] tracking-tight text-gray-500'>

                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage1'>PRODUCT GRID VIEW</NavLink></li>
                              <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage2'>PRODUCT GRID VIEW2</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage3'>PRODUCT GRID VIEW3</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage4'>PRODUCT GRID VIEW4</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage5'>PRODUCT GRID VIEW5</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage6'>PRODUCT GRID VIEW6</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage7'>PRODUCT GRID VIEW7</NavLink></li>
                          <hr/>


                        </ul>
                      
                      </li>
                      </ProductMenu>

                      <ProductMenu>
                      <li className=' relative'><NavLink  to=''>BLOG</NavLink>
                      <ul className= ' bg-white  absolute w-40  top-11  right-[-90px] tracking-tight text-gray-500 '>

                          <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4 '><NavLink to='/blogpage1'>BLOG FULLWIDTH PAGE</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4 '><NavLink to='/blogpage2'>BLOG RIGHT SIDEBAR2</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4'><NavLink to='/blogpage3'>BLOG POSTLIST MASONRY</NavLink></li>
                            <hr/>
                          <li className='text-[11px] font-[400] h-10 flex items-center w-full  ml-4'><NavLink to='/blogpage4'>BLOG POST DETAIL SIDEBAR</NavLink></li>
                           <hr/>
                          <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4'><NavLink to='/blogpage5'>BLOG POST DETAIL FULL WIDTH</NavLink></li>
                            <hr/>
                      </ul>
                      </li>
                      </ProductMenu>
                      <div className='  w-auto    flex items-center '>
                          <div className=''>
                          <ProductMenu>
                            <li><NavLink  to='' className='relative'>PAGES </NavLink>
                            <ul className=' w-[1300px] h-[450px] bg-gray-300 absolute  left-[45px]  mt-12'><PageContent/></ul>

                          </li>
                          </ProductMenu>
                          </div>
                          <div><MdKeyboardArrowDown/></div>
                      
                      </div>
                      <NavLink  to='/about'>ABOUT</NavLink>

                      <ProductMenus>
                        <li className=' relative'><NavLink  to=''>CONTACT</NavLink>
                            <ul className= ' bg-white  absolute w-32  top-11  right-[-20px] tracking-tight text-gray-500 '>

                              <li className='text-[11px] font-[400] h-10 grid  place-items-center w-full  '><NavLink to='/contactpage1'>CONTACT</NavLink></li>
                              <hr/>
                              <li className='text-[11px] font-[400] h-10 grid place-items-center w-full  '><NavLink to='/contactpage2'>CONTACT 2</NavLink></li>
                              <hr/>
                          </ul>
                      </li>
                      </ProductMenus>
                  </ul>
                </div>

                <div className=' flex justify-around items-center w-[103px] h-12  md:w-[193px] xs:w-[170px] sm:w-[193px]  xs:ml-10]'>
                  <NavLink to=''>
                      <MdOutlineMenu className=' w-7 h-7  lg:hidden xl:hidden 2xl:hidden' onClick={()=>{tougleSwitch()}}/>
                  </NavLink>

                  <NavLink to='/search'>
                      <IoSearchOutline className=' w-7 h-7 ' />
                  </NavLink>
                  <NavLink to='/cart'>
                  <div className=' h-auto w-auto flex relative'><HiOutlineShoppingBag className=' w-7 h-7'/><span className=' bg-black text-white w-4 h-4 grid place-items-center rounded-full text-[11px] absolute top-3 left-5'>3</span></div>
                  </NavLink>
                  <NavLink to='/'>
                      <div className=' relative'><HiOutlineLockClosed className=' w-7 h-7  ' onClick={()=>{setProfileDropdawn(true)}}/>
                        {profileDropdawn && <ProfilePage getData={setProfileDropdawn}/>}
                       
                      </div>
                  </NavLink>
                  
                
                  
                </div>
            </div>
            </div>
            </div>
            </div>
           

       
      {showModal?<Modal/>:null}
    
    </>
  )
}


export default CustomizeHeader1