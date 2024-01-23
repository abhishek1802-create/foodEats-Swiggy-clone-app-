import React from "react";
import { foodImg } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../Slice/cartSlice";
import './ItemList.scss';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  console.log(items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className="foodList">
            <div className="details">
              <span style={{ fontWeight: "bold" }}>{item.card.info.name}</span>
              <span style={{ fontSize: "0.9rem", color: "green" }}>
                {" "}
                ₹ {item.card.info.price / 100}
              </span>
              <span style={{ fontSize: "0.9rem", color: "gray" }}>
                {item.card.info.description}
              </span>
            </div>
            <div className="foodPic">
              <img
                src={foodImg + item.card.info.imageId}
                alt="foodPic"
                id="foodPic"
              />
              <button id="addButton" onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
