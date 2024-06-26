import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

import 'react-toastify/dist/ReactToastify.css';

const UserCart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncrementQuantity = (item) => {
    incrementQuantity(item);
  };

  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      decrementQuantity(item);
    } else {
      handleRemoveFromCart(item);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h2 className='y-cart'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='empty'>Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className='cart-section' key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                  <h2>₹{(item.price * item.quantity).toLocaleString()}</h2>
                  <h3>{item.model}</h3>
                  <div className="quantity-controls">
                    <button className='decrementBtn' onClick={() => handleDecrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='incrementBtn' onClick={() => handleIncrementQuantity(item)}>+</button>
                  </div>
                </div>
                <button className='removeBtn' onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default UserCart;
