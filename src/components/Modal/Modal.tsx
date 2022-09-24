import './Modal.scss';

type Props = {
  active: boolean;
  imgSrc: string;
  onClick: () => void;
};

const Modal = ({ active, imgSrc, onClick }: Props) => {
  return (
    <aside className={active ? 'active' : 'modal'}>
      <div className="mana-img">
        <img src={imgSrc} alt="mana-symbol" onClick={onClick} />
      </div>
    </aside>
  );
};
export default Modal;
