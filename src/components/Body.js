import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //local state variable
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]); // Filtered
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const res = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.6930839&lng=74.2226414&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7309194&lng=77.1277312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    console.log(json);
    // setListofRestaurant(
    // optional chaining
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListofRestaurant(
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setfilteredRestaurant(
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search- box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listofRestaurants.filter(
              (res) => parseFloat(res?.info?.avgRating) > 4.5 // Convert to number
            );
            setfilteredRestaurant(
              filteredRestaurant.length > 0
                ? filteredRestaurant
                : listofRestaurants
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id || restaurant?.data?.id}
            resData={restaurant}
          />
        ))}
      </div>
      {/* <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          
          <RestaurantCard
            key={restaurant?.info?.id || restaurant?.data?.id || Math.random()} // Multiple fallbacks
            resData={restaurant}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
