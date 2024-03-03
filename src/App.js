import NavBar from './components/NavBar/Navbar';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
    
  return (
    <div className='container-wrapper'>
    <NavBar/>
    <Content/>
    <Slider/>
    <Counter/>
    </div>
  );
}

export default App;
