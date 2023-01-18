import { Button } from '@mui/material';
import { CardSet } from '../CardSet/interfaces';
import { Link as RouterLink, useLocation } from 'react-router-dom';

type CardSetsListProps = {
  sets: CardSet[];
};

const CardSetsList = ({ sets }: CardSetsListProps) => {
  return (
    <ul>
      {sets.map(({ id, name }) => (
        <li key={id}>
          {name}
          <Button component={RouterLink} to={`/card-set/${id}`}>
            Add card
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default CardSetsList;
