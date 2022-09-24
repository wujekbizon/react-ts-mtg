import './Home.scss';
import { useState } from 'react';
import { Parallax } from 'react-parallax';
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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CasinoIcon from '@mui/icons-material/Casino';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { diceRoll } from '../../utils/diceRoll';
import { ManaSymbol, Modal } from '../../components/';
import { facts, tribes, abilities } from '../../data/';

const Home = () => {
  const [heroName, setHeroName] = useState('Unknown Hero');
  const [roll, setRoll] = useState(0);
  const [mana, setMana] = useState('');
  const [active, setActive] = useState(false);
  const [isOpenTribes, setIsOpenTribes] = useState(false);
  const [isOpenAbilities, setIsOpenAbilities] = useState(false);

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
          <div
            className={mana === 'red' ? `mountain mountain-active` : 'mountain'}
            onClick={() => {
              setMana('red');
            }}
          >
            <img src={Mountain} alt="moutain" />
          </div>
          <div
            className={mana === 'green' ? 'forest forest-active' : 'forest'}
            onClick={() => {
              setMana('green');
            }}
          >
            <img src={Forest} alt="forest" />
          </div>
          <div
            className={mana === 'white' ? 'plains plains-active' : 'plains'}
            onClick={() => {
              setMana('white');
            }}
          >
            <img src={Plains} alt="plain" />
          </div>
          <div
            className={mana === 'blue' ? 'island island-active' : 'island'}
            onClick={() => {
              setMana('blue');
            }}
          >
            <img src={Island} alt="island" />
          </div>
          <div
            className={mana === 'black' ? 'swamp swamp-active' : 'swamp'}
            onClick={() => {
              setMana('black');
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
      <section className="swamp-path">
        <Parallax className="parallax" bgImage={mainSwamps} strength={800}>
          {!active ? (
            <Modal
              active={active}
              imgSrc={Swamp}
              onClick={() => setActive(true)}
              altName="swamp"
            />
          ) : (
            <article className={active ? 'black-wrapper' : 'none'}>
              <div className="black-container">
                <div className="black-features">
                  <div className="black-gameplay">
                    <h3>Gameplay</h3>
                    <p>
                      Black usually doesn't do well in the late game, rather, it
                      finds innovative ways to get superior positions early on
                      so that it can rule in the midgame. Often, this means you
                      will sacrifice life for cards for an early advantage. Card
                      advantage plays a very big role, though at the loss of
                      life. It can play very well by itself through corruption
                      effects (see Corrupt) and work with other colors all
                      equally well. Reanimation decks have always been a
                      favorite, finding ways to dump big, expensive creatures
                      into the graveyard early and then play them from there for
                      cheap. Animate Dead and Zombify both work well for this.
                      Black is also known for it's discard effects.
                    </p>
                  </div>
                  <div className="black-bottom">
                    <div className="black-abilities">
                      <h3>Abilities</h3>
                      {isOpenAbilities ? (
                        <ArrowCircleUpIcon
                          className="icon"
                          onClick={() => setIsOpenAbilities(false)}
                        />
                      ) : (
                        <ExpandCircleDownIcon
                          className="icon"
                          onClick={() => setIsOpenAbilities(true)}
                        />
                      )}
                      {isOpenAbilities ? (
                        <ul className={isOpenAbilities ? 'open' : ''}>
                          {abilities.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="black-tribes">
                      <h3>Creature Tribes</h3>
                      {isOpenTribes ? (
                        <ArrowCircleUpIcon
                          className="icon"
                          onClick={() => setIsOpenTribes(false)}
                        />
                      ) : (
                        <ExpandCircleDownIcon
                          className="icon"
                          onClick={() => setIsOpenTribes(true)}
                        />
                      )}
                      {isOpenTribes ? (
                        <ul className={isOpenTribes ? 'open' : ''}>
                          {tribes.map((tribe) => (
                            <li key={tribe}>{tribe}</li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                <div className="black-content">
                  <h1>BLACK</h1>
                  <h2>
                    <span>Black</span> is one of the five colors of mana in
                    Magic. It is drawn from the power of swamps and embodies the
                    principles of parasitism and amorality (though not
                    necessarily immorality). The mana symbol for Black is
                    represented by a skull. On the color pie, it is the ally of
                    blue and red, and the enemy of white and green. Black seeks
                    power through ruthlessness or opportunity.
                  </h2>

                  <img
                    src={Swamp}
                    alt="swamp"
                    onClick={() => setActive(false)}
                  />
                </div>
              </div>
              <div className="facts-container">
                <div className="facts">
                  <h4>* FACTS *</h4>
                  <p>{facts[2].text}</p>
                </div>
              </div>
            </article>
          )}
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="forest-path">
        <Parallax className="parallax" bgImage={mainForest} strength={800}>
          <div className="content-container">
            <div className="forest">
              <img src={Forest} alt="forest" />
            </div>
          </div>
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="plains-path">
        <Parallax className="parallax" bgImage={mainPlains} strength={800}>
          <div className="content-container">
            <div className="plains">
              <img src={Plains} alt="plains" />
            </div>
          </div>
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="mountain-path">
        <Parallax className="parallax" bgImage={mainMountains} strength={800}>
          <div className="content-container">
            <div className="mountain">
              <img src={Mountain} alt="mountain" />
            </div>
          </div>
        </Parallax>
      </section>
      <article className="divider bg-dark"></article>
      <section className="island-path">
        <Parallax className="parallax" bgImage={mainIsland} strength={800}>
          <div className="content-container">
            <div className="island">
              <img src={Island} alt="island" />
            </div>
          </div>
        </Parallax>
      </section>
    </main>
  );
};

export default Home;
