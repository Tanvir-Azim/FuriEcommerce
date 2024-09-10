import React from 'react'
import BlogData from '../BlogData'
import { useFilterContax } from '../FilterContax'
import Loding from '../Loding'
import Footer from '../Footer'
import Header from '../Header'

function Blog() {
  const{blogLoading}=useFilterContax()
  return (
    <>
    {
      blogLoading?<Loding/>:<div>
      <Header/>
      <div className=' w-full'>
          <div className=' w-full h-[28vh bg-[#e2dfdf]'>
            <div className=' w-ful flex h-[28vh] items-center justify-center'>
              <div className='  w-[300px] h-[25vh]  grid place-items-cente'>
               <img className=' h-[25vh] ' src="/images/HomePage1/img13.jpg"/>
              </div>
              <div className=' w-[900px] h-[25vh] xs:w-[190px] grid place-content-center  '>
                  <h1 className=' text-5xl font-[700] text-gray-800 tracking-wide xs:text-3xl'>BLOG LIST FULL WITH</h1>

              </div>
            </div>
          </div>

          <div className='w-full'>
                <BlogData/>
          </div>
    </div>
    <Footer/>
    </div>
    }
 
    </>
  )
}

export default Blog