import React from 'react'

function ProductData(props) {
  
  console.log(props.image)
  return (
    <>
    <div>
      <img src={props.image} className='w-[300px] h-[270px]'/>
      </div>
        
    </>              
  )
}

export default ProductData