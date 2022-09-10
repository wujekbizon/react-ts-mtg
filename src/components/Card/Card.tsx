import { MtgCards } from '../../types/MtgCards';
import { Wrapper } from './Card.style';
import { Button } from '@mui/material';

type Props = {
  card: MtgCards;
  handleAddToDeck: (clickedCard: MtgCards) => void;
};

const Card: React.FC<Props> = ({ card, handleAddToDeck }) => (
  <Wrapper>
    <div id="wrapper">
      {/* <h3>
        {card.name} - {card.set_name}
      </h3> */}
      <div>
        <img src={card.image_uris?.border_crop} alt={card.name} />
      </div>
    </div>
    <Button
      className="button"
      variant="text"
      onClick={() => handleAddToDeck(card)}
    >
      Add to Collection
    </Button>
  </Wrapper>
);

export default Card;
