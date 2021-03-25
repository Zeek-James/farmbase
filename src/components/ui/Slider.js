import React from "react";
import "react-slideshow-image/dist/styles.css";
import pic1 from "../../utilies/images/pexels-mark-stebnicki-2749165.jpg";
import pic2 from "../../utilies/images/pexels-pat-whelen-6026441.jpg";
import pic3 from "../../utilies/images/pexels-pixabay-264537.jpg";
import pic5 from "../../utilies/images/pexels-alejandro-barrón-96715.jpg";
import pic6 from "../../utilies/images/african-farmer-woman-phone-640x403.png";
import { Slide } from "react-slideshow-image";

export const Slider = () => {
  const fadeImage = [pic1, pic2, pic3, pic5, pic6];

  const fadeProperties = {
    duration: 10000,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="slide-container m-4">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <img src={fadeImage[0]} alt="hello" />
          </div>
          <div className="each-fade">
            <img src={fadeImage[1]} alt="hello" />
          </div>
          <div className="each-fade">
            <img src={fadeImage[2]} alt="hello" />
          </div>
          <div className="each-fade">
            <img src={fadeImage[3]} alt="hello" />
          </div>
          <div className="each-fade">
            <img src={fadeImage[4]} alt="hello" />
          </div>
        </Slide>
      </div>
    </div>
  );
};
