import { createCardSet } from './CardSetActions';
import { vi } from 'vitest';

it('save to local storage new card set and redirect', () => {
  vi.mock('uuid', () => {
    return { v4: () => '12345' };
  });

  const currentDate = new Date(Date.now());
  const cardSets = [
    { name: 'test', createdAt: currentDate.toISOString() },
    { name: 'test 2', createdAt: new Date(2020, 10, 5, 10, 20, 10, 0).toISOString() },
  ];
  createCardSet(cardSets[0]);
  createCardSet(cardSets[1]);

  expect(JSON.parse(localStorage.getItem('cardSet'))).toEqual([
    { id: '12345', ...cardSets[0] },
    { id: '12345', ...cardSets[1] },
  ]);
});
