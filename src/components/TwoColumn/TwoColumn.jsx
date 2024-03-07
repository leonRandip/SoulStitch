import React from "react";
import "./style.css";
import useIntersectionObserver from "../../intersectionObserver";

export default function TwoColumn(props) {
  const { url, subHeading, heading, desc, isReversed } = props;
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5, // Optional: set a threshold
  });
  const styleFourthWord = (text) => {
    const words = text.split(" ");
    words[3] = `<span style="color: #92bb52;">${words[3]}</span>`;
    return words.join(" ");
  };
  return (
    <div className="two-column">
      <div className="img" ref={elementRef}>
        <img className={`tcol-img ${isIntersecting? 'bounce': ''}`} src={url} alt="" />
      </div>
      <div className="content">
        <h3 className="sub-heading">{subHeading}</h3>
        <h2
          className="heading"
          dangerouslySetInnerHTML={{ __html: styleFourthWord(heading) }}
        />
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
