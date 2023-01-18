import { v4 as uuidv4 } from 'uuid';
import { CardSet } from './interfaces';

export const createCardSet = (cardSet: CardSet) => {
  const newCardSet = { id: uuidv4(), ...cardSet };
  const cardSets = localStorage.getItem('cardSet') !== null ? JSON.parse(localStorage.getItem('cardSet')) : [];

  localStorage.setItem('cardSet', JSON.stringify([...cardSets, newCardSet]));
  return newCardSet;
};
