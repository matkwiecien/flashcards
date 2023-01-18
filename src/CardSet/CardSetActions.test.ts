import { createCardSet } from './CardSetActions';
import { vi } from 'vitest';

it('save to local storage new card set and redirect', () => {
  const currentDate = new Date(Date.now());
  const cardSets = [
    { id: '12345', name: 'test', createdAt: currentDate.toISOString() },
    { id: '56789', name: 'test1', createdAt: new Date(2020, 10, 5, 10, 20, 10, 0).toISOString() },
  ];
  createCardSet(cardSets[0]);
  createCardSet(cardSets[1]);

  //@ts-ignore
  expect(JSON.parse(localStorage.getItem('cardSet'))).toEqual([cardSets[0], cardSets[1]]);
});
