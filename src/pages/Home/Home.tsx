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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CasinoIcon from '@mui/icons-material/Casino';
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
            <FormatQuoteIcon />
            Hey !! Wake up ! , wake up.....
            <FormatQuoteIcon />
            <br />
            <span className="hero-text">
              <br />
              <FormatQuoteIcon />
              ...What ? Who's that ? , Where I 'am ?
              <FormatQuoteIcon />
            </span>
          </h4>

          <div className="hero-prolog">
            <h2>
              The stranger didn't remember who he was! He stood by burning tree
              , hearing some voices in his head. Through his eyes, went visions
              of creatures he slayed. He still felt smell of burnt bodies.
              <br />
              In his bloody hands , our unknown hero was holding big sword -
              Sword of the Chosen.
            </h2>
            <div className="spacer" />
            <h4>
              <FormatQuoteIcon />
              Hey, Are You alright?
              <br />
              Let the Mighty Serra bless you my friend.
              <br />
              You Saved us all, from those monsters.
              <FormatQuoteIcon />
              <br />
              <span className="hero-text">
                <br />
                <FormatQuoteIcon />
                ...What is this place?
                <FormatQuoteIcon />
                <br />
              </span>
              <br />
              <FormatQuoteIcon />
              Where are at World Tree in Kaldheim.
              <br />
              Do You get name or I should call you Unknown Hero?
              <FormatQuoteIcon />
              <br />
              <br />
              <FormatQuoteIcon />
              <span className="hero-text"> You can call me </span>{' '}
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
              />
              <FormatQuoteIcon />
            </h4>
          </div>
          <div className="facts">
            <h5>* Facts *</h5>

            <p>
              In Magic: The Gathering, a Planeswalker is a powerful mage who is
              able to travel across the planes of existence. There are infinite
              worlds across the Multiverse, and Planeswalkers are unique in
              their ability to move from one world to the next, expanding their
              knowledge and power through the experiences they collect there.
            </p>
            <p>
              Planeswalkers usually have three abilities: one ability that adds
              loyalty counters as a cost for a small benefit, one that removes a
              small number of counters as a cost for a larger effect, and one
              that removes a large number of loyalty counters for a big effect.
              <span className="roll">
                Try a Roll
                <CasinoIcon onClick={handleRoll} />
              </span>
            </p>
          </div>
        </div>
      </section>
      <article className="divider linear-gradient">
        {heroName ? (
          <h2>
            {heroName} start his adventure , he was confuse but he decide not to
            give up.
            <br />
            He left behind the burning tree. Didn't look back, he couldn't after
            what he did.
          </h2>
        ) : (
          <h2>
            Unknown Hero start his adventure , he was confuse but he decide not
            to give up.
            <br />
            He left behind the burning tree. Didn't look back, he couldn't after
            what he did.
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
