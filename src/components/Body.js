import RestaurantCard from "./RestaurantCard.js";
import { restaurantList1, restaurantList2 } from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link, json } from "react-router-dom";
import { getData } from "../utils/get-data.js";

const Body = () => {
  // Local State Variable - Super powerful variable
  // useState never use outside of Body component also try to avoid in if else statement (condition), for loop, function
  // useState need to used inside body & at higher level
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList1);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList1);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconcilliation cycle

  //console.log("Body Rendered");

  useEffect(() => {
    console.log("useEffect called in body.js");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getData("data.json", "json");
      console.log(response.persons);
      setListOfRestaurants(response.persons);
      //setFilteredRestaurant(response.persons);
    } catch (error) {
      console.error(error);
    }
  };

  /*const fetchData = async () => {
    //const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999");
    const data = await fetch(restaurantList2);

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(json.data);
    setFilteredRestaurant(json.data);
  };*/

  /*console.log(
      json?.data?.success?.cards[1]?.gridWidget?.infoWithStyle?.restaurants
    );
    // Optional Chaining

    //setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.infoWithStyle?.restaurants);
    //setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.infoWithStyle?.restaurants);
    // filter logic
    const filteredList1 = restaurantList1.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setListOfRestaurants(filteredList1);
    //setFilteredRestaurant(filteredList1);
    };*/

  //Conditional Rendering
  /*if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }*/

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
              // Filter the restaurant cards & update the UI
              // searchText
              //setSearchText = {e.target.value}
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.data.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
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
              (restaurant) => restaurant.data.avgRating > 4
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* mockData */}
        {/*restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))*/}
        {/*<   RestaurantCard resData={restaurantList[1]} />*/}
        {/* {reslist.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />))}*/}
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
