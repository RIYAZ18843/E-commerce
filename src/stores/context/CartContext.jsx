import React, { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, price: priceNumber }]);
    }
    toast.success(`${item.product} added to cart`);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    toast.info(`${item.product} removed from cart`);
  };

  const incrementQuantity = (item) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const decrementQuantity = (item) => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0);
    setCartItems(updatedItems);
  };

  return (
    <>
      <ToastContainer />
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
