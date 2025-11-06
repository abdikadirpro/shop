import useShop from "../ShopContext"


const CartProducts = ()=>{
    const {products,RemoveFromCart,total} = useShop();
    return(
     <div className="cart-products">
        {products.map(product =>(
          <div className="cart-product">
            <div className="cart-title-img">
                <img src={product.imgUrl} alt="" />
                <span>{product.name}</span>
            </div>
            <h5>{product.price}</h5>
             <span className="delete"
             onClick={()=>RemoveFromCart(product)}
             
             >delete</span>
          </div>  
        ))}
        <h1 className="total">Total Price : {total}</h1>
     </div>
    )

}
export default CartProducts;