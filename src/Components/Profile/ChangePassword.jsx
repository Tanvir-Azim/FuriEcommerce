import React from 'react'

function ChangePassword() {
  return (
    <div className=' w-[80%] border-[1px] border-gray-300  shadow-sm mx-auto xs:w-[100%] sm:w-[100%]  md:w-[100%]  '>
    <div className=' mt-4 w-[95%]  mx-auto h-[55vh] '>
        <p className=' font-semibold text-gray-800'>Profile Information</p>

        <div className=' mt-5 '>
          <label className=' font-semibold text-gray-800'>Current Password</label><br/>
          <input className='border-[1px] border-gray-300 mt-2 w-[60%] h-9  pl-3 outline-none rounded-sm' type='password' placeholder='Enter current password'/>
        </div>

        <div className=' mt-5 '>
          <label className=' font-semibold text-gray-800'>New Password</label><br/>
          <input className='border-[1px] border-gray-300 mt-2 w-[60%] h-9  pl-3 outline-none rounded-sm' type='password' placeholder='Enter new password'/>
        </div>

        <div className=' mt-5 '>
          <label className=' font-semibold text-gray-800'>Confirm Password</label><br/>
          <input className='border-[1px] border-gray-300 mt-2 w-[60%] h-9  pl-3 outline-none rounded-sm' type='password' placeholder='Enter confirm password'/>
        </div>

        <div className=' mt-5'>
        <button className='  grid place-items-center rounded-sm w-[130px] h-[35px] xs:w-[90px] xs:h-[25px] text-sm text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500 xs:text-xs'>SAVE CHANGE</button>
      </div>

    </div>
    </div>

  )
}

export default ChangePassword