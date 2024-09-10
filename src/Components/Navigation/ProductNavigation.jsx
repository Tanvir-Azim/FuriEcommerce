import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductNavigation() {
  return (
    <>
        <ul className= ' bg-white  absolute w-32  top-[150px]  left-5 tracking-tight text-gray-500 z-20'>

            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage1'>PRODUCT GRID VIEW</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage2'>PRODUCT GRID VIEW2</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage3'>PRODUCT GRID VIEW3</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage4'>PRODUCT GRID VIEW4</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage5'>PRODUCT GRID VIEW5</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage6'>PRODUCT GRID VIEW6</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center'><NavLink to='/productpage7'>PRODUCT GRID VIEW7</NavLink></li>
                <hr/>


        </ul>

    </>
  )
}

export default ProductNavigation