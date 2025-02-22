import RestaurantCard from "./RestaurantCard.js";
import {
  restaurantList1,
  restaurantList2,
  restaurantList4,
} from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link, json } from "react-router-dom";
import { getData } from "../utils/get-data.js";

const Body = () => {
  // Local State Variable - Super powerful variable
  // useState never use outside of Body component also try to avoid in if else statement (condition), for loop, function
  // useState need to used inside body & at higher level
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation  cycle(re-render component)

  useEffect(() => {
    console.log("useEffect called in body.js");
    fetchData();
  }, []);

  const fetchData = async () => {
    /*const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );*/
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=608593&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.info);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.info);
    //setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("console in restaurant search");
              // Filter the restaurant cards & update the UI
              // searchText
              //setSearchText = (e.target.value);
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
              //setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            console.log("Top Rated Restaurant");
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Inside Data */}
        {/* listOfRestaurant.map for Top Rated Restaurant*/}
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* mockData */}
        {/*restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))*/}
        {/*<   RestaurantCard resData={restaurantList[1]} />*/}
        {/* {reslist.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />))}*/}
        {/*<RestaurantCard 
          resName="Meghana Foods" 
          cuisines= "Biryani, North Indian, Asian" 
          />
          <RestaurantCard resName="KFC"
          cuisines= "Burger, Fast Food" 
          />*/}
      </div>
    </div>
  );
};

export default Body;
