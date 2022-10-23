export interface Data {
  data: MtgCards[];
  has_more: boolean;
  next_page: string;
  object: string;
  total_cards: number;
}

type CardFaceItem = {
  image_uris: {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
  };
  name: string;
};

export type MtgCards = {
  artist: string;
  card_faces: CardFaceItem[];
  cmc: number;
  color_identity: string[];
  colors: string[];
  id: string;
  image_uris: {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
  };
  keywords: [];
  layout: string;
  mana_cost: string;
  multiverse_id: [];
  name: string;
  oracle_text: string;
  originalType: string;
  power: string;
  rarity: string;
  set: string;
  set_name: string;
  toughness: string;
  type_line: string;
};
