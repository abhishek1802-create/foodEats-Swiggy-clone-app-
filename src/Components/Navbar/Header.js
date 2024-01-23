import { useState, useContext } from "react";
import Logo from "../../../Images/greenfood.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import './Header.scss'

const Header = () => {
  let [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);
  const { isLoggedIn } = data;
  console.log(isLoggedIn);

  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <img id="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navItems">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="navListStyle" to="/">
              Foods
            </Link>
          </li>
          <li>
            <Link className="navListStyle" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="navListStyle" to="/cart">
              Cart ({cartItem.length}-items)
            </Link>
          </li>
          <li>
            <button
              id="loginBtn"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          {/* <li>{isLoggedIn}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
