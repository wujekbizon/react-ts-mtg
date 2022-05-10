import { MtgCards } from './types/MtgCards';
import axios from 'axios';

export const getAllCards = async (): Promise<MtgCards[]> => {
  const response = await axios.get('https://api.magicthegathering.io/v1/cards');

  return response.data.cards;
};
