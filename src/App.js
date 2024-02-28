import NavBar from './components/NavBar/Navbar';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import './App.css';

function App() {
    
  return (
    <div className='container-wrapper'>
    <NavBar/>
    <Content/>
    <Slider/>
    </div>
  );
}

export default App;
