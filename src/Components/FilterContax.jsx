import React, { createContext, useContext, useEffect, useReducer,useState } from 'react'
import reducer from './FilterReducer'
import { useProductContax } from './ProdaxContax'
import FilterColor from './FilterColor'
import Test from './Test'
import {toast } from 'react-toastify';

const FilterAppContax = createContext()

const initialState={
    gridview:true,
    listview:false,
    filterProduct:[],
    all_product:[],
    searchProduct:[],
    HomeCategory:[],
    searchingSagetion:[],
    shorting_value:'',
        filters: {
        text:"",
        category:"",
        company:"",
        color:"",
        maxPrice:0,
        price:0,
        minPrice:0,
        searchResult:'',
        
        
    },
    home:true,
    about:false,
    contact:false,
    product:false,
    blog:false,
    pages:false,
    selectCategory:'',
    sagetionResult:[],
    sagetionList:'',
    Profile:true,
    Manage:false,
    Password:false,
    profileinfo:false,
    ProfileWish:false,
    ManageAc:false,
    searchBoxValue:true,

    
}
function FilterContax({children}) {
    const[loading,isLoading]=useState(false)
    const[aboutLoading,setAboutLoading]=useState(false)
    const[productLoading,setProductLoading]=useState(false)
    const[contactLoading,setContactLoading]=useState(false)
    const[blogLoading,setBlogLoading]=useState(false)
    const[homeLoading,setHomeLoading]=useState(false)
    const{product}=useProductContax()


    const[state,dispatch]=useReducer(reducer,initialState)
    
  const [values, setValues] = useState(0)
  const[searchResult,setSearchResult]=useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange=(e)=>{
    const value = e.target.value
    setValues(value)
    dispatch({
        type:"HANDEL_RANGE",
        payload:values
    })
  }

    const ActiveGrid=()=>{
        dispatch({
            type:"ACTIVE_GRID"
        })
    }

    const ActiveList=()=>{
        dispatch({
            type:"ACTIVE_LIST"
        })
    }
    
    useEffect(()=>{ 
        dispatch({
            type:'LOAD_PRODUCT',
            payload:product,

        })
    },[product])

    const handelTable=(e)=>{
        const event = e.target.value
        dispatch({
            type:"HANDEL_TABLE",
            payload:event
        })
      
      }
      useEffect(()=>{
            dispatch({
                type:"GET_COLORS"
            })
      },[])

      const findColor=(e)=>{
        const value=e.target.value
         dispatch({
             type:"FIND_COLOR",
             payload:value
          })
   }

    
const handelCompany=(e)=>{
    const value=e.target.value
    dispatch({
        type:"HANDEL_COMPANY",
        payload:value
    })


}

const handelSeleteBox=(e)=>{
    const value=e.target.value
    dispatch({
        type:"HANDEL_SELLETEBOX",
        payload:value
    })

}

useEffect(()=>{
    dispatch({
        type:"NEW_FILTER",
        payload:product
    })
},[product,state.filters])

useEffect(()=>{
    dispatch({
        type:"UPDATE_SHORTIG",
        payload:product
    })
},[product,state.shorting_value])

useEffect(()=>{
    dispatch({
        type:"GET_MAX_PRICE",
        payload:product
    })
    isLoading(true)
    setTimeout(()=>{
        isLoading(false)
    },2000)
    
    
},[product])

const getInputValue=(e)=>{
    const value=e.target.value
    dispatch({
        type:"SET_SEARCH_VALUE",
        payload:value
    })

}

const getSearchValue=()=>{
    dispatch({
        type:"setAllData",
        payload:product
     })
}


const toggleHome=()=>{
    dispatch({
        type:'HOME'
    })
    setHomeLoading(true)
    setTimeout(()=>{
    setHomeLoading(false)
    },1000)
}
const toggleAbout=()=>{
    dispatch({
        type:'ABOUT'
    })
    setAboutLoading(true)
    
    setTimeout(()=>{
        setAboutLoading(false)
    },1000)

    

}
const toggleBlog=()=>{
    dispatch({
        type:'BLOG'
    })
    setBlogLoading(true)
    setTimeout(()=>{
        setBlogLoading(false)
    },1000)
}
const togglePages=()=>{
    dispatch({
        type:'PAGES'
    })
}

const toggleContact=()=>{
    dispatch({
        type:'CONTACT'
    })

    setContactLoading(true)

    setTimeout(()=>{
        setContactLoading(false)
    },2000)

}
const toggleProducts=()=>{
    dispatch({
        type:'PRODUCTS'
    })
    setProductLoading(true)
    setTimeout(()=>{
        setProductLoading(false)
    },2000)
}

const handelCategoryButton=(e)=>{
 let value = e.target.value
 dispatch({
    type:"HANDEL_CATEGORY",
    payload:{value,product}
 })



}

const seleteSearch=(e)=>{
    setSearchTerm(e)
    dispatch({
        type:"SAGETIONS",
        payload:{e,product}
    })
  }
  
const RemoveSagetion=()=>{
    dispatch({
        type:"REMOVE_SAGETION"
    })
}

const handelProfile=()=>{
    dispatch({
        type:"PROFILE",

    })
}

const ToggleInformation=()=>{
    dispatch({
        type:"PROFILE_INFO",

    })
}
  
const ToggleAddress=()=>{
    dispatch({
        type:"MANAGE",

    })
}
const TogglePassword=()=>{
    dispatch({
        type:"PASSWORD",

    })
}

const WishProfile=()=>{
    dispatch({
        type:"WISH_PROFILE",

    })
}

const Logout=()=>{
    toast.success('logout successfully');
}

const ToggleManage=()=>{
    dispatch({
        type:"MANAGEACCOUNT"
    })

}


  return (
    <FilterAppContax.Provider value={{...state,ActiveGrid,ActiveList,handelTable,FilterColor,findColor,handelCompany,handelSeleteBox,handleChange,values,getInputValue,getSearchValue,loading,toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact,handelCategoryButton,searchResult,seleteSearch,searchTerm,RemoveSagetion,handelProfile,ToggleInformation,ToggleAddress,TogglePassword,WishProfile,Logout,ToggleManage,aboutLoading,productLoading,contactLoading,blogLoading,homeLoading}}>
        {children}
    </FilterAppContax.Provider>
  )
}

export const useFilterContax=()=>{

    return useContext(FilterAppContax)
}

export default FilterContax