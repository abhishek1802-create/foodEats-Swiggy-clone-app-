import React, { useState } from "react";
import { foodImg } from "../../utils/constants";
import { removeItem } from "../../Slice/cartSlice";
import { useDispatch } from "react-redux";

function CartItemList({ items }) {
  
  //const [itemCount, setItemCount] = useState(1);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div key={item.card.info.id} className="foodList">
              <div className="details">
                <span style={{ fontWeight: "bold" }}>
                  {item.card.info.name}
                </span>
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
                <button
                  id="addButton"
                  onClick={() => {
                    dispatch(removeItem(item.card.info.id));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartItemList;
