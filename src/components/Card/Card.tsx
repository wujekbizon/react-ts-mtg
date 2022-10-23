import { useState } from 'react';
import { MtgCards } from '../../types/MtgCards';
import { Wrapper } from './Card.style';
// import { Button } from '@mui/material';
import { Button } from '../../components';

type Props = {
  card: MtgCards;
  handleAddToDeck: (clickedCard: MtgCards) => void;
};

const Card: React.FC<Props> = ({ card, handleAddToDeck }) => {
  const [imageFlip, setImageFlip] = useState(false);

  return (
    <Wrapper>
      <div id="wrapper">
        {card.card_faces && (
          <Button
            className={imageFlip ? 'btn-flip btn-flipped' : 'btn-flip'}
            onClick={() => setImageFlip(!imageFlip)}
          >
            <svg focusable="false" aria-hidden="true" viewBox="0 0 1024 1024">
              <path d="M884.3,357.6c116.8,117.7,151.7,277-362.2,320V496.4L243.2,763.8L522,1031.3V860.8C828.8,839.4,1244.9,604.5,884.3,357.6z"></path>
              <path d="M557.8,288.2v138.4l230.8-213.4L557.8,0v142.8c-309.2,15.6-792.1,253.6-426.5,503.8C13.6,527.9,30,330.1,557.8,288.2z"></path>
            </svg>
          </Button>
        )}
        {card.card_faces && (
          <div className={imageFlip ? 'flipped' : 'back-flipped'}>
            {imageFlip ? (
              <img
                src={
                  card.card_faces[1]?.image_uris?.border_crop ||
                  card.image_uris?.border_crop
                }
                alt={card.name}
              />
            ) : (
              <img
                src={
                  card.card_faces[0]?.image_uris?.border_crop ||
                  card.image_uris?.border_crop
                }
                alt={card.name}
              />
            )}
          </div>
        )}
        {!card.card_faces && (
          <div>
            <img src={card.image_uris?.border_crop} alt={card.name} />
          </div>
        )}
      </div>
      <Button className="button " onClick={() => handleAddToDeck(card)}>
        Add to Collection
      </Button>
    </Wrapper>
  );
};

export default Card;
