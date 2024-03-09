import { useParams } from "react-router";
import { About } from "./about";
import { Contact } from "./contact";
import "./dynamic.css";

const Dynamic = () => {
  const { page } = useParams();
  let contentData;

  switch (page) {
    case "about":
      contentData = About;
      break;
    case "contact":
      contentData = Contact;
      break;
    default:
      contentData = About;
  }

  console.log(contentData);

  return (
    <>
      <div className="container-wrapper">
        <div className="dynamic-head">
          <h1>{contentData.header}</h1>
        </div>
        <div className="heading">
          <h1>{contentData.heading}</h1>
        </div>
        <div className="dynamic-content">
          <p>{contentData.content}</p>
          <div
            className="pebble"
            style={{ backgroundImage: `url(${contentData.image})` }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Dynamic;
