import NavBar from "./components/NavBar/Navbar";
import Content from "./components/Content/Content";
import TwoColumn from "./components/TwoColumn/TwoColumn";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import image6 from "./components/Styling/image6.png";
const Home = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="pad-layer">
          <Content />
          <Slider />
          <TwoColumn
            url={image6}
            subHeading="What we are"
            heading="Looking for a Professional psychological support?"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet enim vel purus malesuada, venenatis convallis magna venenatis. Aliquam tellus erat, convallis ut pretium nec, porta at libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus quis urna dictum accumsan."
          />

          {/* <Counter/> */}
        </div>
      </div>
    </>
  );
};
export default Home;
