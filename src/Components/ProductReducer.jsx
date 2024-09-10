

const ProductReducer=(state,action)=>{

    if(action.type === "ADD_JSON_DATA"){
        return{
            ...state,
            product:action.payload
        }
    }


    if(action.type==="FEATURE_VALUE"){
        return{
            ...state,
            feature:true,
            bestSeller:false,
            latest:false
        }
    }

    if(action.type==="LATEST_DATA"){
        return{
            ...state,
            feature:false,
            bestSeller:false,
            latest:true
        }
    }
    if(action.type === "BEST_SELLER"){
        return{
            ...state,
            feature:false,
            latest:false,
            bestSeller:true
        }
    }

    if(action.type === "UPDATE_FEATURE_DATA"){
        const featureProduct = state.product.filter((curElement)=>{
            return curElement.featured === true
        })

       
        return{
            ...state,
            featureProduct:featureProduct
        }
    }

    if(action.type === "UPDATE_LATEST_DATA"){
        const latestProduct = state.product.filter((curElement)=>{
            return curElement.latest === true  
        })

        return{
            ...state,
            latestProduct:latestProduct
        }
    
        
    }

    if(action.type === "BEST_SELLER_PRODUCT"){
        const bestSeller=state.product.filter((curElement)=>{
            return curElement.bestseller === true
        })
     

        return{
            ...state,
            bestSellerProduct:bestSeller
        }
    }

    if(action.type === "hotSale"){
        const hotSale = state.product.filter((curElement)=>{
            return curElement.hotsale === true
        })
 
        return{
            ...state,
            hotSale:hotSale
        }
    }

    if(action.type === "miniFeatured"){
        const miniFeatured = state.product.filter((curElement)=>{
            return curElement.featuredmini === true
        })
   
        
        return{
            ...state,
            miniFeatured:miniFeatured
        }
    }

    if(action.type === "saleProduct"){
        const saleProduct = state.product.filter((curElement)=>{
            return curElement.saleProduct === true
        })

        return{
            ...state,
            saleProduct:saleProduct
        }
    }

    if(action.type === "topRate"){
        const  topRate = state.product.filter((curElement)=>{
            return curElement.toprate === true      
        })
   
        return{
            ...state,
            topRate:topRate,
        }
     
    }

    if(action.type === "h2_LOADING"){
        const  h2banner = state.product.filter((curElement)=>{
            return curElement.h2banner === true  
                
        })
        console.log(h2banner)
            return{
                ...state,
                h2Banner:h2banner
            }
    }
 
    return state;
}
    
   


   

export default ProductReducer
  