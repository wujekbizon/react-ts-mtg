import './Home.scss';
import { useState } from 'react';
import { Parallax } from 'react-parallax';
import { diceRoll } from '../../utils/diceRoll';
import { facts, black, tribes, abilities } from '../../data/';
// Images
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import mainMountains from '../../assets/images/main_mountain.png';
import mainSwamps from '../../assets/images/main_swamp.png';
import mainForest from '../../assets/images/main_forest.png';
import mainPlains from '../../assets/images/main_plains.png';
import mainIsland from '../../assets/images/main_island.png';
import Hero from '../../assets/images/hero2.png';
import Reborn from '../../assets/images/reborn.jpg';
// Icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CasinoIcon from '@mui/icons-material/Casino';
// components
import { ManaSymbol, Modal, Land } from '../../components/';

const Home = () => {
  const [heroName, setHeroName] = useState('Unknown Hero');
  const [roll, setRoll] = useState(0);
  const [mana, setMana] = useState('');
  const [activeSwamp, setActiveSwamp] = useState(false);
  const [activeForest, setActiveForest] = useState(false);
  const [activePlains, setActivePlains] = useState(false);
  const [activeMountain, setActiveMountain] = useState(false);
  const [activeIsland, setActiveIsland] = useState(false);
  const handleRoll = () => {
    const roll = diceRoll();
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
          <div
            className={mana === 'red' ? `mountain mountain-active` : 'mountain'}
            onClick={() => {
              setMana('red');
              setActiveMountain(true);
            }}
          >
            <img src={Mountain} alt="moutain" />
          </div>
          <div
            className={mana === 'green' ? 'forest forest-active' : 'forest'}
            onClick={() => {
              setMana('green');
              setActiveForest(true);
            }}
          >
            <img src={Forest} alt="forest" />
          </div>
          <div
            className={mana === 'white' ? 'plains plains-active' : 'plains'}
            onClick={() => {
              setMana('white');
              setActivePlains(true);
            }}
          >
            <img src={Plains} alt="plain" />
          </div>
          <div
            className={mana === 'blue' ? 'island island-active' : 'island'}
            onClick={() => {
              setMana('blue');
              setActiveIsland(true);
            }}
          >
            <img src={Island} alt="island" />
          </div>
          <div
            className={mana === 'black' ? 'swamp swamp-active' : 'swamp'}
            onClick={() => {
              setMana('black');
              setActiveSwamp(true);
            }}
          >
            <img src={Swamp} alt="swamp" />
          </div>
        </div>
        <div className="scroll">
          <KeyboardDoubleArrowDownIcon />
          <p>Scroll Down</p>
          <KeyboardDoubleArrowDownIcon />
        </div>
      </section>
      <article className="divider bg-dark">
        <h2 className="adventure">
          Start You Adventure Now - Explore what's been lost in neons of time.
          <br />
          As a one of a few powerful being , change a wheel of time. Become a
          <span className="planeswalker"> Planeswalker. </span>
        </h2>
      </article>
      <section className="begin">
        <Parallax className="parallax" bgImage={Reborn} strength={800}>
          <div className="hero-container">
            <div className="hero-card">
              <div className="hero-name">
                <div className="name-border">
                  {heroName ? <h2>{heroName}</h2> : <h2>Unknown Hero</h2>}
                  <div className="mana-cost">
                    <ManaSymbol mana="1" />
                    <ManaSymbol mana={mana || 'red'} />
                    <ManaSymbol mana={mana || 'red'} />
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
              ...What ? Who's that ? , Where I am ?
              <FormatQuoteIcon />
            </span>
          </h4>

          <div className="hero-prolog">
            <hr />
            <h2>
              The stranger didn't remember who he was. He stood by burning tree
              , hearing some voices in his head. Through his eyes, went visions
              of creatures he slayed. He still felt smell of burnt bodies. In
              his bloody hands , our unknown hero was holding big sword - Sword
              of the Chosen.
            </h2>
            <hr />
            <h4>
              <FormatQuoteIcon />
              Hey, Are You alright ?
              <br />
              Let the Mighty Serra bless you my friend.
              <br />
              You Saved us all, from those monsters.
              <FormatQuoteIcon />
              <br />
              <span className="hero-text">
                <br />
                <FormatQuoteIcon />
                ...What is this place ?
                <FormatQuoteIcon />
                <br />
              </span>
              <br />
              <FormatQuoteIcon />
              We are by World Tree in Kaldheim, at least what left of it.
              <br />
              Do You got name, stranger or I should call you Unknown Hero ?
              <FormatQuoteIcon />
              <br />
              <br />
              <FormatQuoteIcon />
              <span className="hero-text"> You can call me </span>{' '}
              <input
                autoFocus
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
            <h5>* FACTS *</h5>
            <p>{facts[0].text}</p>
            <p>{facts[1].text}</p>
            <span className="roll">
              Try a Roll
              <CasinoIcon onClick={handleRoll} />
            </span>
          </div>
        </div>
      </section>
      <article className="divider linear-gradient ">
        <h2>
          {heroName} started his adventure , he was confused but decide not to
          give up.
          <br />
          He left behind the burning tree. Didn't look back, he couldn't after
          what he did.
        </h2>
        <div className="scroll">
          <KeyboardDoubleArrowDownIcon />
          <p>End of Prolog</p>
          <KeyboardDoubleArrowDownIcon />
        </div>
      </article>

      <article className="divider bg-dark">
        <h2>
          <FormatQuoteIcon />
          <br />
          Our Hero ventured thru deep forested wetlands, filled with mud,
          rotting vegetation and full of strange and disgusting insect
          population.
          <br />
          <FormatQuoteIcon />
        </h2>
      </article>
      <section className="page">
        <Parallax className="parallax" bgImage={mainSwamps} strength={800}>
          {!activeSwamp ? (
            <Modal
              active={activeSwamp}
              imgSrc={Swamp}
              onClick={() => setActiveSwamp(true)}
            />
          ) : (
            <Land
              imgLand={Swamp}
              isActive={activeSwamp}
              setActive={() => setActiveSwamp(false)}
              title="black"
              color={black}
              tribes={tribes}
              abilities={abilities}
            />
          )}
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="page">
        <Parallax className="parallax" bgImage={mainForest} strength={800}>
          {!activeForest ? (
            <Modal
              active={activeForest}
              imgSrc={Forest}
              onClick={() => setActiveForest(true)}
            />
          ) : (
            <article
              className={activeForest ? 'wrapper section-padding' : 'none'}
            ></article>
          )}
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="page">
        <Parallax className="parallax" bgImage={mainPlains} strength={800}>
          {!activePlains ? (
            <Modal
              active={activePlains}
              imgSrc={Plains}
              onClick={() => setActivePlains(true)}
            />
          ) : (
            <article
              className={activePlains ? 'wrapper section-padding' : 'none'}
            ></article>
          )}
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="page">
        <Parallax className="parallax" bgImage={mainMountains} strength={800}>
          {!activeMountain ? (
            <Modal
              active={activeMountain}
              imgSrc={Mountain}
              onClick={() => setActiveMountain(true)}
            />
          ) : (
            <article
              className={activeMountain ? 'wrapper section-padding' : 'none'}
            ></article>
          )}
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="page">
        <Parallax className="parallax" bgImage={mainIsland} strength={800}>
          {!activeIsland ? (
            <Modal
              active={activeIsland}
              imgSrc={Island}
              onClick={() => setActiveIsland(true)}
            />
          ) : (
            <article
              className={activeIsland ? 'wrapper section-padding' : 'none'}
            ></article>
          )}
        </Parallax>
      </section>
    </main>
  );
};

export default Home;
