import { MtgCards } from '../../types/MtgCards';
import { Wrapper } from './Card.style';
import { Button } from '@mui/material';

type Props = {
  card: MtgCards;
  handleAddToDeck: (clickedCard: MtgCards) => void;
};

export const Card: React.FC<Props> = ({ card, handleAddToDeck }) => (
  <Wrapper>
    <div id="wrapper">
      <h3>
        {card.name} - {card.set_name}
      </h3>
      <div>
        <img src={card.image_uris?.large} alt={card.name} />
      </div>
    </div>
    <Button
      className="button"
      variant="outlined"
      onClick={() => handleAddToDeck(card)}
    >
      Add to Deck
    </Button>
  </Wrapper>
);
