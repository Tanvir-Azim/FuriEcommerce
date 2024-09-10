import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './data.json'
//import Data from './Product.json'

function SingleProductPageId() {




  
 
  const{id}=useParams()

  const singleproduct = Data.filter((curElement)=>{
    return curElement.id === id
  })

    
  
   
  
   const miniImg=singleproduct.map((curElement)=>{
    return( curElement.images)
   })

   const singleImg = miniImg.map((curElement)=>{
    return curElement
   }
  )

  console.log(singleImg)
   
       
   




    
   
  return (
    <>
      {
        miniImg.map((curElement)=>{
          const{img}=curElement
          console.log(img)
        })
      }
      
    </>
  )
}

export default SingleProductPageId