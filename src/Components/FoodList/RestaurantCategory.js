import React, { useState } from "react";
import ItemList from "./ItemList";
import './RestaurantCategory.scss';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  //const [showItems,setShowItems] = useState(false);

  const handleClick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      <div className="ItemCard">
        <div className="Title" onClick={handleClick}>
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
