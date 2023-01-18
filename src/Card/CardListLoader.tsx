import CardList from '../CardSet/CardList';
import { useLoaderData } from 'react-router-dom';
import { Card } from './interfaces';

const CardListLoader = () => {
  const cards = useLoaderData() as Card[];
  return <CardList cards={cards} />;
};

export default CardListLoader;
