
import { useEffect, useState } from "react";
import "./cart.css"


// for dummy image use this link (https://placehold.co/100x100)
function Cart({cart,setCart}){

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
    },[cart])

    const [total,setTotal] = useState(0);
    return(
        <>
           <div className="cart-container">
            <h2>Cart Products</h2>
            {cart.map((product)=>(
                 <div className="cart-product" key={product.id}>
                 <div className="img">
                     <img src={product.pic} alt="image"/>
                 </div>
                 <div className="cart-product-details">
                     <h4>{product.name}</h4>
                     <p>{product.shop}</p>
                     <p>Price Rs.{product.amt}</p>
                 </div>
             </div>

            ))}
           
          
           </div>
           <h2 className="amt">Total Amount Rs:{total}</h2>
        </>
    )

}

export default Cart;