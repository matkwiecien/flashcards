import { CardSet } from './interfaces';
import { Outlet } from 'react-router-dom';

type CardSetDetailProps = {
  cardSet: CardSet;
};

const CardSetDetail = ({ cardSet }: CardSetDetailProps) => {
  return (
    <div>
      {cardSet.name}
      <Outlet />
    </div>
  );
};

export default CardSetDetail;
