export const loadCards = (cardSetId: string) => {
  const cardsData = localStorage.getItem(`card-${cardSetId}`);
  const cards = cardsData ? JSON.parse(cardsData) : [];
  return cards;
};
