
import {Link} from "react-router-dom";
import logo from "./assets/logo.png";
import "./header.css"
function Header({cart,setCart}){
    return(
        <>
        <div className="navbar">
          <div className="logo">
            <img className="logo-image" src={logo} alt="" />
            <h3>Chef's Spark</h3>
          </div>
          <ul>
            <li>
                {/* similar to a tag */}
                <Link to={"/"}>Home</Link>
            </li>
            <li className="cart-count">
              {cart.length}
            </li>
            <li>
                <Link to={"/Cart"}>View Cart</Link>
            </li>
          </ul>
          </div>
        </>
    )
}

export default Header