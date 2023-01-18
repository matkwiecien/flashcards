import { CardSet } from './interfaces';

export const loadCardSet = (cardSetId: string) => {
  const cardSetsData = localStorage.getItem('cardSet');
  const cardSets: CardSet[] = cardSetsData !== null ? JSON.parse(cardSetsData) : [];

  const cardSet = cardSets.find((cardSet) => cardSet.id === cardSetId);

  return cardSet;
};
