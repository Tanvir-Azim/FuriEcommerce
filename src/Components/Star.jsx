import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

function Star({star,reviews}) {
    const reatingStart = Array.from({length:'5'},(vlue,index)=>{
            const number =index+0.5

            return(
                <>
                   {
                    star>=index+1?<FaStar  className='text-[#FEBD04]'/>:star>=number?<FaStarHalfStroke  className='text-[#FEBD04]'/>:<AiOutlineStar  className='text-[#FEBD04]'/>
                   }
                </>
            )
    })
  return (
    <div className='flex' >
     

        {reatingStart}
     
      
     
 
    </div>
  )
}

export default Star