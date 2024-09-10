import React from 'react'
import { NavLink } from 'react-router-dom'

function ContactNavation() {
  return (
    <>
        <ul className= ' bg-white  absolute w-32  top-[315px]  left-0 z-10 tracking-tight text-gray-500 '>

            <li className='text-[11px] font-[400] h-10 grid  place-items-center w-full  '><NavLink to='/contactpage1'>CONTACT</NavLink></li>
                <hr/>
            <li className='text-[11px] font-[400] h-10 grid place-items-center w-full  '><NavLink to='/contactpage2'>CONTACT 2</NavLink></li>
                <hr/>
        </ul>
    </>
  )
}

export default ContactNavation