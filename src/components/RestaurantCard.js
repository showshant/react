import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // const { resName, cuisine } = props;

  const { resData } = props;
  // console.log(props);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    area,
  } = resData?.data || {};
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ") || "No cuisines listed"}</h3>
      <h4>⭐ {avgRating}</h4>
      <h4>💰 Rs. {costForTwo / 100} FOR TWO</h4>
      <h4>⏱️ {deliveryTime} minutes</h4>
      <h4>📍 {area}</h4>
    </div>
  );
};

export default RestaurantCard;
