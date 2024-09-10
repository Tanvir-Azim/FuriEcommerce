import React from 'react'
import { useProductContax } from './ProdaxContax'
import AllProduct from './AllProduct'

function LatestProduct() {
  const{latestProduct}=useProductContax()
  return (
    <AllProduct product={latestProduct}/>
  )
}

export default LatestProduct