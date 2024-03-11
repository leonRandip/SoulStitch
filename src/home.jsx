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
            desc="At Cast Their Burdens, we recognize that life's journey is marked by a myriad of experiences, challenges, and transitions, and seeking support is a courageous step towards healing. Our mission is to provide a haven where individuals can share their burdens and find tailored solutions for their unique struggles. Rooted in principles of Love, Kindness, Compassion, Honesty, and Empathy, we offer a comprehensive range of professional services to address a wide spectrum of mental health and well-being concerns"
          />

          {/* <Counter/> */}
        </div>
      </div>
    </>
  );
};
export default Home;
