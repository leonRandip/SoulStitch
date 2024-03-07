import "./Content.css";
import { ChevronRight, Flag } from "react-bootstrap-icons";
import { Constant } from "./constant";
const Content = () => {
  const header = "Get Your Mental Health Under Control";
  const subtext =
    "online health and mental health recovery course with an experienced practitioner";
  return (
    <div className="wrap">
      <div className="banner">
        <div className="text-cont">
          <h1 className="header-text">{header}</h1>
          <p className="sub-text">{subtext}</p>
          <button className="help-btn">
            Get Help <ChevronRight />
          </button>
        </div>
        <div className="image-cont">
          <div className="image-1 bounce"></div>
          <div className="image-2 bounce"></div>
          <div className="image-3 bounce"></div>
          <div className="image-4 bounce"></div>
        </div>
      </div>
      <div className="about">
        <div className="head">
          <h1 className="about-header">Our Benefits</h1>
        </div>
        <div className="contain-all">
          {Constant.map((i, index) => (
            <div className="contain">
              <h3 className="contain-header">{i.header}</h3>
              <p className="contain-subtext">{i.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
