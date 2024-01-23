import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import './ResMenu.scss'

const ResMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <div className="loading"><div className="loader"></div></div>;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log(categories);

  return (
    <div className="resMenu">
      <div className="resDetails">
        <div className="leftBox">
          <h2>{resMenu?.cards[0]?.card?.card?.info.name}</h2>
          <h5>{resMenu?.cards[0]?.card?.card?.info.cuisines.join(",")}</h5>
          <h5>{resMenu?.cards[0]?.card?.card?.info.locality}</h5>
        </div>
        <div className="rightBox">
          <h2>⭐{resMenu?.cards[0]?.card?.card?.info.avgRating}</h2>
          <hr />
          <h2>{resMenu?.cards[0]?.card?.card?.info.totalRatingsString}</h2>
        </div>
      </div>
      <hr />
      {
        // Controlled Component
        categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      }
    </div>
  );
};

export default ResMenu;
