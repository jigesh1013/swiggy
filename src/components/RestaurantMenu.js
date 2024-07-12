import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {name, cuisines, avgRating, deliveryTime, costForTwo} = resInfo?.data;

  const {itemcards} = resInfo?.data;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li>{item.card.info.name} - {"Rs. "}{item.card.info.price /100}</li> )}
        <li>{itemCards[0].card.info.name}</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;