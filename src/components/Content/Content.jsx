import "./Content.css";
import { ChevronRight, Flag } from "react-bootstrap-icons";
import { Constant } from "./constant";
const Content = () => {
  const header = "CAST YOUR BURDENS";
  const subtext = "where your emotions are celebrated 🍾";
  return (
    <div className="wrap">
      <div className="banner">
        <div className="text-cont">
          <h1 className="header-pre-text">WELCOME TO </h1>
          <h1 className="header-text">{header}</h1>
          <p className="sub-text">{subtext}</p>
          <button className="help-btn">
            Get Help <ChevronRight />
          </button>
        </div>
        <div className="image-cont">
          <div className="image-1 bounce"></div>
        </div>
      </div>
      <div className="about">
        <div className="head">
          <h1 className="about-header">Our Services</h1>
          <p></p>
        </div>
        <div className="contain-all">
          {Constant.map((i, index) => (
            <div className="contain">
              <h3 className="contain-header">{i.header}</h3>
              {i.subtext && <p className="contain-subtext">{i.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
