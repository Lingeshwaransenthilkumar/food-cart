import Header from "./header";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import "./App.css"
import { useState } from "react";

function App(){
    const [cart,setCart] = useState([]);
    return (
        <>
         <BrowserRouter>
            <Header cart = {cart} setCart = {setCart} />
               <div className="container">
                   <Routes>
                       <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
                       <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                   </Routes>
               </div>
         </BrowserRouter>
        </>
    )
}

export default App;