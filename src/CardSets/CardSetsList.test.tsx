import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import CardSetsList from './CardSetsList';

it('render list of cards sets', () => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route
          path="/"
          element={
            <CardSetsList
              sets={[
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
              ]}
            />
          }
        />
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByRole('list')).toBeInTheDocument();

  const items = screen.getAllByRole('listitem');

  expect(items).toHaveLength(2);

  expect(within(items[0]).getByText('card set 1')).toBeInTheDocument();
  expect(within(items[1]).getByText('card set 2')).toBeInTheDocument();
});

it('allow user navigate to card set details', async () => {
  const CardSetDetailMock = () => {
    const { cardSetId } = useParams();
    return <>{`Card set: ${cardSetId}`}</>;
  };
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route
          path="/"
          element={
            <CardSetsList
              sets={[
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
              ]}
            />
          }
        />

        <Route path="/card-set/:cardSetId" element={<CardSetDetailMock />} />
      </Routes>
    </MemoryRouter>,
  );

  const items = screen.getAllByRole('listitem');

  const link = within(items[0]).getByRole('link');

  userEvent.click(link);

  expect(await screen.findByText('Card set: 1'));
});
