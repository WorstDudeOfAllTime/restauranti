import './App.css'
import Home from './components/Home';
import RestaurantCard from './components/RestaurantCard';
import RestaurantPage from './components/RestaurantPage';
import Restaurant from './components/Restaurant';
import CartContext from './components/CartContext';
import React, {useState, useEffect, useContext} from 'react';
function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    
    <div className="App flexCent">
    <CartContext.Provider value={{
      shoppingCart, setShoppingCart
    }}/>
    <div className="container">
      <div className="nav"></div>
      <div className="content flexCent">
      <Restaurant/>
      </div>
    </div>
    <CartContext.Provider/>
    </div>
  );
}

export default App;
