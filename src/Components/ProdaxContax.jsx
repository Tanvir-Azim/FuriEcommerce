import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Data from '../Product.json'
import reducer from './ProductReducer'
import FeatureProduct from './FeatureProduct'
import LatestProduct from './LatestProduct'
import { DiDart } from 'react-icons/di'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from './Header'

const initialState={
    product:[],
    featureProduct:[],
    bestSellerProduct:[],
    hotSale:[],
    miniFeatured:[],
    saleProduct:[],
    topRate:[],
    h2Banner:[],    
    feature:true,
    latest:false,
    bestSeller:false
    
}





const AppContax=createContext()
function ProdaxContax({children}) {

 
    const[state,dispath]=useReducer(reducer,initialState)
    useEffect(()=>{
        dispath({
            type:"ADD_JSON_DATA",
            payload:Data
        })
    },[])
const getFeatureData=()=>{
  dispath({
    type:"FEATURE_VALUE"
  })
}

useEffect(()=>{
        dispath({
            type:"UPDATE_FEATURE_DATA",
            payload:Data
    })
        
},[])

useEffect(()=>{
    dispath({
        type:"UPDATE_LATEST_DATA",
        payload:Data
    })
  
},[])

const getLatestData=()=>{
    dispath({
        type:"LATEST_DATA"
    })
}

const getBestSellerData=()=>{
    dispath({
        type:"BEST_SELLER"
    })
}

useEffect(()=>{
    dispath({
        type:"BEST_SELLER_PRODUCT"
    })
},[])

useEffect(()=>{
    dispath({
        type:"hotSale"
    })
},[])

useEffect(()=>{
    dispath({
        type:"miniFeatured"
    })
},[])

useEffect(()=>{
    dispath({
        type:"saleProduct"
    })
},[])

useEffect(()=>{
   
    dispath({
        type:"topRate"
    })
},[])
useEffect(()=>{
    dispath({
        type:"h2_LOADING"
    })
},[])



  return (
    <>
        <AppContax.Provider value={{...state,getFeatureData,getLatestData,getBestSellerData}}>
            {children}
        </AppContax.Provider>
    </>
   
  )
}
export const useProductContax=()=>{
    return useContext(AppContax)
}

export default ProdaxContax