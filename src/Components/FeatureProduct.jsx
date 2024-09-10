import React from 'react'
import AllProduct from './AllProduct'
import { useProductContax } from './ProdaxContax'

function FeatureProduct() {
  const{featureProduct}=useProductContax()
  return (
    <AllProduct product={featureProduct}/>
  )
}

export default FeatureProduct