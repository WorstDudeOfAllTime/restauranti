import './App.css'
import Home from './components/Home';
import RestaurantCard from './components/RestaurantCard';
import RestaurantPage from './components/RestaurantPage';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App flexCent">
    <div className="container">
      <div className="nav"></div>
      <div className="content flexCent">
      <Restaurant/>
      </div>
    </div>
    </div>
  );
}

export default App;
