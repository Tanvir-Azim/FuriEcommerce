import React, { useState } from 'react'
import { useFilterContax } from './FilterContax'

function FilterColor({uniqueArray}) {
    const{findColor,filters:{color}}=useFilterContax()

  return (
    <div className=' w-[90%] mx-auto'>
        <div className=' w-[ 65%] h-7 mx-auto '>
        <p className=' font-[600] font md:ml-[]'>COLOR</p>
        </div>
    
        
        <div className='w-[65%]  h-[30PX] flex justify-between items-center'>
       
        {
            uniqueArray.map((curData)=>{
            return(
                    <>
                     <div className={color === curData?" w-[31px] h-[31px] border-[2px] rounded-[3px] border-red-500 grid place-items-center ":'' }>
                        <button key={curData.id} style={{backgroundColor:curData}} className="h-[23px] w-[23px] grid place-items-center border-1px rounded-sm" value={curData} onClick={findColor}/>
                     </div>
                    </>
                    )
                 })
       }
        </div>
    </div>

  )
}

export default FilterColor