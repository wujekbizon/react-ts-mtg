import { useState } from 'react';
import { Parallax } from 'react-parallax';
// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import mainMountains from '../../assets/images/main_mountain.png';
import mainSwamps from '../../assets/images/main_swamp.png';
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
            <a href="#mountain">
              <img src={Mountain} alt="moutain" />
            </a>
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
            <a href="#swamp">
              <img src={Swamp} alt="swamp" />
            </a>
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
                    {roll === 0 ? '?' : <> -{Math.floor(roll / 3)} </>}
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
          <h4>
            " Hey !! Wake up ! , wake up..... "
            <br />
            <span className="hero-text">
              {' '}
              ...What ? Who's that ? , Who I 'am ?
            </span>
          </h4>
          <h4>???</h4>
          <div className="hero-prolog">
            <h2>
              He did not know who he was! He stood by burning tree , hearing
              some voice in his head. Thru his eyes went visions of creatures he
              slayed. He still felt smell of burnt bodies.
              <br />
            </h2>
            <input
              type="text"
              value={heroName}
              onChange={(e) => {
                if (e.target.value.length >= 19) {
                  return;
                } else {
                  setHeroName(e.target.value);
                }
              }}
            />{' '}
            <p>more story...</p>
            <button onClick={handleRoll}>Roll</button>
          </div>
        </div>
      </section>
      <article className="divider linear-gradient">
        {heroName ? (
          <h2>
            {heroName} start his adventure , he was confuse but he decide not to
            give up.
          </h2>
        ) : (
          <h2>
            Unknown Hero start his adventure , he was confuse but he decide not
            to give up.
            <br />
            He left behind the giant burning tree. Didn't look back, he could
            not.
          </h2>
        )}
      </article>
      <section className="swamps" id="swamp">
        {/* <Parallax bgImage={mainMountains} strength={800}>
          <div></div>
        </Parallax> */}
        <div className="img-container">
          <img src={mainSwamps} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
