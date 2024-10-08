export type CardData = {
  name: string;
  playrate: string;
  inclusion: string;
  num_decks: string;
  potential_decks: string;
  aetherhub_uri: string;
  archidekt_uri: string;
  color_identity: [string, string];
  cmc: number;
  deckstats_uri: string;
  image_normal: string;
  image_crop: string;
  layout: string;
  moxfield_uri: string;
  mtggoldfish_uri: string;
  names: [string];
  prices: {
    cardhoarder: {
      price: number;
      url: string;
    };
    cardkingdom: {
      price: number;
      url: string;
    };
    cardmarket: {
      price: number;
      set: string;
      url: string;
    };
    face2face: {
      price: number;
      url: string;
    };
    mtgstocks: string;
    scg: { price: number; slug: string };
    tcgplayer: {
      price: number;
      url: string;
    };
    tcgl: { price: number; slug: string };
  };
  primary_type: string;
  rarity: string;
  salt: number;
  sanitized: string;
  sanitized_wo: string;
  scryfall_uri: string;
  spellbook_uri: string;
  type: string;
  combos: boolean;
  label: string;
  new: boolean;
  url: string;
} | null;

export function CheckCardType(card: any): boolean {
  console.log(typeof card.container);
  return (
    card &&
    typeof card.container === "object" &&
    typeof card.container.json_dict === "object" &&
    typeof card.container.json_dict.card === "object"
  );
}

export type Catalog = {
  data: [string];
};
