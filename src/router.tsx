import { createBrowserRouter, redirect } from 'react-router-dom';

import CardSetCreator from './CardSet/CardSetCreator';
import CardSetDetailLoader from './CardSet/CardSetDetailLoader';
import { createCardSet } from './CardSet/CardSetActions';
import { loadCardSet } from './CardSet/CardSetLoaders';

import { createCard } from './Card/CardAction';

import { CardSet } from './CardSet/interfaces';
import CardCreator from './Card/CardCreator';
import { Card } from './Card/interfaces';
import CardListLoader from './Card/CardListLoader';
import { loadCards } from './Card/CardLoaders';
import CardSets from './CardSets/CardSets';
import { loadCardSets } from './CardSets/CardSetsLoader';
import HeaderLayout from './common/HeaderLayout';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <CardSets />,
        loader: () => {
          return loadCardSets();
        },
      },
      {
        path: '/card-set',
        element: <CardSetCreator />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const values = Object.fromEntries(formData) as CardSet;
          const cardSet = createCardSet(values);
          return redirect(`/card-set/${cardSet.id}`);
        },
      },
      {
        path: '/card-set/:cardSetId',
        loader: ({ params }) => {
          if (!params.cardSetId) {
            throw new Response('Not Found', { status: 404 });
          }

          const cardSet = loadCardSet(params.cardSetId);
          if (!cardSet) {
            throw new Response('Not Found', { status: 404 });
          }

          return cardSet;
        },
        element: <CardSetDetailLoader />,
        children: [
          {
            path: '/card-set/:cardSetId',
            element: <CardListLoader />,
            loader: ({ params }) => {
              const { cardSetId } = params;
              if (!cardSetId) {
                throw new Response('Not Found', { status: 404 });
              }

              const cards = loadCards(cardSetId);
              return cards;
            },
          },
        ],
      },
      {
        path: 'card-set/:cardSetId/card',
        element: <CardCreator />,
        action: async ({ request, params }) => {
          const { cardSetId } = params;
          if (!cardSetId) {
            throw new Response('Not Found', { status: 404 });
          }

          const formData = await request.formData();
          const values = Object.fromEntries(formData) as Card;

          createCard(cardSetId, values);

          return redirect(`/card-set/${cardSetId}`);
        },
      },
    ],
  },
]);

export default router;
