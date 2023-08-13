import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hienho from '../../../../public/poster slider img/HienHo.jpg';
import musicFest from '../../../../public/poster slider img/Music Fest.jpg'
import showMag from '../../../../public/poster slider img/show mag.jpg'
import clsx from "clsx"
export default  function Slide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
        <div >
          <img src={hienho} alt="" style={{
            width: "100%", height: "40rem",
            borderRadius: "10px",
            padding: "10px",
            border: " solid 2px black",
            boxShadow: "inset 0 0 1rem #fff"
          }} />
        </div>
        <div >
          <img src={musicFest} alt="" style={{
            width: "100%", height: "40rem",
            borderRadius: "10px",
            padding: "10px",
            border: " solid 2px black",
            boxShadow: "inset 0 0 1rem #fff"
          }} />
        </div>
        <div >
          <img src={showMag} alt="" style={{
            width: "100%", height: "40rem",
            borderRadius: "10px",
            padding: "10px",
            border: " solid 2px black",
            boxShadow: "inset 0 0 1rem #fff"
          }} />
        </div>
      </Slider>
    )
}