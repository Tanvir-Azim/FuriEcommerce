import React from 'react'
import MiniProduct from './MiniProduct'
import { useProductContax } from './ProdaxContax'

function ProductList() {
    const{miniFeatured,hotSale, topRate,saleProduct}=useProductContax()
    console.log(saleProduct)

  return (
    <MiniProduct miniFeatured={miniFeatured} hotSale={hotSale} topRate={topRate} saleProduct={saleProduct}/>
  )
}

export default ProductList