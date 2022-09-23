import './Cart.css';
import CartItem from './CartItem';
import React, { useContext, useState, useEffect } from 'react';
import CartContext from './CartContext';
const Cart = () => {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const shoppingList = [
    { name: 'Chicken Tenders', price: '9.99', quantity: '1' },
    { name: 'Cheese Burgers', price: '7.98', quantity: '402' },
    { name: 'Fries', price: '5.67', quantity: '400' },
  ];
  return (
    <div className="cartContainer flexCentCol">
      <div className="cartHeader flexCent">
        <h2>Cart:</h2>
        <div className="balance flexCent">$20.30</div>
      </div>
      <div className="cart flexCent">
        {shoppingList.map((item) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
