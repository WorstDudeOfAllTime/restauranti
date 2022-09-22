import './Restaurant.css'
const Restaurant = () => {
  return(<div className="restaurant flexCent">
    <div className="restaurantHalf flexCentCol">
      <div className="restaurantInfo flexCentCol">
        <div className="restPic"></div>
        <div className="restInfo flexCent">
          <h2>Boot and Saddle</h2>
        </div>
      </div>
      <div className="cart"></div>
    </div>
    <div className="menuHalf"></div>
  </div>)
}

export default Restaurant;