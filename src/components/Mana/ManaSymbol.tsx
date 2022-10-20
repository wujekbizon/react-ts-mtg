import './ManaSymbol.scss';
import Mountain from '../../assets/images/Mountain.png';
import Swamp from '../../assets/images/Swamp.png';
import Forest from '../../assets/images/Forest.png';
import Island from '../../assets/images/Island.png';
import Plains from '../../assets/images/Plains.png';
import Colorless from '../../assets/images/Colorless.png';
import { useAppSelector } from '../../types/hooks';

const ManaSymbol = () => {
  const { manaSymbol } = useAppSelector((state) => state.home);

  return (
    <div className="colorless-mana">
      {manaSymbol === 'black' && (
        <img src={Swamp} alt="swamp" className="mana" />
      )}
      {manaSymbol === 'red' && (
        <img src={Mountain} alt="mountain" className="mana" />
      )}
      {manaSymbol === 'green' && (
        <img src={Forest} alt="forest" className="mana" />
      )}
      {manaSymbol === 'white' && (
        <img src={Plains} alt="plains" className="mana" />
      )}
      {manaSymbol === 'blue' && (
        <img src={Island} alt="island" className="mana" />
      )}
      {manaSymbol === 'colorless' && (
        <img src={Colorless} alt="colorless" className="mana" />
      )}
    </div>
  );
};

export default ManaSymbol;
