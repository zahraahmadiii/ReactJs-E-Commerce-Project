import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import pic7 from "../../../src/Assets/images/carousel7.jpg"
import pic8 from "../../../src/Assets/images/carousel8.jpg"
// import pic3 from "../../../src/Assets/images/header4.jpg"
// import pic4 from "../../../src/Assets/images/header5.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import styles from"./style.module.css";


import { EffectCube, Pagination } from "swiper";

export default function ProductSwiper() {
  return (
    <>
    <div className={styles.wrapperSwiper}>
    <Swiper
    className={styles.wrapper}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        
      >
        <SwiperSlide>
        
          <img src={pic7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
     
    </>
  );
}