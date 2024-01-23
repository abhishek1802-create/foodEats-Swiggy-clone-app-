import "./ResCard.scss";
import { IoMdHeart } from "react-icons/io";

const ResCard = (props) => {
  const { resData } = props;

  return (
    <div className="resCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData?.info?.cloudinaryImageId
        }
        alt="foodImage"
        id="resImage"
      />
      <span className="resName">{resData?.info?.name}</span>
      <span className="cuisines">{resData?.info?.cuisines.join(" , ")}</span>
      <span className="rating"><IoMdHeart />{resData?.info?.avgRating}</span>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
