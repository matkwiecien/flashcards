import { createBrowserRouter, redirect } from 'react-router-dom';

import CardSetCreator from './CardSet/CardSetCreator';
import CardSetDetailLoader from './CardSet/CardSetDetailLoader';
import { createCardSet } from './CardSet/CardSetActions';
import { loadCardSet } from './CardSet/CardSetLoaders';
import { CardSet } from './CardSet/interfaces';

const router = createBrowserRouter([
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
  },
]);

export default router;
