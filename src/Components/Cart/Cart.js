import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems } from "../../Slice/cartSlice";
import CartItemList from "./CartItemList";
import './Cart.scss'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalFoodPrice = cartItems.reduce((acc, item) => {
      return (acc += item?.card?.info?.price);
    }, 0);
    setTotalPrice(totalFoodPrice);
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <div className="cart">
      <h1>cart</h1>
      <div className="cartBox">
        <div className="cartRemoveBox">
          <button onClick={handleClearCart} id="clearCartButton">
            clear cart
          </button>
          {cartItems.length === 0 && (
            <h5 style={{ color: "red" }}>
              Cart is Empty ! Please add Item to cart
            </h5>
          )}
        </div>
        <CartItemList items={cartItems} />
          cartItems && <h4 className="totalPriceOfFood"><i>Total Foods Price:</i> {totalPrice / 100}</h4>
      </div>
    </div>
  );
};

export default Cart;
