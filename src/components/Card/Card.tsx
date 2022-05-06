import { MtgCards } from '../../types/MtgCards';
import { Wrapper } from './Card.style';

type Props = {
  card: MtgCards;
};

export const Card: React.FC<Props> = ({ card }) => (
  <Wrapper>
    <div>
      <h3>
        {card.name} - {card.setName}
      </h3>
      <img src={card.imageUrl} alt={card.name} />
    </div>
  </Wrapper>
);
