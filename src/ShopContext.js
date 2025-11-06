import {  createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

  const ShopContext = createContext(initialState);

 export const ShopProvider = ({children})=>{
const[state, dispatch] = useReducer(shopReducer,initialState);
const addTocart = (product)=>{
    const updateProduct = [...state.products,product];
    calculateTotal(updateProduct)
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            products:updateProduct
        }
    })
}
const RemoveFromCart = (product)=>{
    const updateProduct = state.products.filter((p) =>p.id !==
        product.id
    )
    calculateTotal(updateProduct)
    dispatch({
        type: "REMOVE_FROM_CART",
         payload:{
            products:updateProduct
         }

    })
}
const calculateTotal = (products)=>{
    let total = 0;
    products.filter(pro =>(
       total += pro.price
    ));
    dispatch({
        type :"CALCULATE_TOTAL",
        ...state,
        payload:total
    })
}
const values = {
    products:state.products,
    total:state.total,
    addTocart,
    RemoveFromCart,
    calculateTotal
}
return( <ShopContext.Provider value ={values}  >
       {children}
      </ShopContext.Provider>)

}

const useShop = ()=>{
    const context = useContext(ShopContext);
    if(context === undefined){
        throw new Error('unknown reducer')
    }
    return context;
}

export default useShop;