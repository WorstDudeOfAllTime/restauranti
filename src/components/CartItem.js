import './CartItem.css';
const CartItem = ({name, price, quantity}) => {
  return (
    <div className="cartItemContainer flexCentCol">
      <div className="cartItemDesc flexCentCol">
        <div className="cartItemDescTop">
          <h5 style={{margin: '0'}}>{name}</h5>
        </div>
        <div className="cartItemDescBottom flexCent">
          <div className="bottomLeftHalf">
            <h6>${price}</h6>
          </div>
          <div className="bottomRightHalf">
            <h6>Quantity: {quantity}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
