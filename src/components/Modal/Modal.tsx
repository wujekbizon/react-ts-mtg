import './Modal.scss';

type Props = {
  imgSrc: string;
  isActive: boolean;
  setActive: () => void;
};

const Modal = ({ imgSrc, isActive, setActive }: Props) => {
  return (
    <aside className={isActive ? 'active-modal' : 'modal'}>
      <div className="mana-img">
        <img src={imgSrc} alt="mana-symbol" onClick={setActive} />
      </div>
    </aside>
  );
};
export default Modal;
