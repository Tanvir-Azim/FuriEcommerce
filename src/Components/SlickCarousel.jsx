import React from 'react'
//import { useProductContax } from './ProdaxContax'
//import ProductData from './ProductData'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdHeart } from "react-icons/io";

import Star from './Star';
import Slider from "react-slick";
import { useCardContax } from './CartContax';




function SlickCarousel(props) {
  const bestSellerProduct = props.miniproduct
  const{AddCartData,AddToWish,viewButton}=useCardContax()
   //const{bestSellerProduct}=useProductContax()
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
   button.slick-arrow.slick-next{

  
    display:  flex;
    background-color:white;
    border: 1px solid red;
    border-radius: 100%;
    width:50px;
    height: 50px;
    border-radius: 100%;
    color:wheat;
  
   
   }
   button.slick-arrow.slick-next:hover{
    background-color:white;
   }
   .slick-prev:before, .slick-next:before{
    color: red;
   }
   button{
    background-color:white;
    width:50px;
    height: 50px;
    border-radius: 100%;
    color:white;
    border: 1px solid red;
    border-radius:100%;
   }


 

   .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before{
    opacity:1;
   }

   .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before{
   color: red;
   }

   .slick-prev:before, .slick-next:before{
    opacity: 1;
   }

   .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    background:white;
    border: 1px solid red;
}
  

   `
     var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [


        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

        {
          breakpoint:650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    //lg:place-items-center  
   
     return (
       <Wraper>
            <div className=' w-full h-[75vh] grid place-items-center bg-white xs:mt-[150px] '>
           

                 <div className=' w-[76%] h-[80px]   mx-auto  mt-20 flex flex-col items-center justify-center  '>
                  <p className='  text-3xl font-bold text-gray-800'>BEST SELLER</p>
                 <p className='  font-bold -tracking-[-2px]  text-gray-500 '>EXCEPTEUR SINT OCCAECAT</p> 
                 </div>  
       
        <div className=' w-[1200ps] h-[53vh] flex items-center justify-center lg:w-[800px] md:w-[795px] '>
             
            <Slider {...settings} className= 'w-[90%] xl:w-[1200px] sm:w-[580px]  md:w-[600px] xs:w-[400px] lg:w-[1000px] 2xl:w-[1400px]'>
                 {
                   
                   bestSellerProduct.map((curElement)=>{
                    
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
              </Slider>
             
                 
           </div>
             
           </div>
         
           </Wraper>
     )
   }
   
   export default SlickCarousel