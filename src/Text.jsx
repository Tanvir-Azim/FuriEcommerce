import React from 'react'

import { BrowserRouter,Routes,Route, RouterProvider, NavLink } from "react-router-dom"
import SingleProductPage from './SingleProductPage'
import SingleProductPageId from './SingleProductPageId'
import { useProductContax } from './Components/ProdaxContax'

function Text() {
   const {featureProduct}=useProductContax()
   console.log(featureProduct)
    
   
  return (
    <>
    <BrowserRouter>
    <SingleProductPage/>
        <Routes>
            <Route path='/singleproductpage' element={ <SingleProductPage/>} />
            <Route path='/singleproductpageid/:id' element={ <SingleProductPageId/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Text