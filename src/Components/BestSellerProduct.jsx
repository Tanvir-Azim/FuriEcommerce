import React from 'react'
import { useProductContax } from './ProdaxContax'
import AllProduct from './AllProduct'

function BestSellerProduct() {
  const{ bestSellerProduct}=useProductContax()
  return (
    <AllProduct product={bestSellerProduct}/>
  )
}

export default BestSellerProduct