import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination"
import styles from"./style.module.css";
import pic26 from "../../../src/Assets/images/air1.jpg"
import pic27 from "../../../src/Assets/images/air2.jpg"
import pic28 from "../../../src/Assets/images/air3.jpg"
import pic30 from "../../../src/Assets/images/air5.jpg"
import pic31 from "../../../src/Assets/images/air6.jpg"
import pic32 from "../../../src/Assets/images/air7.jpg"
import pic33 from "../../../src/Assets/images/air8.jpg"
import { Zoom, Navigation, Pagination } from "swiper";

export default function AirpodSwiper() {
  return (
    <>
      <Swiper
          className={styles.airpodSwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
      >
        <SwiperSlide className={styles.airpodSwiper}>
          <div className="swiper-zoom-container">
            <img src={pic26} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic27} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic28} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic30} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic31} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic32} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic33} className={styles.airpodImg}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}