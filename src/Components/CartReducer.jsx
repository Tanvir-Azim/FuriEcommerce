

const CartReducer=(state,action)=>{
    if(action.type === "ADD_TO_CART"){
        const {quantity,product,color} = action.payload
               const cartProduct={
                    id:product.id+color,
                    name:product.name,
                    quantity:quantity,
                    image:product.image,
                    price:product.price,
                    max:product.stock,
                    color:color,
                 }

        return{
            ...state,
            cart:[...state.cart,cartProduct]
        }
    }

    if(action.type==="ADD_CART"){
        const {product,quantity,color} =action.payload
        const cartProduct={
            id:product.id+color,
            name:product.name,
            quantity:quantity,
            image:product.image,
            price:product.price,
            max:product.stock,
            color:color
        }
        return{
            ...state,
            cart:[...state.cart,cartProduct]

        }
    }

    if(action.type==="ADD_To_Wish"){
        const product = action.payload
        return{
            ...state,
            wish:[...state.wish, product]

        }
    }

    if(action.type === "VIEW_BUTTON"){
        const product = action.payload
        return{
            ...state,
            viewProduct:product

        }
    }

    if(action.type === "WISH_TO_CART"){
        const {product,quantity,color} = action.payload
        const cartProduct={
            id:product.id+color,
            name:product.name,
            quantity:quantity,
            image:product.image,
            price:product.price,
            max:product.stock,
            color:color,
        }
        return{
            ...state,
            cart:[...state.cart,cartProduct]

        }
    }

    if(action.type === "REMOVE_WISH"){
        const id=action.payload
        const updateWish=state.wish.filter((curElement)=>{
            return curElement.id !== id
        })
        return{
            ...state,
            wish:updateWish

        }
        
    }

    if(action.type === "REMOVE_CART"){
        const id=action.payload
        const updateCart=state.cart.filter((curElement)=>{
            return curElement.id !== id
        })
        return{
            ...state,
            cart:updateCart

        }
        
    }

    if(action.type === "DECREMENT"){
        const id= action.payload

        let updateCart= state.cart.map((curElement)=>{
           if(curElement.id===id){
                let amount = curElement.quantity-1
                return{
                    ...curElement,
                    quantity:amount
                }
           }else{
            return curElement
           }
             
        }).filter((curElement)=>{
            return curElement.quantity !==0
        })
       

       
        return{
            ...state,
            cart:updateCart
            
        }
       
    }


    if(action.type === "INCREMENT"){
        const id= action.payload

        let updateCart= state.cart.map((curElement)=>{
           if(curElement.id===id){
                let amount = curElement.quantity+1
                return{
                    ...curElement,
                    quantity:amount
                }
           }else{
            return curElement
           }
             
        }).filter((curElement)=>{
            return curElement.quantity !== curElement.max
        })
       

       
        return{
            ...state,
            cart:updateCart
            
        }
       
    }
       
    if(action.type === "TOTAL_ITEM"){
        let TotalItem=state.cart.reduce((initialVal,curElem)=>{
            let amount = curElem.quantity
            initialVal = initialVal+amount
            return initialVal
        },0)
        return{
            ...state,
            totalItem:TotalItem
        }
    }

    if(action.type === "TOTAL_PRICE"){
        let totalPrice = state.cart.reduce((initialVal,curElem)=>{
            let price = curElem.quantity*curElem.price
            initialVal = initialVal+price
            return initialVal
        },0)
        return{
            ...state,
            totalPrice:totalPrice
        }
    }
    return state
   

}

export default CartReducer