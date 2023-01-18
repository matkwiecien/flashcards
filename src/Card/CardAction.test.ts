import { createCard } from './CardAction';

it('create new cards and save it in local storage', () => {
  const cards = [
    {
      id: '2',
      createdAt: new Date(2021, 10, 12, 11, 5, 21, 100).toISOString(),
      question: 'Questoion 2?',
      response: 'response 2',
    },
    {
      id: '3',
      createdAt: new Date(2021, 10, 12, 11, 5, 21, 100).toISOString(),
      question: 'Questoion 3?',
      response: 'response 3',
    },
  ];

  createCard('1', cards[0]);
  expect(JSON.parse(localStorage.getItem('card-1'))).toEqual([cards[0]]);

  createCard('1', cards[1]);
  expect(JSON.parse(localStorage.getItem('card-1'))).toEqual([cards[1], cards[0]]);
});
