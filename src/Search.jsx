import React from 'react'
import Header from './Components/Header'
import { useFilterContax } from './Components/FilterContax'
import SearchProduct from './Components/SearchProduct'
import { NavLink } from 'react-router-dom'
import Footer from './Components/Footer'


function Search() {
  const{getInputValue,getSearchValue,filters:{category,searchResult},searchProduct}=useFilterContax()
  console.log(searchResult)


  return (
    <>
    <Header/>
    <div className=' w-full h-full'>

        <div>
            <SearchProduct product={searchProduct}/> 
        </div>
    </div>
    <Footer/>

    </>
  )
}

export default Search