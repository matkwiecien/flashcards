import CardSetDetail from './CardSetDetail';
import { useLoaderData } from 'react-router-dom';
import { CardSet } from './interfaces';

const CardSetDetailLoader = () => {
  const cardSet = useLoaderData() as CardSet;
  return <CardSetDetail cardSet={cardSet} />;
};

export default CardSetDetailLoader;
