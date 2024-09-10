
import Header from '../Header'
import { useFilterContax } from '../FilterContax';
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import Star from '../Star';
import styled from 'styled-components';
import Short from '../Short';
import FilterData from './FilterData';
import { useCardContax } from '../CartContax';
import Footer from '../Footer';
import Loding from '../Loding'




function ProductPage1() {
  const{gridview,listview,filterProduct,productLoading}=useFilterContax()
  const{WistToCart,AddToWish,viewButton}=useCardContax()

  const[page,setPage]=useState(1)
  console.log(filterProduct)
 
  const quantity = 1
  

  const Wraper = styled.section`


  
 
  
  .menu{
    height: 35px;
    visibility:hidden;
    top: 165px;
    left:0 ;
    z-index: 10;
    background-color:black;
  }
  .main:hover .menu{
   
    visibility: visible;
  }
  
  
  `

const handelButton=(page)=>{
  setPage(page)
}

const PreviousPageHandaler=(previous)=>{
    setPage(previous)
}

const NextPageHandaler=(next)=>{
  setPage(next)
}


  return (
    <>
    {
      productLoading?<Loding/>:<div>
      <Header/>
      <Wraper> 
      <div className=' w-[75%]   h-[100vh] mx-auto grid grid-cols-[1fr,3fr]  mt-4   sm:grid-cols-1 sm:grid-rows-2 sm:h-[259vh] xs:grid-cols-1 xs:grid-rows-2  xs:h-[400vh]     md:h-[254vh]  md:grid-cols-1 md:grid-rows-2'>
      <div className=' w-full  h-[90vh] border-[1px] border-gray-300'>
      <FilterData product={filterProduct}/>
          </div>
          <div className=' ml-5 xs:mt-[-660px] md:mt-[-150px] sm:mt-[-130px] w-full h-[100vh] '>{ /*main grid or list div*/}
              <div className=' w-full  lg:mx-auto h-12  flex justify-between items-center'>
                <Short/>
                </div>
              
                
                  {gridview === true &&
                    <div className='w-[100%] h-[79vh] mx-auto   md:h-[120vh] sm:h-[115vh] xs:h-[250vh] lg:w-[85%] grid grid-cols-3 grid-rows-2 gap-4 m-auto md:grid-cols-2 md:grid-rows-[170px 170px]  sm:grid-cols-2 sm:grid-rows-[170px 170px 170px 170px] xs:grid-cols-1 xs:grid-rows-[170px 170px 170px] lg:gap-20 '>
                   {
                      filterProduct.slice(page*6-6,page*6).map((curElement)=>{
                      return(
                          <>
                          <NavLink to={`/singleproductpage/${curElement.id}`}>
                          <div className='w-[200p] grid place-items-center'> {/* card dov air width*/}
                      
                            <div>
                      
                       
                                <ul className='main w-[200px] h-[260px] '>{/*card air name price air div*/}
                                   <li>
                                      <img src={curElement.image} className='img w-[200px] h-[180px] lg:w-[170px] lg:h-[170px] lg:p-2 xl:p-1 '/>
                                
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
                  }
                 
               
  
                <div className='  w-[80%]  mx-auto xs:w-full'>
                  {listview === true &&
                  <div className= 'w-full h-full xl:mt-4  bg-gray-30 mx-auto'>
                   {
                      filterProduct.slice(page*2-2,page*2).map((curElement)=>{
                       return(
                          <>
                          
                          <div className=' w-full h-300px bg-green-00 border-[1px] border-gray-200 mt-5'>
                            <div className='w-full h-[270px] flex justify-around items-center'>
                              <div className=' w-[300px] h-[200px grid place-items-center '>
                                  <img src={curElement.image} className=' w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] xs:mr-3 sm:w-[140px] sm:h-[140px] sm:mr-3 md:w-[170px] md:h-[170px] lg:h-[180px] lg:w-[180px] '/>
                              </div>
                              <div className=' w-[350px] h-[200px]'>
                                <p className=' text-lg font-[600] xs:text-[15px]'>{curElement.name}</p>
                                   <div className='flex h-10 w-full items-center'>
                                      <TbCurrencyTaka className=' text-xl'/>
                                      <p>{curElement.price}</p> 
                                      
                                   </div> 
                               
                                <p className=' text-md xs:text-xs sm:text-xs md:text-sm'>{curElement.description.slice(0,90)}</p>
                                <div></div>
                                <NavLink to='/cart'>
                                    <button onClick={()=>{WistToCart(curElement,quantity,curElement.colors[0])}} className=' rounded-sm mt-5 w-32 h-9 bg-red-500 text-white font-[400] hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500'>Add To Cart</button>
                                </NavLink>
                              </div>
                            </div>
                            </div>
                         
                     
            
                  
    
                          </>
                         ) 
                      })
                    }
                 
                  </div>
              
                  }
                </div>
               
              
                
                {filterProduct.length> 0 &&
                 <div className=' w-100% sm:mt-20 md:mt-6 xs:mt-6 lg:mt-4 xl:mt-4 mt-3'>
                      <div className='  w-[40%] h-12 flex mx-auto lg:mt-8 gried place-content-center '>
                       <button onClick={()=>{PreviousPageHandaler( page-1)}} className=' p-[2px]'>Prev</button>
                         {
                            Array.from({length:(filterProduct.length/5)},(v,i)=>{
                              return(
                                <div className='w-[50px] h-full grid place-items-center p-[2px]'> 
                                    <div className={page === i+1?" w-[30px] h-[30px] bg-red-500 text-white":"w-[30px] h-[30px] border-[1px] border-gray-400 rounded-sm"}>
                                       <button className=' grid place-items-center w-full h-full' onClick={()=>{handelButton(i+1)}}>{i+1}</button>
                                    </div>
                                </div>
                            )
                            })
                          }
                         <button onClick={()=>{NextPageHandaler(page+1)}} className='p-[2px]'>Next</button>
                    
                      </div>
                   </div>
                  }
                </div>
            </div>
            

              
            </Wraper>
            <Footer/>   
             
      </div>
    }

    </>
  )
}

export default ProductPage1