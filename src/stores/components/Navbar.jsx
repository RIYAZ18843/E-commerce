import React from "react";
import { Link } from "react-router-dom";//A component from react-router-dom used for navigation without refreshing the page.  
import { useCart } from "../context/CartContext"; //A custom hook imported from the CartContext file to access cart-related information.
import { BsCart3 } from "react-icons/bs"; // Importing Bootstrap icon for the cart

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to='/' className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <Link to='/' className="custom-link">
          <div>Home</div>
        </Link>
        <Link to='/about' className="custom-link">
          <div>About</div>
        </Link>

        <Link to='/login' className="custom-link">
          <div>Login</div>
        </Link>
        
        <Link to='/cart' className="custom-link">
          <div className="cart">
            <BsCart3 /> {/* React Bootstrap cart icon */}
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
        </Link>
      </div>
      
      <div className="subMenu">
        <ul>
          <li><Link to="/mobiles" className="custom-link">Mobiles</Link></li>
          <li><Link to="/computers" className="custom-link">Computers</Link></li>
          <li><Link to="/watch" className="custom-link">Watch</Link></li>
          <li><Link to="/men" className="custom-link">Men</Link></li>
          <li><Link to="/woman" className="custom-link">Women</Link></li>
          <li><Link to="/fridge" className="custom-link">Fridge</Link></li>
          <li><Link to="/furniture" className="custom-link">Furniture</Link></li>
          <li><Link to="/kitchen" className="custom-link">Kitchen</Link></li>
          <li><Link to="/ac" className="custom-link">AC</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
