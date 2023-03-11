import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../../src/Assets/images/header2.jpg"
import pic2 from "../../../src/Assets/images/header3.jpg"
import pic3 from "../../../src/Assets/images/header4.jpg"
import pic4 from "../../../src/Assets/images/header5.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";





import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
    <div >
    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic2}/></SwiperSlide>
        <SwiperSlide><img src={pic3}/></SwiperSlide>
        <SwiperSlide><img src={pic4}/></SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}
