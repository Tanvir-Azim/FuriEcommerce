import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wraper = styled.section`

.carousel .control-dots .dot{
 
  
  width: 12px;
  height: 12px;
  border: 2px solid black;
  background: none;
  



}
@media only screen and (min-width: 200px) {
  .carousel .control-dots .dot{

    margin-bottom:20px;
    width: 10px;
    height: 10px;
}
}
`

function HeroSection() {
  return (
    <>

      <Wraper>

        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={0.1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          className=' absolute z-10'       
                >
              
                    <div>
                        <img src='/images/hero1.jpeg'/>
                    
                    </div>
                   <div>
                      <img src='/images/hero2.jpeg'/>
                 
                    </div>
                  <div>
                      <img src='/images/hero3.jpeg'/>
                    
                  </div>
                 
                </Carousel>
              </Wraper> 
                  <NavLink to='/productpage1'>
                    <div className=' relative w-[170px]  h-10  left-[45%] z-20 top-[500px]  grid place-content-center hover:text-red-500  xl:left-[45%] xl:top-[400px]  lg:top-[300px] lg:left-[40%]  md:left-[38%] md:text-sm md:top-[240px] sm:left-[38%] sm:text-xs sm:top-[200px]  xs:left-[35%] xs:text-xs xs:w-[140px] xs:top-[140px] '>
                      <button className=' w-full h-full flex place-items-center hover:text-red-500 font-bold text-gray-500 xs:text-[10px] sm:text-[10px] xs:hidden'> <div className=' w-7 h-[1px] bg-black mr-2'></div>  SHOP NOW <div className=' w-7 h-[1px] bg-black ml-2'></div></button>
                    </div>
                  </NavLink>

                   
    </>
  )
}

export default HeroSection