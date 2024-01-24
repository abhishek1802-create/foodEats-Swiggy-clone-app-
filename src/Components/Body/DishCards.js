import React from 'react'
import { foodImg } from "../../utils/constants";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DishCards = ({DishCard}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <Slider {...settings}>
       {
            DishCard.map((dish)=>{
              return(
                <div className="foodCard">
                        <img src={foodImg + dish?.imageId} alt="dishImage"  style={{cursor:'pointer'}}/>
                </div>
              )
            })
          }
    </Slider>
  )
}

export default DishCards
