// import { CDN_URL } from "../utils/constants";
// const RestaurantCard = (props) => {
//   // const { resName, cuisine } = props;

//   const { resData } = props;
//   // console.log(props);
//   const {
//     cloudinaryImageId,
//     name,
//     avgRating,
//     cuisines,
//     costForTwo,
//     deliveryTime,
//     area,
//   } = resData?.data || {};
//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         src={CDN_URL + resData.data.cloudinaryImageId}
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines?.join(", ") || "No cuisines listed"}</h3>
//       <h4>⭐ {avgRating}</h4>
//       <h4>💰 Rs. {costForTwo / 100} FOR TWO</h4>
//       <h4>⏱️ {deliveryTime} minutes</h4>
//       <h4>📍 {area}</h4>
//     </div>
//   );
// };

// export default RestaurantCard;
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // Destructure from resData.info (Swiggy's current API structure)
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    area,
    sla,
  } = resData?.info || {};

  // Local fallback image (base64 encoded transparent pixel)
  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTk5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : fallbackImage
        }
        alt={name || "Restaurant"}
        onError={(e) => {
          e.target.src = fallbackImage; // Fallback if CDN image fails
        }}
      />
      <h2>{name || "Restaurant Name"}</h2>
      <h3>{cuisines?.join(", ") || "No cuisines listed"}</h3>
      <h4>⭐ {avgRating || "NA"}</h4>
      <h4>💰 {costForTwo || "Price not available"}</h4>
      <h4>⏱️ {sla?.deliveryTime || "??"} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
