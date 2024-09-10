import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeNavigation() {
    return (
        <>
            <ul className= ' bg-white  absolute w-32 top-11 left-0 text-gray-500 tracking-tight z-20'>
    
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage1'>HOMEPAGE 1</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage2'>HOMEPAGE 2</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage3'>HOMEPAGE 3</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage4'>HOMEPAGE 4</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage5'>HOMEPAGE 5</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage6'>HOMEPAGE 6</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage7'>HOMEPAGE 7</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage8'>HOMEPAGE 8</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage9'>HOMEPAGE 9</NavLink></li>
                    <hr/>
                <li className='text-[12px] h-10 grid place-items-center'><NavLink to='/homepage10'>HOMEPAGE 10</NavLink></li>
                    <hr/>
    
            </ul>
        </>
      )
}

export default HomeNavigation