import React from 'react'

function GridView({product}) {
  const a=Array.from({length:(product)},(v,i)=>{
    return v
  })
  console.log(a)
  return (
    <h1>Helllow</h1>
  )
}

export default GridView