import './Modal.scss';

type Props = {
  active: boolean;
  imgSrc: string;
  onClick: () => void;
  altName: string;
};

const Modal = ({ active, imgSrc, onClick, altName }: Props) => {
  return (
    <aside className={active ? 'active' : 'modal'}>
      <div className="mana-img">
        <img src={imgSrc} alt={altName} onClick={onClick} />
      </div>
    </aside>
  );
};
export default Modal;
