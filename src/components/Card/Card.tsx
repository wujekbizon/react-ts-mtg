import { MtgCards } from '../../types/MtgCards';
import { Wrapper } from './Card.style';
import { Button } from '@material-ui/core';
type Props = {
  card: MtgCards;
  handleAddToDeck: (clickedCard: MtgCards) => void;
};

export const Card: React.FC<Props> = ({ card, handleAddToDeck }) => (
  <Wrapper>
    <div id="wrapper">
      <h3>
        {card.name} - {card.setName}
      </h3>
      <img src={card.imageUrl} alt={card.name} />
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
