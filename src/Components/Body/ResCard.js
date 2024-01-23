import './ResCard.scss'

const ResCard = (props) =>{
    
    const{resData} = props;
    
    return(
        <div className="resCard"> 
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId} alt="foodImage"  id="resImage"/> 
            <h3>{resData?.info?.name}</h3>
            <h5>{resData?.info?.cuisines.join(",")}</h5>
            <h4>{resData?.info?.avgRating}</h4> 
            <h4>{resData?.info?.costForTwo}</h4>
        </div>

    )
}

export const withPromotedLabel = (ResCard) =>{
   
    return (props) =>{
        return(
            <div>
                <label>Promoted</label>
                <ResCard {...props}/>
            </div>
        );
    };
}

export default ResCard ;