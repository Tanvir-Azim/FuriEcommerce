import React from 'react'
import Star from './Star'
import { TbCurrencyTaka } from "react-icons/tb";  

function MiniProductData({curElement}) {
  return (
    <div className=' w-full h-[100px]  mt-5 flex justify-around'>
    <img src={curElement.image} className=' h-[90px] w-[90px]'/>
    <div className=' flex flex-col  justify-center w-[150px] ml-5 '>
    <p className=' text-xs hover:text-red-500'>{curElement.name}</p>
    <p className=' text-xs mt-1'><Star star={curElement.stars}/></p>
   
    <div className=' flex mt-1'>
    <TbCurrencyTaka className=' text-sm'/>
    <p className='  text-xs text-red-500'>{curElement.price}</p>
    <p className=' line-through text-[10px] font-thin ml-2 text-gray-500'>{curElement.discount}</p>
    </div>
</div>

</div>
  )
}

export default MiniProductData