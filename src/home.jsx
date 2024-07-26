import { useState } from "react";
import data from "./food.json";
import Product from "./product";
import "./home.css"
function Home({cart,setCart}){
    const [products] = useState(data);
    return(
        <>
        <div className="product-container">
            {products.map((product)=>(
                <Product cart={cart} setCart={setCart} key={product.id} product={product}/>
            ))}
        </div>
        </>
    )
}

export default Home;