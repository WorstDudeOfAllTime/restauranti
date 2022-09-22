import RestaurantList from "./RestaurantList";
import './RestaurantPage.css'
const RestaurantPage = () => {
  return(
    <div className="restPageContainer flexCent">
      <div className="restPageHalf"></div>
      <div className="restPageHalf flexCentCol">
        <RestaurantList />
      </div>
    </div>
  )
}

export default RestaurantPage;