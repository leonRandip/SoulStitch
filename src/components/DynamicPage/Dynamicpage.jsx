import { useParams } from "react-router";
import { About } from "./about";
import { Contact } from "./contact";

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
      <h1>{contentData.data}</h1>
    </>
  );
};
export default Dynamic;
