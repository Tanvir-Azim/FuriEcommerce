import React from 'react'
import { useFilterContax } from './FilterContax'
import { FaCheck } from "react-icons/fa";

function FilterAllData() {
    const{handelTable,handelToggle,toggle}=useFilterContax()
    console.log(toggle)
    
  return (
    <div className=' w-full h-8  flex items-center justify-between'>
        <div className='w-full'>
          <button className={toggle?"h-[16px] w-[16px] bg-sky-600 grid place-items-center ":"  h-[16px] w-[16px] rounded-sm grid place-items-center  border-[1px] border-gray-700"} onClick={()=>{
            handelTable() 
            handelToggle()}} >
          {toggle &&<FaCheck className=" text-white text-xs "/>}
          </button>
        </div>
      </div>

  )
}

export default FilterAllData