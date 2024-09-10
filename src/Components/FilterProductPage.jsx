import React from 'react'
import Header from '../Header'
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import GridView from '../GridView';
import ListView from '../ListView';
import { useFilterContax } from '../FilterContax';

function ProductPage1() {
  const{ActiveGrid,ActiveList,gridview,listview}=useFilterContax()
  return (
    <>
          <Header/>
       
      <div className='w-[75%] h-[60vh] bg-red-300 mx-auto grid grid-cols-[1fr,3fr]'>
          <div className=' bg-gray-500'>
            filter Section fsd  
          </div>
          <div className=' bg-green-200 w-full h-full'>
              <div className=' w-full h-14 bg-red-300 flex justify-between items-center'>
                  <div>
                    <button>fsdljfk</button>
                  </div>
                  <div className=' flex w-24 h-full bg-green-300 items-center justify-evenly'>
                    <div className=' h-8 w-9 grid place-items-center border-[1px] border-gray-400'>
                      <BsFillGridFill onClick={()=>{ActiveGrid()}} className=' text-2xl text-gray-800'/>
                    </div>
                    <div className=' h-8 w-9 grid place-items-center border-[1px] border-gray-400'>
                      <BsList  onClick={()=>{ActiveList()}} className=' text-2xl text-gray-800'/>
                    </div>
                  </div> 
              </div>
              <div>
                {gridview&&<GridView/>}
                {listview&&<ListView/>}
              </div>
          </div>
      </div>
    </>
  )
}

export default ProductPage1