import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img 
          className="res-logo"
          alt="res-logo" 
          src={CDN_URL + resData.data.cloudinaryImageId}
        />
        {/* res.cloudanary.com for image*/}
        {/* src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"+cloudinaryImageId*/}
        <h3>{name}</h3>
        <h4>{cuisines.join("- ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>Rs. {costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;