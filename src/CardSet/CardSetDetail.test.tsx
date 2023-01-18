import { render, screen } from '@testing-library/react';
import CardSetDetails from './CardSetDetail';
import { Routes, MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

it('display name and add card button that link to new card creator', async () => {
  render(
    <MemoryRouter initialEntries={['/123456']} initialIndex={0}>
      <Routes>
        <Route
          path="/:cardSetId"
          element={
            <CardSetDetails
              cardSet={{ id: '1234', name: 'test', createdAt: new Date(2022, 10, 5, 12, 22, 34, 55).toISOString() }}
            />
          }
        />

        <Route path="/:cardSetId/card" element="New card" />
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByText('test')).toBeInTheDocument();

  userEvent.click(screen.getByRole('link', { name: 'Add card' }));

  expect(await screen.findByText('New card')).toBeInTheDocument();

  expect(screen.queryByRole('link', { name: 'Add card' })).not.toBeInTheDocument();
});
