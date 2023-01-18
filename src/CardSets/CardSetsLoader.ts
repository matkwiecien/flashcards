import { CardSet } from '../CardSet/interfaces';

export const loadCardSets = () => {
  const cardSetsData = localStorage.getItem('cardSet');
  const cardSets: CardSet[] = cardSetsData !== null ? JSON.parse(cardSetsData) : [];

  return cardSets;
};
