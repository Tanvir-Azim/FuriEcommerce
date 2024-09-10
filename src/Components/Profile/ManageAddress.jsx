import React from 'react'

function ManageAddress() {
  return (
    <div className=' w-[80%] h-[70vh] border-[1px] border-gray-300  shadow-sm mx-auto xs:w-[100%] sm:w-[100%]  md:w-[100%]   '>
        <div className=' mt-4 w-[95%] mx-auto h-[40vh] '>
          <h1 className=' font-bold text-gray-800'>Manage Address</h1>
          <div className=' h-full mt-4 w-[99%]  grid grid-cols-2 grid-rows-3 gap-4'>
            <div className=''>
              <label className=' font-semibold text-gray-800'>Name</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
              </div>

              <div>
                <label className=' font-semibold text-gray-800'>Phone Number</label><br/>
                <input className=' border-[1px] border-gray-300  mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='number' placeholder='Enter Your Name'/>
              </div>

              <div>
              <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label className=' font-semibold text-gray-800'>Cauntry</label><br/>
                        <select name='short' id='short' className=' cursor-pointer p-1 outline-none   border-[1px] border-gray-300 w-full rounded-[4px]   h-[38px] grid items-center text-md mt-2 text-gray-400 '>
                        <option value='defaultshortint'>Bangladesh</option>
                          <option value='#' disabled></option>
                          <option value='lowest'>India</option>
                          <option value='#' disabled></option>
                          <option value='heist'>Pakistan</option>
                          <option value='#' disabled></option>
                          <option value='a-z'>Nepal</option>
                          <option value='#' disabled></option>
                          <option value='z-a'>China</option>
                        </select>

                    </form>
              </div>

              <div>
              <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label className=' font-semibold text-gray-800'>Region</label><br/>
                        <select name='short' id='short' className=' cursor-pointer p-1 outline-none   border-[1px] border-gray-300 w-full rounded-[4px]   h-[38px] grid items-center text-md mt-2 text-gray-400 '>
                        <option value='defaultshortint'>Dhaka</option>
                          <option value='#' disabled></option>
                          <option value='lowest'>Khulna</option>
                          <option value='#' disabled></option>
                          <option value='heist'>Jashore</option>
                          <option value='#' disabled></option>
                          <option value='a-z'>Kushtia</option>
                          <option value='#' disabled></option>
                          <option value='z-a'>Maherpur</option>
                        </select>

                    </form>
              </div>

              <div>
              <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label className=' font-semibold text-gray-800'>City</label><br/>
                        <select name='short' id='short' className=' cursor-pointer p-1 outline-none   border-[1px] border-gray-300 w-full rounded-[4px]   h-[38px] grid items-center text-md mt-2 text-gray-400 '>
                        <option value='defaultshortint'>Rajshahi</option>
                          <option value='#' disabled></option>
                          <option value='lowest'>Khulna</option>
                          <option value='#' disabled></option>
                          <option value='heist'>Jashore</option>
                          <option value='#' disabled></option>
                          <option value='a-z'>Kushtia</option>
                          <option value='#' disabled></option>
                          <option value='z-a'>Maherpur</option>
                        </select>

                    </form>
              </div>

              <div>
              <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label className=' font-semibold text-gray-800'>Area</label><br/>
                        <select name='short' id='short' className=' cursor-pointer p-1 outline-none   border-[1px] border-gray-300 w-full rounded-[4px]   h-[38px] grid items-center text-md mt-2 text-gray-400 '>
                        <option value='defaultshortint'>Jashore Sadar</option>
                          <option value='#' disabled></option>
                          <option value='lowest'>Khulna</option>
                          <option value='#' disabled></option>
                          <option value='heist'>Jashore</option>
                          <option value='#' disabled></option>
                          <option value='a-z'>Kushtia</option>
                          <option value='#' disabled></option>
                          <option value='z-a'>Maherpur</option>
                        </select>

                    </form>
              </div>
          </div>
          <div>
                <label className=' font-semibold text-gray-800'>Phone Number</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-[99%] r h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
           </div>

              <div className=' mt-5'>
                <button className=' grid place-items-center rounded-sm w-[130px] h-[35px] text-sm xs:w-[90px] xs:h-[25px]  text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500 xs:text-xs'>SAVE CHANGE</button>
            </div>   
        
           
        </div>
    </div>
  )
}

export default ManageAddress