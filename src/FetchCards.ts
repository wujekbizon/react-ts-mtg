import { MtgCards } from './types/MtgCards';

export const getAllCards = async (): Promise<MtgCards[]> => {
  const response = await (
    await fetch('https://api.magicthegathering.io/v1/cards')
  ).json();

  return response.cards;
};
