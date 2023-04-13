import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from"./style.module.css";
import pic21 from "../../../src/Assets/images/tab1.jpg"
import pic22 from "../../../src/Assets/images/tab2.jpg"
import pic23 from "../../../src/Assets/images/tab3.jpg"
import pic24 from "../../../src/Assets/images/tab4.jpg"
import pic25 from "../../../src/Assets/images/tab5.jpg"
import { Zoom, Navigation, Pagination } from "swiper";

export default function TabletSwiper() {
  return (
    <>
      <Swiper
          className={styles.tabletSwiper}
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
        <SwiperSlide className={styles.tabletSwiper}>
          <div className="swiper-zoom-container">
            <img src={pic21} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic22} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic23} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic24}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={pic25} />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={} />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
