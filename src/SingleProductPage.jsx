import React, { useEffect, useState } from 'react'
import Data from './data.json'
import { NavLink } from 'react-router-dom'

function SingleProductPage() {

    const [value,SetValue]=useState([])

    useEffect(()=>{
            SetValue(Data)
    },[])

    const feature = value.filter((curElemet)=>{
        return curElemet.featured === true
        
    })

    console.log(feature)
  return (
    <>
        {
            feature.map((curElement)=>{
            
                return(
                <NavLink to={`/singleproductpageid/${curElement.id}`}> 
                    <img src={curElement.image}/>
                </NavLink>
            )}
            )
        }
    </>
  )
}

export default SingleProductPage