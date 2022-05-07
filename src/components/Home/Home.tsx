// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';

const Home = () => {
  return (
    <div>
      <h1>MAGIC THE GATHERING</h1>
      <img className="mountain" src={Mountain} />
      <img className="swamp" src={Swamp} />
      <img className="forest" src={Forest} />
      <img className="island" src={Island} />
      <img className="plains" src={Plains} />
    </div>
  );
};

export default Home;
