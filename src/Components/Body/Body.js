import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_DATA } from "../../utils/constants";
import './Body.scss'

const Body = () => {
  //const [newListOfRes,setNewListOfRes] = useState([]);
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
    console.log(json);
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };


  // if(listOfRes.length == 0 || filterListOfRes.length == 0) return <div style
  //={{display:'flex',justifyContent:'center', alignItems:'center'}}><h1>Loading🚀</h1></div>

  return (
    <div className="Body">
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
