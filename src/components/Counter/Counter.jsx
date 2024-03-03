import './Counter.css';
import image from '../Styling/image5.png';
const Counter=()=>{
    return(
        <div className="Counter-wrap">
                <div className="Counter-text">
                    
                </div>
                <div className="Counter-image">
                    <img className="imgage" src={image} alt='counter-img'></img>
                </div>
        </div>
    );
}
export default Counter;