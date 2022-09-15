import { Swiper, SwiperSlide } from "swiper/react";
import HERO1 from "./images/Hero-Image-1.jpeg";
import HERO2 from "./images/Hero-Image-2.jpeg";
import HERO3 from "./images/Hero-Image-3.jpeg";


// Import Swiper styles
import "swiper/css";
import "./hero-slider.css";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="swiper">
      <SwiperSlide>
        <div className="swiper__header-container">
          <h1 className="swiper__header">Shop Our Arrivals</h1>
          <p className="swiper__subheader">
            Our coolest new items are waiting for you!
          </p>
          <button className="swiper__buy-button">Shop Now</button>
        </div>
        <img src={HERO1} alt="shopify alt tag" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__header-container">
          <h1 className="swiper__header alternative">Our Fave Tees</h1>
          <p className="swiper__subheader alternative">
            Shop All Our Favorites
          </p>
          <button className="swiper__buy-button">Shop Now</button>
        </div>
        <img src={HERO2} alt="shopify alt tag" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__header-container">
          <h1 className="swiper__header alternative">Men's Tees</h1>
          <p className="swiper__subheader alternative">
            Find the perfect shirt.
          </p>
          <button className="swiper__buy-button">Shop Now</button>
        </div>
        <img src={HERO3} alt="shopify alt tag" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
