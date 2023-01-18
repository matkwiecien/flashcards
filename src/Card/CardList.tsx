import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Card } from './interfaces';

type CardListItemProps = {
  card: Card;
};

const CardListItem = ({ card }: CardListItemProps) => {
  const [responseVisible, setResponseVisible] = useState(false);

  const toggleResponseVisbility = () => {
    setResponseVisible((visible) => !visible);
  };
  return (
    <li key={card.id}>
      <div>{card.question}</div>
      <Button onClick={toggleResponseVisbility}>{responseVisible ? 'Hide response' : 'Show response'}</Button>
      {responseVisible && <div>{card.response}</div>}
    </li>
  );
};

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <ul>
      {cards.map((card) => (
        <React.Fragment key={card.id}>
          <CardListItem card={card} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default CardList;
