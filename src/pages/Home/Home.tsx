// Styles
import './Home.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import LogoB from '../../assets/images/LogoB.png';
import MtgLogo from '../../assets/images/MtgLogo.png';

const Home = () => {
  return (
    <main className="home section-padding">
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
      </section>
    </main>
  );
};

export default Home;
