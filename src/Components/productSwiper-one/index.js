import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pic8 from "../../../src/Assets/images/carousel8.jpg"
import pic9 from "../../../src/Assets/images/laptop1.jpg"
import pic10 from "../../../src/Assets/images/carousel9.jpg"
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
          <img src={pic9} className={styles.laptopImgOne}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} className={styles.laptopImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic10} className={styles.laptopImg}/>
        </SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}