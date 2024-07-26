/* eslint-disable react/prop-types */
import "./product.css";
import { useState } from "react";


function Product({product,cart,setCart}){
    // providing certain length requirements for length of the name
    const name  = product.name.length>21 ? product.name.substring(0,18)+".." : product.name;

    function addCart(){
        setCart([...cart,product])
        console.log(cart)
    }

    function removeCart(){
        setCart(cart.filter((item)=>item.id !== product.id))   
    }




    return(
    <>
    <div className="product">
        <div className="img">
            <img src={product.pic} alt={product.name} />
        </div>
        <h3>{name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product) ? (<button className="btnRemove" onClick={removeCart}>Remove From Cart</button>) : (<button onClick={addCart}>Add To Cart</button>)}
    </div>
    </>
    )

}
export default Product;