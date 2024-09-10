import React from 'react'
import { NavLink } from 'react-router-dom'

function PageContent() {
  return (
    <div className=' relative '>
      <div className= ' absolute w-[1300px] h-[550px]  left-[3px] mt-4 shadow-2xl  border-[1px] border-gray-300 bg-white '>
        <div className=' h-8 w-8   rotate-45 absolute left-[360px] top-[-18px]  border-b-0 border-r-0  border-[1px] border-gray-300'></div>
        <div className='w-[1300px] h-[500px]  left-[3px] grid grid-cols-[1fr,1fr,1fr,1.3fr] grid-rows-1 mx-auto mt-4'>
          
            <div className=''>
            <h1 className=' font-semibold ml-8 text-gray-600'>SHOP PAGE</h1>
              <div className=' h-[450px] w-full flex flex-col justify-evenly mt-5 text-[14px] text-gray-600 ml-8 font-normal'>
                <NavLink to='/product'>Product Page</NavLink> 
                <NavLink to='/listview'>Product List View</NavLink>
                <NavLink to='/gridview'>Product Grid View</NavLink>
                <NavLink to='/product'>Product Detail</NavLink>
                <NavLink to='/cart'>Shoping Cart</NavLink>
                <NavLink to='/heart'>Wish List</NavLink>
                <NavLink to='/loginpage'>Login Page</NavLink>
                <NavLink to='/loginpage'>Register Page</NavLink>
                <NavLink to='/homepage1'>Home Page</NavLink>
                <NavLink to='/blogpage1'>Blog Page</NavLink>
                <NavLink to='/contactpage1'>Contact Page Page</NavLink>
                <NavLink to='/about'>About Page</NavLink>

            </div>
            </div>
            <div className=' w-full h-full flex flex-col justify-around'>
                <div className=' w-full h-full'>
                  <h1 className=' font-semibold ml-8 text-gray-600'>SHOP PAGE</h1>
                    <div className=' h-[200px] w-full flex flex-col justify-evenly mt-5 text-[14px] text-gray-600 ml-8 font-normal'> 
                      <NavLink to='*'>404 Page</NavLink>
                      <NavLink to='*'>404 Page2</NavLink>
                      <NavLink to='*'>404 Page3</NavLink>
                      <NavLink to='*'>404 Page4</NavLink> 
                      <NavLink to='*'>404 Page5</NavLink>
                    </div>
                </div>
                <div className=' w-full h-full mt-10'>
                <h1 className=' font-semibold ml-8 text-gray-600'>COMING SOON</h1>
                    <div className=' h-[80px] w-full flex flex-col justify-evenly mt-5 text-[14px] text-gray-600 ml-8 font-normal'> 
                      <NavLink to='/product'>Coming Soon</NavLink>
                      <NavLink to='product'>Coming Soon2</NavLink>
                    </div>
                </div>

            </div>
            <div className=' w-full h-full '>
           
                <h1 className=' font-semibold ml-8 text-gray-600'>KITCHEN FURNITURE</h1>
                
              <div className=' h-[400px] w-full flex flex-col justify-evenly mt-5 text-[14px] text-gray-600 ml-8 font-normal'>
                <NavLink to='/product'>Kitchen Taps</NavLink> 
                <NavLink to='/product'>Breakfast Time</NavLink>
                <NavLink to='/product'>Cooking</NavLink>
                <NavLink to='/product'>Food Storage Boxes</NavLink>
                <NavLink to='/product'>Spice Jars</NavLink>
                <NavLink to='/product'>Napskins</NavLink>
                <NavLink to='/product'>Oven Floves</NavLink>
                <NavLink to='/product'>Placemats</NavLink>
                <NavLink to='/product'>Cooking</NavLink>
                <NavLink to='/product'>Food Storage Boxes</NavLink>
                <NavLink to='/product'>Spice Jars</NavLink>
              </div>
            </div>
            <div className=' w-full h-full relative lg:hidden '>
            <img src="/images/HomePage2/h2banner3.jpeg"  className=' w-[80%] h-[350px] xs:w-full xs:h-full sm:w-full sm:h-full'/>
              <NavLink to='/singleproductpage/thapaserialos'><button className=' absolute top-[54%] left-[22%] z-50 text-xs hover:text-red-500  font-bold text-blue-500'>HURRY UP</button></NavLink>
    
            </div>

        </div>

      </div>
      </div>
    
  )
}

export default PageContent