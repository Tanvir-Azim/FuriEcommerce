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


function SearchProduct({product}) {
  const [page,setPage]=useState(1)
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
   
   const PreviousPageHandaler=(previous)=>{
    setPage(previous)
}

const NextPageHandaler=(next)=>{
  setPage(next)
}
   
     return (
       <Wraper>
            
      
      <div className='  w-[77%] h-[80vh]  md:h-[150vh] sm:h-[150vh] xs:h-[310vh] lg:w-[85%] grid grid-cols-4 grid-rows-[278px,1fr] gap-4 m-auto mt-10  sm:mt-[20px] md:grid-cols-2 md:grid-rows-[170px 170px  ] sm:grid-cols-2 sm:grid-rows-[170px 170px 170px 170px] xs:grid-cols-1 xs:grid-rows-[170px 170px 170px] lg:gap-20 '>
    
                 {
                   
                   product.slice(page*8-8,page*8).map((curElement)=>{
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
           <div className=' w-100% sm:mt-14 md:mt-14 lg:mt-24 xl:mt-10  xs:mt-11 mt-3'>
                      <div className=' w-[30%] h-12 flex mx-auto lg:mt-4  items-center justify-center '>
                       <button onClick={()=>{PreviousPageHandaler( page-1)}} className=' p-[2px]'>Prev</button>
                         {
                            Array.from({length:(product.length/5)},(v,i)=>{
                              return(
                                <div className='w-[50px] h-full grid place-items-center p-[2px]'> 
                                    <div className={page === i+1?" w-[30px] h-[30px] bg-red-500 text-white":"w-[30px] h-[30px] border-[1px] border-gray-400 rounded-sm"}>
                                       <button className=' grid place-items-center w-full h-full' onClick={()=>{setPage(i+1)}}>{i+1}</button>
                                    </div>
                                </div>
                            )
                            })
                          }
                         <button onClick={()=>{NextPageHandaler(page+1)}} className='p-[2px]'>Next</button>
                    
                      </div>
                   </div>
           
           </Wraper>
     )
   }
   


export default SearchProduct