import { useSubmit } from 'react-router-dom';
import CardSetForm from './CardSetForm';

const CardSetCreator = () => {
  const submit = useSubmit();
  return (
    <CardSetForm
      onSubmit={(cardSet) => {
        submit({ ...cardSet, createdAt: cardSet.createdAt.toISOString() }, { method: 'post' });
      }}
    />
  );
};

export default CardSetCreator;
