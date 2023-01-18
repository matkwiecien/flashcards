import CardSetsList from './CardSetsList';
import { useLoaderData } from 'react-router-dom';
import { CardSet } from '../CardSet/interfaces';

const CardSets = () => {
  const cardSets = useLoaderData() as CardSet[];
  return <CardSetsList sets={cardSets} />;
};

export default CardSets;
