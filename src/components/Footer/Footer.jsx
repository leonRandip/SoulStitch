import "./Footer.css";
import facebook from "../Styling/facebook-circle.svg";
import instagram from "../Styling/instagram-circle.svg";
import linkedin from "../Styling/linkedin-circle.svg";
const Footer = () => {
  return (
    <>
      <div className="socials">
        <p className="disabled-text">Contact</p>
        <div className="logos">
          <img
            className="footer-logo"
            id="firstlogo"
            src={facebook}
            alt="facebook"
          ></img>
          <img className="footer-logo" src={instagram} alt="instagram"></img>
          <img className="footer-logo" src={linkedin} alt="linkedin"></img>
        </div>
      </div>
    </>
  );
};
export default Footer;
