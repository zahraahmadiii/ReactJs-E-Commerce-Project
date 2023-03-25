// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import pic11 from "../../../src/Assets/images/mobile1.jpg"
// import pic12 from "../../../src/Assets/images/mobile2.jpg"
// import pic13 from "../../../src/Assets/images/mobile3.jpg"
// import styles from"./style.module.css";


// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";




// import { EffectCoverflow, Pagination } from "swiper";

// export default function MobileSwiper() {
//   return (
//     <>
//     <div className={styles.mobileWraper}>
//     <Swiper
//     className={styles.mobileSwiper}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
       
//       >
//         <SwiperSlide>
//           <img src={pic11} className={styles.mobileImg}/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={pic12} className={styles.mobileImg}/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={pic13} className={styles.mobileImg}/>
//         </SwiperSlide>
//       </Swiper>
//     </div>
     
//     </>
//   );
// }


// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import pic11 from "../../../src/Assets/images/mobile1.jpg"
// import pic12 from "../../../src/Assets/images/mobile2.jpg"
// import pic13 from "../../../src/Assets/images/mobile3.jpg"
// import styles from"./style.module.css";
// import "swiper/css";
// import "swiper/css/pagination";



// // import required modules
// import { Pagination } from "swiper";

// export default function MobileSwiper () {
//   return (
//     <>
//       <Swiper
//          className={styles.mobileSwiper}
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           "@1.50": {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
      
//       >
//         <SwiperSlide> <img src={pic11} className={styles.mobileImg}/></SwiperSlide>
//         <SwiperSlide>   <img src={pic12} className={styles.mobileImg}/></SwiperSlide>
//         <SwiperSlide> <img src={pic13} className={styles.mobileImg}/></SwiperSlide>
//         <SwiperSlide> <img src={pic11} className={styles.mobileImg}/></SwiperSlide>
//         <SwiperSlide>   <img src={pic12} className={styles.mobileImg}/></SwiperSlide>
//         <SwiperSlide> <img src={pic13} className={styles.mobileImg}/></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }