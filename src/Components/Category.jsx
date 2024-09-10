import React from 'react'
import { useFilterContax } from './FilterContax'
import { useProductContax } from './ProdaxContax'
import { NavLink } from 'react-router-dom'
import Header from './Header'


function Category() {
    const{product}=useProductContax()
    const{handelCategoryButton,HomeCategory,selectCategor}=useFilterContax()
    const newCategory=product.map((curElement)=>{
        return curElement.category
    })

    const uniqueArray=[...new Set([].concat(newCategory))]
    console.log(uniqueArray)

   

    console.log(selectCategor)
  
    

  return (
    <>

    <div className=' relative z-50'>
        
        <div className=' main absolute left-[10%] z-50 shadow-md'>
            <NavLink to='/categorydata'>
           {
            uniqueArray.map((cur)=>{
                return(
                  <div className=' z-50   w-40  top-11  right-[-90px] tracking-wider text-gray-500 bg-white border-[1px]  border-t-0 border-gray-300 '>
                    <button onClick={handelCategoryButton} className={cur===selectCategor?" bg-gray-800 text-white uppercase font-[400] h-10 flex  items-center justify-center w-full mx-auto":' hover:bg-gray-200  uppercase justify-center font-[400] h-10 flex  items-center w-full mx-auto'} value={cur}>{cur}</button>
                  </div>
                )
            })
           }
           </NavLink>
          
        </div>
       

        <div>

        </div>
    </div>
    </>
  )
}

export default Category