import { Card } from './interfaces';

export const createCard = (cardSetId: string, card: Card) => {
  const cardsPath = `card-${cardSetId}`;
  const cardsData = localStorage.getItem(cardsPath);
  const cards = cardsData ? JSON.parse(cardsData) : [];

  localStorage.setItem(cardsPath, JSON.stringify([card, ...cards]));
};
