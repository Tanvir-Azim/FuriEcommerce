import React,{useState} from 'react'
import { useProductContax } from './ProdaxContax'
//import ProductData from './ProductData'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import Star from './Star';
import { useCardContax } from './CartContax';


function AllProduct({product}) {
   const{AddCartData,AddToWish,viewButton}=useCardContax()
   const quantity = 1
  

   const Wraper = styled.section`

   .img{
     width: 200px ;
     height: 170px;
     z-index:1
   }
   
   
   .menu{
     height: 35px;
     visibility:hidden;
     top: 100px;
     left:0 ;
     z-index: 10;
     background-color:white;
   }
   .main:hover .menu{
    
     visibility: visible;
   }
   
   
   `
   
    //lg:place-items-center  
   
     return (
       <Wraper>
            
      
      <div className=' w-[77%] h-[95vh]  md:h-[170vh] sm:h-[180vh] xs:h-[330vh] lg:w-[85%] grid grid-cols-4 grid-rows-2 gap-4 m-auto mt-10  sm:mt-[20px] md:grid-cols-2 md:grid-rows-[170px 170px  ] sm:grid-cols-2 sm:grid-rows-[170px 170px 170px 170px] xs:grid-cols-1 xs:grid-rows-[170px 170px 170px] lg:gap-20 '>
    
                 {
                   
                   product.map((curElement)=>{
                     return (
                      <>
                      <NavLink to={`/singleproductpage/${curElement.id}`}>
                        <div className='w-[200p] grid place-items-center'> {/* card dov air width*/}
                      
                        <div>
                      
                       
                         <ul className='main w-[200px] h-[260px] '>{/*card air name price air div*/}
                             <li>
                                <img src={curElement.image} className='img w-[200px] h-[170px] xl:w-[170px] md:w-[130px] lg:w-[50px] lg:h-[60px] '/>
                                
                                <li className='menu'>
                                  <div className=' flex  w-full h-full items-center'>
                                  <div onClick={()=>{AddCartData(curElement,quantity,curElement.colors[0])}}>
                                      <NavLink to='/cart'>
                                          <div className=' w-[130px] h-[35px]  bg-white text-red border-[1px] border-red-500   flex items-center text-red-500 font-semibold justify-evenly hover:bg-white hover:text-black ' >
                                      
                                             <div>
                                               <HiOutlineShoppingBag className=' text-[20px]'/>
                                             </div>
                                      
                                             <div>
                                               <p className=' text-sm'>Add To Cart</p>
                                             </div>
                                     
                                        
                                           </div>
                                       </NavLink>
                                      </div>
                                   
                                    <div className=' w-[70px] h-[35px] flex justify-center items-center  bg-white text-red-500  '>
                                    
                                        <div className=' w-9 h-[35px] grid place-items-center border-[1px] border-red-500 border-l-0' onClick={()=>{AddToWish(curElement)}}><NavLink to='/heart'> <CiHeart className=' text-[23px] hover:text-black text-red font-bold '/> </NavLink></div>
                                   
                                    
                                      <div className=' w-9 h-[35px]  grid place-items-center border-[1px] border-red-500 border-l-0' onClick={()=>{viewButton(curElement)}}><NavLink to='/dtailproduct'><FaRegEye className=' text-[20px] hover:text-black text-red font-bold '/> </NavLink></div>
                                     
                                    </div>
                                   
                                  </div>
                                </li>
                                <p className=' grid place-items-center w-full h-full'>{<Star className='grid place-items-center' star={curElement.stars}/>}</p>
                                <p className=' text-[14px] grid place-items-center font-bold text-gray-500' >{curElement.name}</p>
                                <p className=' grid place-items-center'><span className=' flex items-center text-red-500 font-bold'>{curElement.price}<TbCurrencyTaka className=' font-bold text-lg'/></span></p>
                            </li>
                        </ul> 
 
                      </div>
                      </div>
                      </NavLink>
                      </>
                     )
                   })
                 
                 }
             
                 
           </div>
             
           
           </Wraper>
     )
   }
   


export default AllProduct