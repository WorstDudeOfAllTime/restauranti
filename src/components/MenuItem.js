import './MenuItem.css';
const MenuItem = ({name, price, cals}) => {
  return (
    <div className="menuItemContainer flexCent">
      <div className="mealPic"></div>
      <div className="mealInfo flexCentCol">
        <h3>{name}</h3>
        <div className="infoBottom flexCent">
          <div className="lowerHalf flexCent lowLeft">
            <h4>${price}</h4>
          </div>
          <div className="lowerHalf flexCent lowRight">
            <h4>Cals. 500</h4>
          </div>
        </div>
        <div className="addTo flexCent">
          <button>Add to Cart.</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
