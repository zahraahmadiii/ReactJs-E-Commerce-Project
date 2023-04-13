import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import pic1 from "../../../src/Assets/images/carousel1.webp"
import pic2 from "../../../src/Assets/images/carousel2.gif"
import pic3 from "../../../src/Assets/images/carousel3.webp"
import pic4 from "../../../src/Assets/images/carousel4.webp"
import pic5 from "../../../src/Assets/images/carousel5.webp"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
         className="d-block w-100"
          src={pic1}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
         />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
         />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
         />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic5}
         />
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
