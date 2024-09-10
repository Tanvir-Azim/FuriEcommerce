import React from 'react'

function HeroSectionContentPart() {
  return (
    <>
        <div className=' z-0 w-[80%] mt-[10vh] h-[73vh] md:mt-[60vh] xs:mt-[38vh] sm:mt-[40vh] lg:mt-[75vh] xl:mt-[80vh] 2xl:mt-[80vh]  grid grid-cols-[1fr,1fr,1fr] grid-rows-1 md:grid-cols-[1fr,1fr] sm:grid-cols-[1fr] sm:grid-rows-[1fr,1fr,1fr] xs:grid-cols-[1fr] xs:grid-rows-[1fr,1fr,1fr] m-auto '>
            <div className='  grid place-items-center sm:mt-[10px]'>
                <img src='/images/homemini1.jpeg' className=' lg:h-[400px]  md:h-[438px] sm:w-[300px] lg:mr-8 xs:w-[300px]  xl:w-[330px] '/>
            </div>
            <div className=' w-full grid place-items-center md:w-[410px] '>
                
                <div>
                    <img src='/images/homemini2.PNG' className=' h-[200px] mt-[10px] lg:h-[188px] md:h-[170px] md:w-[350px]  sm:w-[300px] xs:w-[300px]    xl:w-[280px] xl:h-[160px] '/>
                </div>
                <div>
                    <img src='/images/homemini3.jpeg' className='  w-[350px] opacity-100 lg:h-[188px] md:h-[170px] sm:w-[300px] sm: mt-4  xs:w-[300px]  xl:mt-[-30px] xl:w-[280px] xl:h-[160px] lg:mt-[-95px]'/>
                </div>
                
            </div>
            <div className='0 md:hidden h-full w-full grid place-items-center'>
                
           
                <img src='/images/homemini4.PNG' className='lg:h-[400px]  sm:w-[300px] sm:mt-5 xs:mt-4 lg:ml-8 xs:w-[300px] xl:w-[330px]  '/>

            </div>
        </div>

        
    </>
  )
}

export default HeroSectionContentPart