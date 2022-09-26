import './Land.scss';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { facts } from '../../data/';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import {
  openModalTribes,
  closeModalTribes,
  openModalAbilities,
  closeModalAbilities,
} from '../../state/homeSlice';

interface LandProps {
  imgLand: string;
  isActive: boolean;
  setActive: () => void;
  title: string;
  color: string[];
  tribes: string[];
  abilities: string[];
}

const Land = ({
  imgLand,
  isActive,
  setActive,
  title,
  color,
  tribes,
  abilities,
}: LandProps) => {
  const { isOpenAbilities, isOpenTribes } = useAppSelector(
    (state) => state.home
  );
  const dispatch = useAppDispatch();

  return (
    <article className={isActive ? 'wrapper section-padding' : 'none'}>
      <div className="land-container">
        <div className="land-features">
          <div className="land-gameplay">
            <h3>Gameplay</h3>
            <p>{color[0]}</p>
          </div>
          <div className="land-bottom">
            <div className="land-abilities">
              <h3>Abilities</h3>
              {isOpenAbilities ? (
                <ArrowCircleUpIcon
                  className="icon"
                  onClick={() => dispatch(closeModalAbilities())}
                />
              ) : (
                <ExpandCircleDownIcon
                  className="icon"
                  onClick={() => dispatch(openModalAbilities())}
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
            <div className="land-tribes">
              <h3>Creature Tribes</h3>
              {isOpenTribes ? (
                <ArrowCircleUpIcon
                  className="icon"
                  onClick={() => dispatch(closeModalTribes())}
                />
              ) : (
                <ExpandCircleDownIcon
                  className="icon"
                  onClick={() => dispatch(openModalTribes())}
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
        <div className="land-info">
          <h1>{title}</h1>
          <h2>
            <span>{color[1].slice(0, 5)}</span>
            {color[1].slice(5)}
          </h2>
          <img src={imgLand} alt="mana" onClick={setActive} />
        </div>
      </div>
      <div className="facts-container">
        <div className="facts">
          <h4>* FACTS *</h4>
          <p>{facts[2].text}</p>
        </div>
      </div>
    </article>
  );
};
export default Land;
