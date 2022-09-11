import { useState } from 'react';
import { Parallax, Background } from 'react-parallax';
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
import Reborn from '../../assets/images/reborn.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { diceRoll } from '../../utils/diceRoll';

const Home = () => {
  const [heroName, setHeroName] = useState('');
  const [roll, setRoll] = useState(0);

  const handleRoll = () => {
    let roll = diceRoll();
    setRoll(roll);
  };

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
        <Parallax className="parallax" bgImage={Reborn} strength={800}>
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
                    This is a blank page, a missing memory fragment that you
                    must fill in.
                  </h4>
                  <p>more skills</p>
                  <div className="skill-badge_one">
                    {roll === 0 ? '?' : '+ 1'}
                  </div>
                  <p>more skills</p>
                  <div className="skill-badge_one two">
                    {roll === 0 ? '?' : <> -{roll / 3} </>}
                  </div>
                  <p>more skills</p>
                  <div className="skill-badge_one three">
                    {roll === 0 ? '?' : <> -{roll} </>}
                  </div>
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
                <div className="hero-badge">
                  {roll === 0 ? '?' : <> {roll} </>}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="story">
          <h2>Story...</h2>
          <p>more story...</p>
          <div>
            <input
              type="text"
              value={heroName}
              onChange={(e) => {
                console.log(e.target.value.length);
                if (e.target.value.length >= 19) {
                  return;
                } else {
                  setHeroName(e.target.value);
                }
              }}
            />
            <button onClick={handleRoll}>Roll</button>
          </div>
        </div>
      </section>
      <section className=""></section>
    </main>
  );
};

export default Home;
