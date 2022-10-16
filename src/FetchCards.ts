import { MtgCards } from './types/MtgCards';
import axios from 'axios';

export const getAllCards = async (
  page: number,
  color: string
): Promise<MtgCards[]> => {
  const response = await axios.get(
    `https://api.scryfall.com/cards/search?q=c%3A${color}`,
    {
      params: {
        page,
      },
    }
  );

  return response.data.data;
};
