import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardList from './CardList';

const cardList = [
  {
    id: '1',
    createdAt: new Date(Date.now()).toISOString(),
    question: 'Question 1',
    response: 'Response 1',
  },
  {
    id: '2',
    createdAt: new Date(Date.now()).toISOString(),
    question: 'Question 2',
    response: 'Response 2',
  },
  {
    id: '3',
    createdAt: new Date(Date.now()).toISOString(),
    question: 'Question 3',
    response: 'Response 3',
  },
];

const expectCardListItemToHaveQuestion = (cardListItem: HTMLElement, question: string) => {
  expect(within(cardListItem).getByText(question)).toBeInTheDocument();
};

const showResponse = (cardListItem: HTMLElement) => {
  const showButton = within(cardListItem).getByRole('button', { name: 'Show response' });
  userEvent.click(showButton);
};

const expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked = async (
  cardListItem: HTMLElement,
  response: string,
) => {
  showResponse(cardListItem);
  expect(await within(cardListItem).findByText(response)).toBeInTheDocument();
};

it('display list of cards with question and show response after show button was clicked', async () => {
  render(<CardList cards={cardList} />);

  const cardListItems = screen.getAllByRole('listitem');
  expect(cardListItems).toHaveLength(3);

  expectCardListItemToHaveQuestion(cardListItems[0], 'Question 1');

  expectCardListItemToHaveQuestion(cardListItems[1], 'Question 2');

  expectCardListItemToHaveQuestion(cardListItems[2], 'Question 3');

  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[0], 'Response 1');
  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[1], 'Response 2');
  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[2], 'Response 3');
});

it('response is hidden before the button show is clicked', () => {
  render(<CardList cards={cardList} />);

  const cardListItems = screen.getAllByRole('listitem');

  expect(within(cardListItems[0]).queryByText(cardList[0].response)).not.toBeInTheDocument();
});

it('when response is visible user can click hide resoponse button', async () => {
  render(<CardList cards={cardList} />);

  const cardListItems = screen.getAllByRole('listitem');

  showResponse(cardListItems[0]);

  userEvent.click(await within(cardListItems[0]).findByRole('button', { name: 'Hide response' }));

  await waitForElementToBeRemoved(() => within(cardListItems[0]).queryByText(cardList[0].response));
});
