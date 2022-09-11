import { useState } from 'react';

// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import LogoB from '../../assets/images/LogoB.png';
import MtgLogo from '../../assets/images/MtgLogo.png';
import Hero from '../../assets/images/hero2.png';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home = () => {
  const [heroName, setHeroName] = useState('');

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-title">
          <h1 className="title">DECKMASTER</h1>
          <p className="subtitle">
            Which path will you choose, my Unknown Hero?
          </p>
          <div>
            <p>Made by Fan for Fans</p>
            <span>Wolfinger Trademark 2022 ⓒ All Rights Reserved</span>
          </div>
        </div>
        <div className="container">
          <div className="mountain">
            <img src={Mountain} alt="moutain" />
          </div>
          <div className="forest">
            <img src={Forest} alt="forest" />
          </div>
          <div className="plains">
            <img src={Plains} alt="plain" />
          </div>
          <div className="island">
            <img src={Island} alt="island" />
          </div>
          <div className="swamp">
            <img src={Swamp} alt="swamp" />
          </div>
        </div>
        <div className="scroll">
          <KeyboardDoubleArrowDownIcon />
          <p>Scroll Down</p>
          <KeyboardDoubleArrowDownIcon />
        </div>
      </section>
      <section className="begin">
        <div className="hero-container">
          <div className="hero-card">
            <div className="hero-name">
              <div className="name-border">
                {heroName ? <h2>{heroName}</h2> : <h2>Unknown Hero</h2>}
                <div className="mana-cost">
                  <div className="colorless-mana">
                    <span>1</span>
                  </div>
                  <div className="colorless-mana">
                    <img src={Swamp} alt="swamp" className="mana" />
                  </div>
                  <div className="colorless-mana">
                    <img src={Swamp} alt="swamp" className="mana" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-main">
              <div className="img-container">
                <img src={Hero} alt="unknown hero" />
              </div>

              <div className="hero-info">
                <h4>
                  This is a blank page, a missing memory fragment that you must
                  fill in.
                </h4>
                <p>more skills</p>
                <p>more skills</p>
                <p>more skills</p>
                <h6>
                  "Who am'I ? , What is this strange filling ?..... and this
                  sword"{' '}
                </h6>
              </div>
            </div>
            <div className="hero-type">
              <div className="type-border">
                {heroName ? (
                  <h3>Legendary Planeswalker - {heroName}</h3>
                ) : (
                  <h3>Legendary Planeswalker - Unknown Hero</h3>
                )}
              </div>
              <div className="hero-badge">?</div>
            </div>
          </div>
        </div>
        <div className="story">
          <h2>Story...</h2>
          <p>more story...</p>
          <div>
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
