import { Button } from '@mui/material';
import { CardSet } from './interfaces';
import { Link as RouterLink, useLocation, Outlet } from 'react-router-dom';

type CardSetDetailProps = {
  cardSet: CardSet;
};

const CardSetDetail = ({ cardSet }: CardSetDetailProps) => {
  const location = useLocation();

  return (
    <div>
      {cardSet.name}
      <Button component={RouterLink} to={`${location.pathname}/card`}>
        Add card
      </Button>
      <Outlet />
    </div>
  );
};

export default CardSetDetail;
