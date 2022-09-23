import './Menu.css'
import MenuItem from './MenuItem';
const Menu = () => {
  const restaurantList = [{name:"Chicken Tenders", price:"9.99", cals:"568" },
  {name:"Cheese Burgers", price:"7.98", cals:"402" },
  {name:"Fries", price:"5.67", cals:"400" }]
  return(<div className="menuContainer flexCentCol">
    <div className="menuHeader flexCent">
      <h2>Menu:</h2>
    </div>
    <div className='menuContent flexCent'>
      {restaurantList.map(item => {
        return <MenuItem name={item.name} price={item.price} cals={item.cals}/>
      })}
    </div>
  </div>)
}
export default Menu;