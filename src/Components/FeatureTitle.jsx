import React from 'react'
import { useProductContax } from './ProdaxContax'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function FeatureTitle() {
    const{getFeatureData,getLatestData,getBestSellerData,feature,latest,bestSeller}=useProductContax()
    const Wraper = styled.section`


    `
  return (
    <>
    <Wraper>
          <div className='w-[80%] m-auto xs:mt-[110vh] sm:mt-[111vh] sm:text-[12px] xs:text-[12px] '>
            <div className='w-[300px] xs:mx-auto h-10 flex place-items-center justify-around  font-bold text-md text-gray-500  cursor-pointer  '>
               <button onClick={()=>{getFeatureData()}} className={feature&&" grid place-items-center hover:text-black border-b-2 border-red-500 text-black"}>FEATURED</button><div className=' h-5 w-1 xs:h-3 bg-gray-500 '></div>
               <button onClick={()=>{getLatestData()}} className={latest&&"  grid place-items-center hover:text-black border-b-2 border-red-500 text-black"}>LATEST</button><div className=' h-5 w-1 xs:h-3  bg-gray-500'></div>
               <button onClick={()=>{getBestSellerData()}} className={bestSeller&&"    grid place-items-center  hover:text-black border-b-2 border-red-500 text-black "}>BEST SELLER</button>
            </div>
          </div>
          </Wraper>
    </>
  )
}

export default FeatureTitle