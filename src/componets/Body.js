
import { set } from "mongoose";
import RestaurantCard from "./RestaurantCard"
import restaurantList from "./utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";




const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;

