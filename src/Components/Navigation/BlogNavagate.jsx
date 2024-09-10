import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogNavagate() {
  return (
    <>
        <ul className= ' bg-white  absolute w-40  top-[195px]  left-5 z-10 tracking-tight text-gray-500 '>

            <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4 '><NavLink to='/blogpage1'>BLOG FULLWIDTH PAGE</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4 '><NavLink to='/blogpage2'>BLOG RIGHT SIDEBAR2</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4'><NavLink to='/blogpage3'>BLOG POSTLIST MASONRY</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 flex items-center w-full  ml-4'><NavLink to='/blogpage4'>BLOG POST DETAIL SIDEBAR</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 flex items-center w-full ml-4'><NavLink to='/blogpage5'>BLOG POST DETAIL FULL WIDTH</NavLink></li>
                <hr/>
        </ul>
    </>
  )
}

export default BlogNavagate