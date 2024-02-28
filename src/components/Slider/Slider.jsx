import React, { useState } from "react";
import { sliderContent } from "./SliderContent";
import "./Slider.css"; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <img src={sliderContent[currentIndex].image} alt="Slider Content" />
        <div className="text-content">
          <h3 className="Slider-subhead">
            {sliderContent[currentIndex].subHeading}
          </h3>
          <h2 className="Slider-head">
            {sliderContent[currentIndex].mainHeading}
          </h2>
          <p className="Slider-description">
            {sliderContent[currentIndex].description}
          </p>
          <h2 className="Slider-author">
            {sliderContent[currentIndex].author}
          </h2>
        </div>
      </div>
      <div className="radio-container">
        {sliderContent.map((_, index) => (
          <>
            <input type="radio" name="slider-radio" />
            <span></span>
            <label key={index} class="container1">
              <input
                type="radio"
                name="radio"
                checked={currentIndex === index}
                defaultChecked={index === 0}
                onChange={() => handleRadioChange(index)}
              />
              <span class="checkmark"></span>
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default Slider;
