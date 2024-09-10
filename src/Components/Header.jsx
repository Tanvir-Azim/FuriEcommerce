import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Modal from './Modal';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from "react-icons/md";
import PageContent from './PageContent';
import { HiOutlineLockClosed } from "react-icons/hi2";
import ProfilePage from './ProfilePage';
import { useCardContax } from './CartContax';
import { useFilterContax } from './FilterContax';
import { IoMdMenu } from "react-icons/io";
import Category from './Category';
import { RxCross2 } from "react-icons/rx";
import ProfilePageInformation from './ProfilePageInformation';


function Header() {
  const{cart,wish,totalItem}=useCardContax()
  const{FastLoading,toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact,home,about,product,contact,pages,blog,getInputValue,getSearchValue,searchingSagetion ,searchValue,searchTerm,seleteSearch,sagetionList,RemoveSagetion,searchBoxValue,filters:{category,searchResult}}=useFilterContax()

  const [showModal,setShowModal]=useState(false)
  const [profileDropdawn,setProfileDropdawn]=useState(false)
  const[categoryDropdawn,setCategoryDropdawn]=useState(false)
 
  



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

  const handelCategories=()=>{
    setCategoryDropdawn(!categoryDropdawn)
}
  
let getdata =  searchingSagetion.map((curColor)=>{
  return curColor.company
})

const uniqueArray=[...new Set([].concat(searchingSagetion))]

console.log(uniqueArray)
 
  return (
    <>

    
        <div className=' w-[100%] h-16 flex justify-between  items-center mini:w-[360px] '>
        

            <div onClick={()=>{toggleHome()}} className=' w-[250px] grid place-items-center lg:w-[250px] xs:w-[200px]'>
                <NavLink to='/'>
                  <h3 className=' text-3xl  font-bold '>Mini<span className=' text-red-500'>Mart</span></h3>
                </NavLink>
            </div>
            <div className='  flex w-[100%] xs:w-[60px] sm:w-[60px] md:w-[60px]  items-center justify-between  mr-10  z-30'>
                <div className='flex space-x-8   font-light text-md tracking-[2px] xs:hidden sm:hidden md:hidden  lg:space-x-4 '>
                  <ul className='flex space-x-8 text-gray-600 font-[400]  text-md tracking-[2px] xs:hidden sm:hidden md:hidden lg:text-sm  lg:space-x-4  items-center'>

                    <Menu>
                       <li onClick={()=>{toggleHome()}} className={home?" text-red-500 ":""}><NavLink  to='/'>HOME</NavLink></li>
                    </Menu>
                      <ProductMenu>
                      
                      <li onClick={()=>{toggleProducts()}} className={product?" text-red-500 ":""}><NavLink  to='/product'>PRODUCTS</NavLink></li>
                      </ProductMenu>

                      <ProductMenu>
                        <li onClick={toggleBlog} className={blog?" text-red-500 ":""}><NavLink  to='/blog'>BLOG</NavLink></li>
                      </ProductMenu>
                      <div className='  w-auto    flex items-center lg:hidden '>
                          <div className=''>
                          <ProductMenu>
                            <li onClick={()=>{togglePages}}><NavLink  to='' className={pages?" text-red-500":null}>PAGES </NavLink>
                            <ul className=' w-[1300px] h-[450px] left-[150px]  absolute '><PageContent/></ul>

                          </li>
                          </ProductMenu>
                          </div>
                          <div><MdKeyboardArrowDown/></div>
                      
                      </div>
                      <li onClick={()=>{toggleAbout()}} className={about?" text-red-500":null}><NavLink  to='/about'>ABOUT</NavLink></li>

                      <ProductMenus>
                        <li onClick={()=>{toggleContact()}} className={contact?" text-red-500":null}><NavLink  to='/contact'>CONTACT</NavLink></li>
                      </ProductMenus>
                  </ul>
                </div>

                <div className=' flex justify-around items-center '>
                <div>
                  <NavLink to=''>
                      <MdOutlineMenu className=' w-7 h-7  lg:hidden xl:hidden 2xl:hidden z-50' onClick={()=>{tougleSwitch()}}/>
                  </NavLink>
                  </div>
                  <div className= ' w-[380px] lg:w-[300px]  xs:hidden sm:hidden md:hidden lg:text-sm'>
                      <NavLink>
                         <p  onClick={()=>{setProfileDropdawn(true)}}  className=' grid place-items-center text-gray-600 font-[400] uppercase tracking-[2px]'> Login/Register</p>
                         {profileDropdawn && <ProfilePage getData={setProfileDropdawn}/>}
                      </NavLink>
                  </div>  
                </div>
            </div>
           

        </div>
          <div className=' w-full h-14 bg-red-500   flex justify-around'>

            <div className=' w-[90%]  flex justify-around'>

                <div className=' w-[200px]  grid place-items-center md:w-[200px] lg:w-[200px] xs:w-[200px] sm:hidden xs:hidden'>
                    <div onClick={()=>{handelCategories()}}  className=' w-[100%] cursor-pointer h-10 bg-gray-800  flex items-center justify-evenly rounded-sm'> 
                        <div>
                          <IoMdMenu className=' text-xl text-white'/>
                        </div>
                        <div>
                          <h1 className=' text-white s'>All Categories</h1>
                        </div>
                    </div>
                </div>


                <div className=' w-[50%]  h-14  grid place-items-center'>
                  <div className=' w-[100%]  grid place-items-center mx-auto'>
                      <div className=' flex place-content-center w-[100%] mx-auto'>
                          <input type='text' placeholder='Search Product...'  onChange={getInputValue} className='w-[82%] text-black h-10 border-[1px] border-red-500 outline-none rounded-l-[3px] p-4' />
                          <NavLink to='/search'>
                            <button onClick={()=>{getSearchValue()}} className=' cursor-pointer text-lg w-[105px] h-[40px] p-1 grid place-content-center bg-gray-900 text-white rounded-r-[3px] hover:bg-white hover:text-red-500 hover:border-red-500 hover:border-[1px] hover:border-l-0 placeholder:p-7 xs:w-[70px] xs:text-[13px]'>Search</button>
                          </NavLink>
                      </div>
                   </div>
                </div>

                <div className='  h-full flex justify-around items-center w-[173px] lg:w-[140px]  md:w-[130px] xs:w-[115px] sm:w-[120px]  xs:ml-10]'>

                    <NavLink to='/heart'>
                      <div className=' h-auto w-auto flex relative'><CiHeart className=' w-7 h-7 text-white '/><span className=' bg-black text-white w-4 h-4 grid place-items-center rounded-full text-[11px] absolute top-3 left-5'>{wish.length}</span></div>
                    </NavLink>
                    <NavLink to='/cart'>
                      <div className=' h-auto w-auto flex relative'><HiOutlineShoppingBag className=' text-white w-6 h-6 '/><span className=' bg-black text-white w-4 h-4 grid place-items-center rounded-full text-[11px] absolute top-3 left-5'>{totalItem}</span></div>
                    </NavLink>

                    <NavLink to="/profilepageinformation">
                      <div className=' relative'><HiOutlineLockClosed className=' w-6 h-6  text-white  '/>
                       
                      </div>
                  </NavLink>
                  </div>
                </div>
            </div>
       
      {showModal?<Modal/>:null}
      {categoryDropdawn?<Category/>:""}


      {
        uniqueArray.length>1 &&     <div className=' xs:hidden  w-[40%] m-0 bg-white absolute lg:left-[35%] md:left-[33%] sm:left-[15%] xs:laft:[-500px]  z-50 top-[112px] left-[30%]  fle shadow-2xl  flex  '>
        
        <div className=' w-[95%] h-[20vh] overflow-scroll bg-white '>
          {
            uniqueArray.filter((cur)=>{
              return cur.toLowerCase().startsWith(searchResult)
                }).map((cur)=>{
                  return <NavLink to='/search'> 
                    <div className=' w-full h-8 flex items-center hover:bg-gray-200'>
                      <button className=' ml-3 '  onClick={()=>{seleteSearch(cur)}}>{cur}</button>
                    </div>
                    <hr/>
                  </NavLink>
                })
          
          }


        </div>
        {searchingSagetion.length>1 && <div><RxCross2 className=' text-2xl cursor-pointer hover:text-red-500' onClick={()=>{RemoveSagetion()}}/></div>}
      </div>
     
      }

 
    </>
  )
}

export default Header