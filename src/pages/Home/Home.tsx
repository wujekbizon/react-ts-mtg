// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import LogoB from '../../assets/images/LogoB.png';
import MtgLogo from '../../assets/images/MtgLogo.png';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLeters';
import { useState, useEffect } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isActiveForest, setActiveForest] = useState(false);
  const [isActiveIsland, setActiveIsland] = useState(false);
  const [isActiveMountain, setActiveMountain] = useState(false);
  const [isActiveSwamp, setActiveSwamp] = useState(false);
  const [isActivePlains, setActivePlains] = useState(false);
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
    <main className="home">
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
          <img
            className={`
          black-logo
          ${
            isActiveForest &&
            isActiveIsland &&
            isActiveMountain &&
            isActivePlains &&
            isActiveSwamp
              ? 'active-black'
              : ''
          }
          `}
            src={LogoB}
            alt="Logo"
          />
        </div>
        <div>
          <img
            className={`
          fire-logo
          ${
            isActiveForest &&
            isActiveIsland &&
            isActiveMountain &&
            isActivePlains &&
            isActiveSwamp
              ? 'active-fire'
              : ''
          }
          `}
            src={MtgLogo}
            alt="MTG"
          />
        </div>
        <div
          className={`mountain ${isActiveMountain ? 'mountain-animate' : ''} `}
          onClick={handleToggleMountain}
        >
          <img src={Mountain} alt="Mountain" />
        </div>
        <div
          className={`swamp ${isActiveSwamp ? 'swamp-animate' : ''}`}
          onClick={handleToggleSwamp}
        >
          <img src={Swamp} alt="Swamp" />
        </div>
        <div
          className={`forest ${isActiveForest ? 'forest-animate' : ''}`}
          onClick={handleToggleForest}
        >
          <img src={Forest} alt="Forest" />
        </div>
        <div
          className={`island ${isActiveIsland ? 'island-animate' : ''}`}
          onClick={handleToggleIsland}
        >
          <img src={Island} alt="Island" />
        </div>
        <div
          className={`plains ${isActivePlains ? 'plains-animate' : ''}`}
          onClick={handleTogglePlains}
        >
          <img src={Plains} alt="Plains" />
        </div>
      </div>
    </main>
  );
};

export default Home;
