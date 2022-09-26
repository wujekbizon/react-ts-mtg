import './Modal.scss';
import { useAppSelector, useAppDispatch } from '../../types/hooks';

type Props = {
  imgSrc: string;
  isActive: boolean;
  setActive: () => void;
};

const Modal = ({ imgSrc, isActive, setActive }: Props) => {
  return (
    <aside className={isActive ? 'active' : 'modal'}>
      <div className="mana-img">
        <img src={imgSrc} alt="mana-symbol" onClick={setActive} />
      </div>
    </aside>
  );
};
export default Modal;
