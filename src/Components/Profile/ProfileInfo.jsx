import React from 'react'

function ProfileInfo() {
  return (
    <div className=' w-[80%] xs:w-[100%] sm:w-[100%]  md:w-[100%] h-[70vh] border-[1px]  border-gray-300  shadow-sm mx-auto  '>
        <div className=' mt-4 w-[95%]    mx-auto h-[50vh] '>
          <h1 className=' font-bold  text-gray-800'>Manage Address</h1>
          <div className=' h-full mt-4 w-[99%]  grid grid-cols-2 grid-rows-4 gap-4'>
            <div className=''>
                <label className=' font-semibold text-gray-800'>Fast Name</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
              </div>

              <div className=''>
                <label className=' font-semibold text-gray-800'>Last Name</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
              </div>

              <div className=''>
                <label className=' font-semibold text-gray-800'>Last Name</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='date' placeholder='Enter Your Name'/>
              </div>
              <div>
              <form action='#' onChange={(e)=>{e.preventDefault()}}> 
                      <label className=' font-semibold text-gray-800'>Gender</label><br/>
                        <select name='short' id='short' className=' cursor-pointer p-1 outline-none   border-[1px] border-gray-300 w-full rounded-[4px]   h-[38px] grid items-center text-md mt-2 text-gray-400 '>
                        <option value='defaultshortint'>Male</option>
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

              <div className=''>
                <label className=' font-semibold text-gray-800'>Email Address</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
              </div>

              <div className=''>
                <label className=' font-semibold text-gray-800'>Phone Number</label><br/>
                <input className=' border-[1px] border-gray-300 mt-2 w-full h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
              </div>

              <div className=' mt-5'>
                <button className=' grid place-items-center rounded-sm w-[130px] h-[35px] xs:w-[90px] xs:h-[25px] text-sm text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500 xs:text-xs'>SAVE CHANGE</button>
            </div>

            </div>
          </div>
      </div>

  )
}

export default ProfileInfo