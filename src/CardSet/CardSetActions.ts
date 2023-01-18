import { CardSet } from './interfaces';

export const createCardSet = (cardSet: CardSet) => {
  const cardSetData = localStorage.getItem('cardSet');
  const cardSets = cardSetData !== null ? JSON.parse(cardSetData) : [];

  localStorage.setItem('cardSet', JSON.stringify([...cardSets, cardSet]));
  return cardSet;
};
