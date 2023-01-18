import { useSubmit } from 'react-router-dom';

import CardForm from './CardForm';

const CardCreator = () => {
  const submit = useSubmit();
  return (
    <CardForm
      onSubmit={(card) => {
        submit(card, { method: 'post' });
      }}
    />
  );
};

export default CardCreator;
