import React from "react";
import { Carousel } from "react-bootstrap";
import devops from "../assets/devops.jpeg";
import about from "../assets/about.jpeg";
import isa from "../assets/isa.jpeg";

const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={isa} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={devops} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={about} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
