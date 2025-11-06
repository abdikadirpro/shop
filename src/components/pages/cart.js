import CartProducts from "../CartProducts";
import Payment from "../Payment";

const Cart = () =>{
  
  return(
   <div className="container-cart">
      <CartProducts />
      <Payment />
   </div>

  )

}

export default Cart;