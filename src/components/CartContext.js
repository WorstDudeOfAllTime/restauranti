import React, {createContext} from 'react';
const CartContext = createContext({
  shoppingCart: null,
  setShoppingCard: ()=>{}
})
export default CartContext;