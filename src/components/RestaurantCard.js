import "./RestaurantCard.css"
const RestaurantCard = ({restaurant}) => {
return(
  <div className="cardContainer flexCent">
  <div className="picHeader flexCent">
    <div className="picDisplay"></div>
  </div>
  <div className="desc flexCentCol">
    <h2>Boot and Saddle</h2>
    <h3>Rating: 4.3/5</h3>
    <h4>American, Pub</h4>
  </div>
  <div className="info flexCent">
    <button>Eat Here.</button>
  </div>
  </div>
)
}

export default RestaurantCard