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
        {contentData.data?.map((data) => (
          <div>
            <div className="heading">
              <h2>{data.heading}</h2>
            </div>
            <div
              className={`dynamic-content ${data.image ? "" : "full-width"}`}
            >
              <p dangerouslySetInnerHTML={{ __html: data.content }} />

              {data.image && (
                <div
                  className="pebble"
                  style={{ backgroundImage: `url(${data.image})` }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Dynamic;
