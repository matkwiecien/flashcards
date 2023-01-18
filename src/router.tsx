import { createBrowserRouter, redirect } from 'react-router-dom';

import CardSetCreator from './CardSet/CardSetCreator';
import { createCardSet } from './CardSet/CardSetActions';
import { CardSet } from './CardSet/interfaces';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardSetCreator />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const values = Object.fromEntries(formData) as CardSet;
      const cardSet = createCardSet(values);
      return redirect(`/${cardSet.id}`);
    },
  },
]);

export default router;
