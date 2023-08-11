import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

//Pictures
import G1 from '../../assets/images/ShowcaseImages/1.png';
import G2 from '../../assets/images/ShowcaseImages/2.png';
import G3 from '../../assets/images/ShowcaseImages/3.png';
import G4 from '../../assets/images/ShowcaseImages/4.png';
import G5 from '../../assets/images/ShowcaseImages/5.png';
import G6 from '../../assets/images/ShowcaseImages/6.png';

export default function HighlightedProducts() {
    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        swipe: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    const showcase_images = [G1, G2, G3, G4, G5, G6];
    return (
      <div>
        <h1 className="second-heading">Gamepad Spotlight</h1>
        <div className="highlightedProducts">
            <Slider {...settings}>
                {showcase_images.map((elem, index) => {
                    return(
                        <img src={elem} key={index} alt={elem}/>
                    );
                })}
            </Slider>
        </div>
      </div>
    );
}