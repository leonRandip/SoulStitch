import React, { useEffect, useState } from "react";
import { sliderContent } from "./SliderContent";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(0);

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };
  const preloadImage = (src) => {
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = src;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          prevIndex < sliderContent.length - 1 ? prevIndex + 1 : 0;
        setIsLoading(true);
        preloadImage(sliderContent[newIndex].image);
        return newIndex;
      });
    }, 8000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-content">
        <img
          className={`slider-image ${isLoading ? "slider-image-blur" : ""}`}
          src={sliderContent[currentIndex].image}
          alt="Slider Content"
          onLoad={() => setIsLoading(false)}
        />
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
