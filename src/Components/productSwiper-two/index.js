import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pic11 from "../../../src/Assets/images/mobile1.jpg"
import pic12 from "../../../src/Assets/images/mobile2.jpg"
import pic13 from "../../../src/Assets/images/mobile3.jpg"
import styles from"./style.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function MobileSwiper() {
  return (
    <>
    <div className={styles.mobileWraper}>
    <Swiper
    className={styles.mobileSwiper}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
       
      >
        <SwiperSlide>
          <img src={pic11} className={styles.mobileImg}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic12} className={styles.mobileImg}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic13} className={styles.mobileImg}/>
        </SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}