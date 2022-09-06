import { MtgCards } from './types/MtgCards';
import axios from 'axios';

export const getAllCards = async (): Promise<MtgCards[]> => {
  const response = await axios.get(
    'https://api.scryfall.com/cards/search?q=c%3Ared'
  );

  return response.data.data;
};
