import React, { useState } from 'react'
import { useFilterContax } from '../FilterContax'
import { FaCheck } from "react-icons/fa";
import FilterColor from '../FilterColor';
import { useProductContax } from '../ProdaxContax';
import { TbCurrencyTaka } from "react-icons/tb";
import styled from 'styled-components';

function FilterData() {

  const{handelTable,handelCompany,handleChange,values,filters:{category,company,maxPrice,minPrice,price}}=useFilterContax()
  const{product}=useProductContax()


 let getColor=product.map((curColor)=>{
  return curColor.colors
})
let getCategory =  product.map((curColor)=>{
  return curColor.category
})
let getCompany =  product.map((curColor)=>{
  return curColor.company
})



const singleArray = getColor.flat();
const singleCategory = getCategory.flat();
const singleCompany = getCompany.flat();
const uniqueArray=[...new Set([].concat(singleArray))]
const uniqueCategory=[...new Set([].concat(singleCategory))]
const uniqueCompany=[...new Set([].concat(singleCompany))]
console.log(singleCompany)

const Wraper = styled.section`
.range-slider {
  -webkit-appearance: none; /* Remove default styling in WebKit browsers */
  appearance: none; /* Remove default styling in other browsers */
  width: 100%; /* Full width */
  height: 4px; /* Track height */
  background: red; /* Track color */
  border-radius: 4px; /* Rounded track */
  outline: none; /* Remove outline */
  cursor: pointer; /* Cursor on hover */
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Remove default thumb styling */
  appearance: none; /* Remove default thumb styling */
  width: 18px; /* Thumb width */
  height: 18px; /* Thumb height */
  background:white; /* Thumb color */
  border:2px solid red;
  border-radius: 50%; /* Rounded thumb */
  cursor: pointer; /* Cursor on hover */
}

.range-slider::-moz-range-thumb {
  width: 14px; /* Thumb width */
  height: 14px; /* Thumb height */
  background: #4a90e2; /* Thumb color */
  border-radius: 50%; /* Rounded thumb */
  cursor: pointer; /* Cursor on hover */
}

.range-slider::-ms-thumb {
  width: 14px; /* Thumb width */
  height: 14px; /* Thumb height */
  background: #4a90e2; /* Thumb color */
  border-radius: 50%; /* Rounded thumb */
  cursor: pointer; /* Cursor on hover */
}








`

  return (
    <div className=' w-full h-full lg:w-[240px] grid grid-cols-1 grid-rows-[2fr,2fr,1fr,1fr]'>
      <div className='  border-b border-gray-300'>
        <div className='w-full'>
            <div className=' w-[90%] mx-auto h-10  flex items-center'>
              <h1 className=' font-bold text-[16px] text-gray-700'>CATEGORIES</h1>
            </div>
          
            <div className='w-[90%] mx-auto'>

              {
                uniqueCategory.map((curElement)=>{
                  return(
                    <>
                    <div className=' w-full h-8  flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                        <button className={category===curElement?"h-[16px] w-[16px] bg-red-500 grid place-items-center ":"  h-[16px] w-[16px] rounded-sm grid place-items-center  border-[1px] border-gray-700"} key={curElement} value={curElement} onClick={handelTable} >
                          {category===curElement?<FaCheck className=" text-white text-xs "/>:''}
                        </button>
                        <p className=' ml-2 font-[400] uppercase'>{curElement}</p>
                        </div>
                     <p>({curElement.length})</p>
                 </div> 
                    </>
                  )
                })
              }

            </div>
            
        </div>
        
      </div>
      <div className=' border-b border-gray-300'>
      <div className='w-full'>
            <div className=' w-[90%] mx-auto h-10  flex items-center'>
              <h1 className=' font-bold text-[16px] text-gray-700'>Company</h1>
            </div>
          
            <div className='w-[90%] mx-auto'>

              {
                uniqueCompany.map((curElement)=>{
                  return(
                    <>
                    <div className=' w-full h-8  flex items-center justify-between'>
                      <div className='w-full flex items-center'>
                        <button className={company===curElement?"h-[16px] w-[16px] bg-red-500 grid place-items-center ":"  h-[16px] w-[16px] rounded-sm grid place-items-center  border-[1px] border-gray-700"} key={curElement} value={curElement} onClick={handelCompany} >
                          {company===curElement?<FaCheck className=" text-white text-xs "/>:''}
                        </button>
                        <p className=' ml-2 font-[400] uppercase'>{curElement}</p>
                        </div>
                     <p>({curElement.length})</p>
                 </div> 
                    </>
                  )
                })
              }

            </div>
            
        </div>
      </div>
      
      <div className=' border-b border-gray-300'>
      <div className=' w-[90%] h-[80px] mx-auto flex flex-col justify-evenly'>
          <div>
            <p className=' font-[500]'>Filter by Price</p>
          </div>
          <Wraper>  
          <div>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={values}
              onChange={handleChange}
              className='range-slider'
           />
         </div>
         </Wraper>

          <div className='flex justify-around w-[65%]'>
            <div>
                <p>Price</p>
            </div>

           <div className='flex items-center'>
            <TbCurrencyTaka/>
              <p className='text-sm'>{minPrice}</p>     
           </div> 
            <p>-</p>
            <div className='flex items-center'>
              <p className='text-sm'>{values}</p>     
              <TbCurrencyTaka/>
           </div>
          </div>
      </div>
      </div>
      <div className=' border-b border-gray-300  flex flex-col justify-center'>
          <FilterColor uniqueArray={uniqueArray}/>
      </div>

    </div>
  )
}

export default FilterData