// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import LogoB from '../../assets/images/LogoB.png';
import MtgLogo from '../../assets/images/MtgLogo.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLeters';
import { useState, useEffect } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    'M',
    'A',
    'G',
    'I',
    'C',
    ' ',
    'T',
    'H',
    'E',
    ' ',
    'G',
    'A',
    'T',
    'H',
    'E',
    'R',
    'I',
    'N',
    'G',
  ];

  useEffect(() => {
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }
    wait();
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

      <div className="logo">
        <img className="black" src={LogoB} alt="Logo" />
        <img className="fire" src={MtgLogo} alt="MTG" />
      </div>
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
