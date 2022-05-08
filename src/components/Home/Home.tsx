// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';

const Home = () => {
  return (
    <div className="mana">
      <div className="mountain">
        <img src={Mountain} alt="Mountain" />
      </div>
      <div className="swamp">
        <img src={Swamp} alt="Swamp" />
      </div>
      <div className="forest">
        <img src={Forest} alt="Forest" />
      </div>
      <div className="island">
        <img src={Island} alt="Island" />
      </div>
      <div className="plains">
        <img src={Plains} alt="Plains" />
      </div>
    </div>
  );
};

export default Home;
