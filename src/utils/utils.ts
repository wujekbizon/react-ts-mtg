import { MtgCards } from '../types/MtgCards';

const paginate = (cards: MtgCards[]) => {
  const itemsPerPage = 60;
  const pages = Math.ceil(cards.length / itemsPerPage);

  const newCards = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return cards.slice(start, start + itemsPerPage);
  });
  return newCards;
};

export default paginate;
