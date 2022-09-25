import './Modal.scss';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { activateLand, setManaSymbol } from '../../state/homeSlice';

type Props = {
  imgSrc: string;
};

const Modal = ({ imgSrc }: Props) => {
  const { isActiveLand } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  return (
    <aside className={isActiveLand ? 'active' : 'modal'}>
      <div className="mana-img">
        <img
          src={imgSrc}
          alt="mana-symbol"
          onClick={() => dispatch(activateLand())}
        />
      </div>
    </aside>
  );
};
export default Modal;
