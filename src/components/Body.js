import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //local state variable
  const [listofRestaurants, setListofRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestaurant();
            // filter out logic here
            const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id} // Using unique ID from API data
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
