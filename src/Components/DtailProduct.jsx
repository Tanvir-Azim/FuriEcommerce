import React from 'react'
import { NavLink} from 'react-router-dom'
import Star from './Star'
import { PiShareNetworkFill } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Header from './Header';
import CartData from './CartData';
import { useCardContax } from './CartContax'
import { useProductContax } from './ProdaxContax';
import Footer from './Footer';


function DtailProduct() {
  const {product}=useProductContax()
  const{viewProduct, AddToWish}=useCardContax()
 


  const singleproduct = product.filter((curElement)=>{
    return curElement.id === viewProduct.id
  })



  
  const images=singleproduct.map((curElement)=>{
    return curElement.images
  })

console.log(images[0])

const Wraper = styled.section`
.carousel .control-arrow{
  background-color:gray;
  width: 20px;
  height: 80px;
  margin-top: -43px;
  padding: 2px;
  

}

.control-dots{
  visibility: hidden;

}



`

  return (
    <>
    <Header/>
     <div className=' w-[100%] h-[90vh] b-red-300 grid grid-cols-2 grid-rows-1 md:grid-cols-[500px] md:grid-rows-[500px 500px]   md:h-[250vh] md:flex md:flex-col   md:items-center sm:h-[240vh] sm:flex sm:flex-col   sm:items-center xs:h-[240vh] xs:flex xs:flex-col   xs:items-center'>
        <div className='bg-white'>
        <div  className=''></div>
        <div className=' bg-gren-200 grid place-items-center  h-[700px]'>
         <div className=' bg-ornge-900 grid place-items-center h-[600px] w-[500px] md:w-[500px] sm:w-[500px] xs:w-[400px] '>



          
          
          
         <Wraper>
            <Carousel className=' w-[400px] h-[600px] ml-4'
            showArrows={false}
            >
              {
               
               images[0].map((curEl)=>{
                 return <img src={ curEl.url}/>})  
             }
 
            

            </Carousel>
            </Wraper>
         
         
            </div>
          

         
        

        
         
        </div> 
        </div>
        <div className=' w-full h-full bg-orange-30 md:grid  md:place-items-center sm:grid  sm:place-items-center xs:grid  xs:place-items-center md:mt-[50px] sm:mt-[50px] xs:mt-[50px]  '>
          <div className=' w-[70%] h-full bg-white md:w-[500px] md:grid md:place-items-center sm:w-[410px] sm:grid sm:place-items-center xs:w-[410px] xs:grid xs:place-items-center  '>
            {
              
              singleproduct.map((curElement)=>{
              const {id,name,price,reviews,share,stars,stock,like,description,comment,colors,category ,description2,discount,available}=curElement
              return(
                <>
                <div className=' '>
                    <div className=' w-[200px] h-[50px] text-gray-500 flex items-center '><h1 className='hover:text-red-500 cursor-pointer'>{category}</h1> {'>'}Product</div>
                   </div>
                    <h1 className=' text-3xl uppercase tracking-wider font-semibold '>{name}</h1>
                    <div className=' mt-3'>
                     <p className=' flex items-center'><Star star={stars}/><span className=' ml-2 text-gray-500'>Reviews({reviews})</span></p>
                    </div>

                    <div className=' w-[90%] h-14  flex items-center text-gray-500 cursor-pointer '>
                        <div className=' flex w-[100px] h-full items-center hover:text-red-500'><PiShareNetworkFill className=' text-[19px] mr-2'/> <p className=' text-[13px]'>SHARE</p></div>
                        <div className=' flex w-[100px] h-full items-center  justify-center hover:text-red-500'><MdCompareArrows className=' text-[19px] mr-2 '/> <p className=' text-[13px]'>COMPARE</p></div>
                        <NavLink to='/heart'>
                          <div className=' flex w-[150px] h-full items-center  justify-center hover:text-red-500'><IoMdHeart className=' text-[19px] mr-2 '/><p className=' text-[13px]' onClick={()=>{AddToWish(curElement)}}>TO WISH LIST</p> </div>
                        </NavLink>
                        
                    </div>
                    <hr className=' text-gray-500'/>
                    <div className=' w-full h-32 flex items-center'>
                      <p className=' text-gray-500'>{description}</p>
                    </div>

                    <div className=' w-full h-32 flex items-center'>
                      <p className=' text-gray-500'>{description2}</p>
                    </div>
                    <hr className=' text-gray-500'/>

                    <div className=' w-full h-[60px] flex items-center'>
                      <div className=' flex items-center'>
                            <TbCurrencyTaka className=' text-3xl'/>
                            <p className='  text-2xl'>{price}</p>
                            <p className=' line-through text-[22px] font-thin ml-2 text-gray-500'>{discount}</p>

                      </div>
                    </div>

                    <div>
                          <CartData product={curElement}/>
                    </div>
                </>
              )

    })
            }
          </div>
        </div>
     </div>

     <div className=' w-[80%] h-auto mx-auto  '>
            <h1 className=' font-bold'>DESCRIPTION</h1>
      <div className=' mt-4'>
      {
        singleproduct.map((curEl)=>{
          return(
            <div>
              <p className=' text-gray-500'>{curEl.description}</p>
            </div>
          )
        })
      }
      </div>
      
          <div className=' mt-4 flex items-center'>
          {
            singleproduct.map((curEl)=>{
              return(
                <div>
                    <p className=' font-bold'>REVIEWS ({curEl.reviews})</p>
                </div>
                )
             })
          }
        </div>

      <div className=' flex w-full h-10  items-center gap-5'>

        <div className=' h-10 flex items-center'>
          {
          singleproduct.map((curEl)=>{
            return(
              <div>
                <Star star={curEl.stars}/>
              </div>
            )
          })
         }

        </div>
         <div>
            <p className=' font-bold text-gray-500'> John Wick</p>
          </div>

        <div>
          <p className=' text-sm text-gray-500'>09:10 Nov, 19 2016</p>
        </div>
      </div>
      <div>
        <p className='text-gray-500 text-justify'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
      </div>


      <div className=' flex w-full h-10  items-center gap-5 mt-5'>

        <div className=' h-10 flex items-center'>
          {
            singleproduct.map((curEl)=>{
             return(
              <div>
                <Star star={curEl.stars}/>
              </div>
              )
            })
          }

        </div>

        <div>
          <p className=' font-bold text-gray-500'> John Wick</p>
        </div>

        <div>
          <p className=' text-sm text-gray-500'>09:10 Nov, 19 2016</p>
        </div>
      </div>

      <div>
      <p className='text-gray-500 text-justify'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
      </div>

      <div className=' mt-4 w-[88%] mx-auto'>
                    <from>
                      <input className=' border-[1px] border-black w-[100%] h-10 px-8 rounded-full outline-none' type='text' placeholder='Name'/>
                      <input className=' border-[1px] border-black w-[100%] h-10 px-8 rounded-full outline-none mt-2' type='emain'placeholder='Email'/>
                      <input className=' border-[1px] border-black w-[100%] h-20 px-8 rounded-2xl outline-none mt-2'  type='text' placeholder='Reviews'/>
                      <button className=' mt-3 w-20 h-9 bg-red-500 text-white rounded-full text-sm hover:border-[1px] hover:border-red-500  hover:bg-white hover:text-red-500'>SENT </button>
                    </from>
                  </div>
     
      
     </div>

     <Footer/>
       
    </>
   
  )
}

export default DtailProduct