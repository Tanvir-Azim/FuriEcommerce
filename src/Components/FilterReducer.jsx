import { AiFillLayout } from "react-icons/ai"


function FilterReducer(state,action) {
    if(action.type === "ACTIVE_GRID"){
        return{
            ...state,
            gridview:true,
            listview:false
        }
    }
    if(action.type === "ACTIVE_LIST"){
        return{
            ...state,
            gridview:false,
            listview:true,
        }
    }

 if(action.type ==='LOAD_PRODUCT'){
 
    return{
        ...state,
        filterProduct:[...action.payload],
        all_product:[...action.payload]

        
    }
    
 }
 if(action.type ==="HANDEL_TABLE"){
    const category=action.payload

    return{
        ...state,
        filters:{
            ...state.filters,
            category:category
        }
    }
 }
if(action.type ==="GET_COLORS"){
        let getColor=state.all_product.map((curColor)=>{
        return curColor.colors
      })
      console.log(getColor)
    return{
        ...state,
        color:getColor
    }

    
}


if(action.type === "FIND_COLOR") {
    
    const colorcode = action.payload

          return{
            ...state,
            filters:{
                ...state.filters,
                color:colorcode
            }
           
          }   
}

if(action.type ==="HANDEL_COMPANY"){
    const Company=action.payload
    return{
        ...state,
        filters:{
            ...state.filters,
            company:Company
        }
    }
}

if(action.type ==="HANDEL_SELLETEBOX"){
    const seleteBox=action.payload

    return{
        ...state,
        shorting_value:seleteBox
    }
}
 
if(action.type==="HANDEL_RANGE"){
    let Range=action.payload
    return{
        ...state,
        filters:{
            ...state.filters,
            price:Range
        }
    }
}

if(action.type ==="NEW_FILTER"){
    const{category,color,company,maxPrice,price}=state.filters
    const all_filter=action.payload
    let tempFilterProduct = [...all_filter]
    

    console.log(maxPrice)
    if(category){
        tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return(curElement.category === category)
        })
    }

    if(color){
        console.log(color)
        tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.colors.includes(color)
        })
    }

    if(company){
        tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.company===company
        })
    }
    if(price){
        tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.price<=price
        })

    }



        

   
    return{
        ...state,
        filterProduct:tempFilterProduct,
    }
    

   
}

if(action.type === "GET_MAX_PRICE"){
const price = action.payload
let Maxprice=price.map((cur)=>{
    return cur.price
})

const Max=Math.max(...Maxprice)
let Min = Math.min(...Maxprice)
Min-= 1000
console.log(Min)

return{
    ...state,
    filters:{
        maxPrice:Max,
        minPrice:Min
    }
}
}

if(action.type === "UPDATE_SHORTIG"){
    const all_Shorting = action.payload
    let tempShortingProduct=[...all_Shorting]
    
    if(state.shorting_value === "defaultshorting"){
        return tempShortingProduct
    }
    if(state.shorting_value === 'a-z'){
        tempShortingProduct=tempShortingProduct.sort((a,b)=>a.name.localeCompare(b.name))
    }

    if(state.shorting_value === 'z-a'){
        tempShortingProduct=tempShortingProduct.sort((a,b)=>b.name.localeCompare(a.name))
    }

    if(state.shorting_value === 'lowest'){
        tempShortingProduct=tempShortingProduct.sort((a,b)=>a.price-b.price)
    }
    if(state.shorting_value === 'heist'){
        tempShortingProduct=tempShortingProduct.sort((a,b)=>b.price-a.price)
    }
   return{
    ...state,
    filterProduct:tempShortingProduct
   }
        
}

if(action.type==="SET_SEARCH_VALUE"){
    const data = action.payload

    const updateSearch = state.all_product.map((curElement)=>{
        return curElement.name
    })
    return{
        ...state,
        filters:{
            ...state.filters,
            searchResult:data,
           
        },
        searchingSagetion:updateSearch,
    }
}

if(action.type==="setAllData"){
    const all_Shorting = action.payload
    const tempProduct = [...all_Shorting]
    console.log(tempProduct)
    const{category,color,company,maxPrice,price,searchResult}=state.filters
    let searchTemp = tempProduct.filter((cur)=>{
        return cur.category.includes(searchResult)
        
    })
    console.log(searchTemp)
    return{
        ...state,
        searchProduct:searchTemp,

    }
}

if(action.type==="HOME"){
    return{
        ...state,
        home:true,
        about:false,
        contact:false,
        product:false,
        blog:false,
        pages:false,
    }
}


if(action.type==="ABOUT"){
    return{
        ...state,
        home:false,
        about:true,
        contact:false,
        product:false,
        blog:false,
        pages:false,
    }
}

if(action.type==="CONTACT"){
    return{
        ...state,
        home:false,
        about:false,
        contact:true,
        product:false,
        blog:false,
        pages:false,
    }
}



if(action.type==="BLOG"){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        product:false,
        blog:true,
        pages:false,
    }
}


if(action.type==="PRODUCTS"){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        product:true,
        blog:false,
        pages:false,
    }
}


if(action.type==="PAGES"){
    return{
        ...state,
        home:true,
        about:false,
        contact:false,
        product:false,
        blog:false,
        pages:true,
    }
}

if(action.type === "HANDEL_CATEGORY"){
    const {value,product} = action.payload
    const updateCategory = product.filter((curElement)=>{
       return curElement.category === value
    })

    
    return{
        ...state,
        HomeCategory:updateCategory,
        selectCategor:value,
    }

}


if(action.type ==="SAGETIONS"){
    const{e,product}=action.payload

    let searchTemp = product.filter((cur)=>{
        return cur.name.includes(e)
        
    })
    return{
        ...state,
        searchProduct:searchTemp,
        sagetionList:e,
        searchBoxValue:false

    }
}

if(action.type ==="REMOVE_SAGETION"){
    return{
        ...state,
        searchingSagetion:[],
    }
}

if(action.type ==="PROFILE"){

    return{
        ...state,
        Profile:true,
        Manage:false,
        Password:false,
        ProfileWish:false,
        ManageAc:false,
        profileinfo:false


    }
}
if(action.type === "MANAGE"){

    return{
        ...state,
        Profile:false,
        Manage:true,
        Password:false,
        ProfileWish:false,
        ManageAc:false,
        profileinfo:false

    }
}
if(action.type ==="PASSWORD"){

    return{
        ...state,
        Profile:false,
        ManageAc:false,
       ProfileWish:false,
       Manage:false,
        Password:true

    }
}

if(action.type ==="PROFILE_INFO"){

    return{
        ...state,
        Profile:false,
        Manage:false,
        Password:false,
        ProfileWishe:false,
        ManageAc:false,
        profileinfo:true

    }
}

if(action.type ==="WISH_PROFILE"){

    return{
        ...state,
        Profile:false,
        Manage:false,
        Password:false,
        profileinfo:false,
        ManageAc:false,
        ProfileWish:true

    }
}

if(action.type ==="MANAGEACCOUNT"   ){

    return{ 
        ...state,
        Profile:false,
        Manage:false,
        Password:false,
        profileinfo:false,
        ProfileWish:false,
        ManageAc:true,

    }
}

if(action.type === "END_ABOUT"){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        product:false,
        blog:false,
        pages:false,
    }

}


  return state
}

export default FilterReducer