import React from 'react'

function UserProfile() {
  return (
    <div className=' w-[80%] border-[1px] border-gray-300  shadow-sm mx-auto xs:w-[100%] sm:w-[100%]  md:w-[100%]  '>
      <div className=' mt-4 w-[95%]  mx-auto h-[55vh] '>
        <p className=' font-semibold text-gray-800'>Profile Information</p>
        <div className=' w-28 h-28 rounded-full mt-4 bg-gray-200 rounded-ful flex-col flex items-center  justify-center'>
          <p className=' text-xs  '>Drag & Drop</p> 
          <p className=' text-xs'>Your File or Browse</p>
        </div>

        <div className=' mt-5'>
          <label className=' font-semibold text-gray-800'>Name</label><br/>
          <input className=' border-[1px] border-gray-300 mt-2 w-[60%] h-9  pl-3 outline-none rounded-sm' type='text' placeholder='Enter Your Name'/>
        </div>

        <div className=' mt-5 '>
          <label className=' font-semibold text-gray-800'>Email</label><br/>
          <input className='border-[1px] border-gray-300 mt-2 w-[60%] h-9  pl-3 outline-none rounded-sm' type='emaile' placeholder='admin@mail.com'/>
        </div>

      <div className=' mt-5'>
        <button className=' grid place-items-center rounded-sm w-[130px] h-[35px] xs:w-[90px] xs:h-[25px] text-sm text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500 xs:text-xs'>SAVE CHANGE</button>
      </div>
      </div>


  
    
    </div>
  )
}

export default UserProfile