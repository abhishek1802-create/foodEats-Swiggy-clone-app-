import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_DATA } from "../../utils/constants";
import { foodImg } from "../../utils/constants";
import './Body.scss'

const Body = () => {
  const [DishCard,setDishCards] = useState([]);
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  const PromotedRestaurant = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_DATA);
    const json = await data.json();
    //console.log(json);
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); 
    setDishCards(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  //console.log(listOfRes);
  console.log(DishCard);


  if(listOfRes.length == 0 || filterListOfRes.length == 0) return <div className="loading"><div className="loader"></div></div>;

  return (
    <div className="Body">
      <div className="dishCards">
        <h3>What's in your Mind</h3>
        <div className="cards">
          {
            DishCard.map((dish)=>{
              return(
                <div className="foodCard">
                          <img src={foodImg + dish?.imageId} alt="dishImage" />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="searchBar">
        <div className="searchRestaurant">
          <input
            type="text"
            className="searchBox"
            placeholder="search restaurant here..."
            value={searchRes}
            onChange={(e) => setSearchRes(e.target.value)}
          />
          <button
            id="searchBtn"
            onClick={() => {
              //to search out Specific Restaurant in the List
              const searchResData = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchRes.toLowerCase())
              );
              setFilterListOfRes(searchResData);
            }}
          >
            Search
          </button>
        </div>
        <div className="filters">
        <button
          id="vegRes"
          onClick={() => {
            //to list out all Restaurant
            setFilterListOfRes(listOfRes);
          }}
        >
          All
        </button>
        <button
          id="topRes"
          onClick={() => {
            //to Filter out Restaurant Rating Wise
            const filterRes = listOfRes.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilterListOfRes(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          id="vegRes"
          onClick={() => {
            //to Filter out veg restaurant only
            const filterRes = listOfRes.filter(
              (res) => res.info.veg === true
            );
            setFilterListOfRes(filterRes);
          }}
        >
          Veg
        </button>
        </div>
      </div>
      <h3>Restaurant With Online Food Delivery</h3>
      <div className="resContainer">
        {
          // to List out all restaurants in the List
         filterListOfRes.map((restaurant) => (
            <Link
              className="cardStyle"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <PromotedRestaurant resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
