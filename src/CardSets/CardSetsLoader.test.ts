import { loadCardSets } from './CardSetsLoader';

it('load card se base on card set id', () => {
  const cardSet = [
    {
      id: '1',
      name: 'card set 1',
      createdAt: new Date(2020, 1, 12, 6, 10, 9, 20).toISOString(),
    },
    {
      id: '2',
      name: 'card set 2',
      createdAt: new Date(2020, 1, 8, 10, 20, 15, 40).toISOString(),
    },
  ];

  localStorage.setItem('cardSet', JSON.stringify(cardSet));

  expect(loadCardSets()).toEqual(cardSet);
});
