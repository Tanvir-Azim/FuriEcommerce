import React from 'react'

function ManageAccount() {
  return (
    <div className=' w-[100%]  h-64 xs:h-[80vh] sm:h-[80vh]  flex items-center justify-evenly xs:flex-col sm:flex-col'>
        <div className=' w-[30%] xs:w-full sm:w-full  h-44 border-[1px] shadow-sm hover:shadow-lg flex  justify-center flex-col'>
            <div className=' flex justify-between'>
                <h1 className=' font-semibold ml-3 lg:text-[15px]'>Personal Profile</h1>
                <p className=' mr-3 text-red-500 cursor-pointer'>Edit</p>
            </div>
           
            <h2 className=' ml-3 mt-3 font-[500] lg:text-[13px] '>Tanvir Azim</h2>
            <p className=' ml-3 mt-1 text-gray-700 lg:text-[13px]'>tanvirazim@gmail.com</p>
            <p className=' ml-3 text-gray-700 lg:text-[13px]'>01857165115</p>

        </div>

        <div className=' w-[30%] h-44 border-[1px] xs:w-full sm:w-full  shadow-sm hover:shadow-lg flex  justify-center flex-col xs:mt-5 sm:mt-5 '>
            <div className=' flex justify-between'>
                <h1 className=' font-semibold ml-3 lg:text-[15px]'>Shipping Address</h1>
                <p className=' mr-3 text-red-500 cursor-pointer'>Edit</p>
            </div>
           
            <h2 className=' ml-3 mt-3 font-[500] lg:text-[13px]'>Tanvir Azim</h2>
            <p className=' ml-3 mt-1 text-gray-700 text-sm lg:text-[13px]'>3891 RanchviewDr</p>
            <p className=' ml-3 text-sm lg:text-[13px] text-gray-700'>Rocjardspm.Califora</p>
            <p className=' ml-3 text-sm mt-1 lg:text-[13px] text-gray-700'>(123) 587-329</p>   

        </div>

        <div className=' w-[30%] h-44 border-[1px] xs:w-full sm:w-full  shadow-sm hover:shadow-lg flex  justify-center flex-col xs:mt-5 sm:mt-5 '>
            <div className=' flex justify-between'>
                <h1 className=' font-semibold ml-3 lg:text-[15px]'>Manage Address</h1>
                <p className=' mr-3 text-red-500 cursor-pointer'>Edit</p>
            </div>
           
            <h2 className=' ml-3 mt-3 font-[500] lg:text-[13px]'>Tanvir Azim</h2>
            <p className=' ml-3 mt-1 text-gray-700 text-sm lg:text-[13px]'>3891 RanchviewDr</p>
            <p className=' ml-3 text-sm lg:text-[13px] text-gray-700'>Rocjardspm.Califora</p>
            <p className=' ml-3 text-sm mt-1 lg:text-[13px] text-gray-700'>(123) 587-329</p>   

        </div>
    </div>
  )
}

export default ManageAccount