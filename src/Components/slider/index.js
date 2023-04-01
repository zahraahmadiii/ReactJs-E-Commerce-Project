import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pic2 from "../../../src/Assets/images/header3.jpg"
import pic3 from "../../../src/Assets/images/header4.jpg"
import pic4 from "../../../src/Assets/images/header5.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./style.module.css"
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
        className={styles.loginslider}
      >
        <SwiperSlide><img src={pic2} className={styles.loginslider}/></SwiperSlide>
        <SwiperSlide><img src={pic3} className={styles.loginslider}/></SwiperSlide>
        <SwiperSlide><img src={pic4} className={styles.loginslider}/></SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}
