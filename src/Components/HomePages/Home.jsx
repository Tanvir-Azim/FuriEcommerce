import React, { useState } from 'react'
import HeroSection from '../HeroSection'
import HeroSectionContentPart from '../HeroSectionContentPart'
import FeatureProduct from '../FeatureProduct'
import FeatureTitle from '../FeatureTitle'
import { useProductContax } from '../ProdaxContax'
import LatestProduct from '../LatestProduct'
import BestSellerProduct from '../BestSellerProduct'
import SlickCarousel from '../SlickCarousel'
import ProductList from '../ProductList'
import Header from '../Header'
import { useFilterContax } from '../FilterContax'
import Loding from '../Loding'
import Footer from '../Footer'
import Test from '../Test'




function Home() {
  const{feature,latest,bestSeller,bestSellerProduct}=useProductContax()
  const{loading,homeLoading}=useFilterContax()

if(loading){
  return(
    <Loding/>
  )
}
  return (
    <>


      {homeLoading ?<Loding/>:<div>
      <Header/>
        <HeroSection/>
        <HeroSectionContentPart/>
        <FeatureTitle/>
       
       {feature && <FeatureProduct/> }
       {latest && <LatestProduct/>}
       {bestSeller && <BestSellerProduct/>}
       <SlickCarousel miniproduct={bestSellerProduct}/>
       <ProductList/>
       <Footer/>

       </div>}



    </>
  )
}

export default Home