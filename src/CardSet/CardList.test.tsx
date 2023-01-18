import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
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

const renderCardList = () => {
  render(
    <MemoryRouter initialEntries={['/123456']} initialIndex={0}>
      <Routes>
        <Route path="/:cardSetId" element={<CardList cards={cardList} />} />

        <Route path="/:cardSetId/card" element="New card" />
      </Routes>
    </MemoryRouter>,
  );
};

it('display add card on begining of list', async () => {
  renderCardList();

  const cardListItems = screen.getAllByRole('listitem');
  const newCard = cardListItems[0];
  const newCardButton = within(newCard).getByRole('link', { name: 'Add card' });

  expect(newCardButton).toBeInTheDocument();

  userEvent.click(newCardButton);

  expect(await screen.findByText('New card')).toBeInTheDocument();
});

it('display list of cards with question and show response after show button was clicked', async () => {
  renderCardList();

  const cardListItems = screen.getAllByRole('listitem');
  expect(cardListItems).toHaveLength(4);

  expectCardListItemToHaveQuestion(cardListItems[1], 'Question 1');
  expectCardListItemToHaveQuestion(cardListItems[2], 'Question 2');
  expectCardListItemToHaveQuestion(cardListItems[3], 'Question 3');

  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[1], 'Response 1');
  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[2], 'Response 2');
  await expectCardListItemToHaveVisibleResponseAfterShowResponseButtonClicked(cardListItems[3], 'Response 3');
});

it('response is hidden before the button show is clicked', () => {
  renderCardList();

  const cardListItems = screen.getAllByRole('listitem');

  expect(within(cardListItems[1]).queryByText(cardList[0].response)).not.toBeInTheDocument();
});

it('when response is visible user can click hide resoponse button', async () => {
  renderCardList();

  const cardListItems = screen.getAllByRole('listitem');

  showResponse(cardListItems[1]);

  userEvent.click(await within(cardListItems[1]).findByRole('button', { name: 'Hide response' }));

  await waitForElementToBeRemoved(() => within(cardListItems[1]).queryByText(cardList[0].response));
});
