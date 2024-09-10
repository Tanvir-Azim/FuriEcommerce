import React from 'react'
import { FaList } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useFilterContax } from './FilterContax';

function Short() {
    const{gridview,listview,ActiveGrid,ActiveList,handelSeleteBox,shorting_value}=useFilterContax()
    console.log(shorting_value)
  return (
    <>
          <div className=' w-[200px] h-full grid place-items-center'>
                    <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label htmlFor='short'>
                        <select name='short' id='short' value={shorting_value} onChange={handelSeleteBox} className=' cursor-pointer p-1 outline-none bg-[rgb(237,76,76)] text-white rounded-[4px]   h-[38px] grid items-center text-md '>
                        <option value='defaultshortint'>Default Shorting</option>
                          <option value='#' disabled></option>
                          <option value='lowest'>Price(lowest)</option>
                          <option value='#' disabled></option>
                          <option value='heist'>Price(height)</option>
                          <option value='#' disabled></option>
                          <option value='a-z'>Price(a-z)</option>
                          <option value='#' disabled></option>
                          <option value='z-a'>Price(z-a)</option>
                        </select>
                      </label>
                    </form>

                  </div>

                     <div className=' flex w-24 h-full  items-center justify-evenly cursor-pointer'>
                        <div className={ gridview?" text-white bg-red-500 h-8 w-9 grid place-items-center rounded-[3px]":"h-8 w-9 grid place-items-center cursor-pointer border-[1px] border-gray-400"}>
                            <BsFillGrid1X2Fill onClick={()=>{ActiveGrid()}}/>
                        </div>
                         <div className={ listview?"  text-white bg-red-500 h-8 w-9 grid place-items-center rounded-[3px]":"h-8 w-9 grid place-items-center border-[1px] border-gray-400 cursor-pointer"}>
                          <FaList  onClick={()=>{ActiveList()}} className=' '/>
                        </div>
                     </div> 
    </>
  )
}

export default Short