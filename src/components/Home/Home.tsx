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

  const [isActiveForest, setActiveForest] = useState(false);
  const [isActiveIsland, setActiveIsland] = useState(false);
  const [isActiveMountain, setActiveMountain] = useState(false);
  const [isActiveSwamp, setActiveSwamp] = useState(false);
  const [isActivePlains, setActivePlains] = useState(false);

  const handleToggleForest = () => {
    setActiveForest(!isActiveForest);
  };

  const handleToggleIsland = () => {
    setActiveIsland(!isActiveIsland);
  };

  const handleToggleMountain = () => {
    setActiveMountain(!isActiveMountain);
  };

  const handleToggleSwamp = () => {
    setActiveSwamp(!isActiveSwamp);
  };

  const handleTogglePlains = () => {
    setActivePlains(!isActivePlains);
  };

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

      <div className="container">
        <div>
          <img className="black-logo" src={LogoB} alt="Logo" />
        </div>
        <div>
          <img className="fire-logo" src={MtgLogo} alt="MTG" />
        </div>
        <div
          className={
            isActiveMountain ? ' mountain mountain-animate ' : 'mountain'
          }
          onClick={handleToggleMountain}
        >
          <img src={Mountain} alt="Mountain" />
        </div>
        <div
          className={isActiveSwamp ? 'swamp swamp-animate' : 'swamp'}
          onClick={handleToggleSwamp}
        >
          <img src={Swamp} alt="Swamp" />
        </div>
        <div
          className={isActiveForest ? 'forest forest-animate' : 'forest'}
          onClick={handleToggleForest}
        >
          <img src={Forest} alt="Forest" />
        </div>
        <div
          className={isActiveIsland ? 'island island-animate' : 'island'}
          onClick={handleToggleIsland}
        >
          <img src={Island} alt="Island" />
        </div>
        <div
          className={isActivePlains ? 'plains plains-animate' : 'plains'}
          onClick={handleTogglePlains}
        >
          <img src={Plains} alt="Plains" />
        </div>
      </div>
    </div>
  );
};

export default Home;
