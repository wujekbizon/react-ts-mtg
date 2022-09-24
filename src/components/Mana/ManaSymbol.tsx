import './ManaSymbol.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';

type Props = {
  mana: string;
};

const ManaSymbol = ({ mana }: Props) => {
  return (
    <div className="colorless-mana">
      {mana === 'black' && <img src={Swamp} alt="swamp" className="mana" />}
      {mana === 'red' && <img src={Mountain} alt="mountain" className="mana" />}
      {mana === 'green' && <img src={Forest} alt="forest" className="mana" />}
      {mana === 'white' && <img src={Plains} alt="plains" className="mana" />}
      {mana === 'blue' && <img src={Island} alt="island" className="mana" />}
      {mana === '1' && <span>1</span>}
    </div>
  );
};

export default ManaSymbol;
