import { Button, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import AddNewCard from '../common/AddNewCard';
import CardGridList from '../common/CardGridList';
import CardGridListItem from '../common/CardGridListItem';
import CardTitle from '../common/CardTitle';
import { TCard } from '../Card/interfaces';
import { useLocation } from 'react-router-dom';

type CardListItemProps = {
  card: TCard;
};

const CardListItem = ({ card }: CardListItemProps) => {
  const [responseVisible, setResponseVisible] = useState(false);

  const toggleResponseVisbility = () => {
    setResponseVisible((visible) => !visible);
  };
  return (
    <Card>
      <CardContent>
        <CardTitle>{card.question}</CardTitle>
        <Button onClick={toggleResponseVisbility}>{responseVisible ? 'Hide response' : 'Show response'}</Button>
        {responseVisible && <CardTitle>{card.response}</CardTitle>}
      </CardContent>
    </Card>
  );
};

type CardListProps = {
  cards: TCard[];
};

const CardList = ({ cards }: CardListProps) => {
  const location = useLocation();

  return (
    <CardGridList>
      <CardGridListItem>
        <AddNewCard to={`${location.pathname}/card`}>Add card</AddNewCard>
      </CardGridListItem>
      {cards.map((card) => (
        <React.Fragment key={card.id}>
          <CardGridListItem>
            <CardListItem card={card} />
          </CardGridListItem>
        </React.Fragment>
      ))}
    </CardGridList>
  );
};

export default CardList;
