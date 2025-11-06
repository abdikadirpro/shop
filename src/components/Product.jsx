import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product = ({product})=>{
  const {addTocart,RemoveFromCart,products}= useShop();
  const [isIncart,setIsIncart]= useState();
  useEffect(()=>{
     const isInCart = products.filter((pro) => pro.id ==product.id);
     if(isInCart.length >0){
      setIsIncart(true);
     }else{
      setIsIncart(false)
     }
  },[products])
  const handleAddTocart = ()=>{
  if(isIncart){
    RemoveFromCart(product)
  }else{
   addTocart(product);
  }
    console.log(products)
  }
    return(
     <div className="card"
     style={{
        minHeight:"100%",
        background:`linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),
        url(${product.imgUrl})
         
        `,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"


     }}
     >
       <div className="info">
        <span>{product.name}</span>
        <span>{product.price}</span>
       </div>
       <button className= {`btn ${isIncart ? "btn-secondary" : "btn-primary"}`}
       onClick={handleAddTocart}
       >
        {isIncart ? "-" : "+"}
        
        </button>
     </div>
     
    )
}
export default Product;