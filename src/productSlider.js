import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./product-swiper.css";


import ProductCard from "./productCard";

// import required modules
import { Navigation } from "swiper";
const ProductSlider = () => {
  return (
    <>
      <h2 className="productSwiper__collection-title">Collection Title</h2>
      <Swiper
        breakpoints={{
          1: { slidesPerView: 2 },
          1068: { slidesPerView: 4 }
        }}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
        className="productSwiper"
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSlider;
