import NavBar from './components/NavBar/Navbar';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import Counter from './components/Counter/Counter';
import TwoColumn from './components/TwoColumn/TwoColumn';
import image6 from './components/Styling/image6.png';
import './App.css';

function App() {
    
  return (
    <div className='container-wrapper'>
      <NavBar/>
      <Content/>
      <Slider/>
      <TwoColumn
        url={image6}
        subHeading="What we are"
        heading="Looking for a Professional psychological support?"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet enim vel purus malesuada, venenatis convallis magna venenatis. Aliquam tellus erat, convallis ut pretium nec, porta at libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus quis urna dictum accumsan."
      />
      {/* <Counter/> */}
    </div>
  );
}

export default App;
