import { Card, CardActionArea, CardContent } from '@mui/material';

import { Link as RouterLink, To } from 'react-router-dom';
import CardTitle from '../common/CardTitle';
import { centerContainer } from '../style/composition';
import { height100p } from '../style/utilities';

type AddNewCardProps = {
  to: To;
  children: string;
};

const AddNewCard = ({ to, children }: AddNewCardProps) => {
  return (
    <Card>
      <CardActionArea component={RouterLink} to={to} sx={{ ...height100p, ...centerContainer }}>
        <CardContent>
          <CardTitle>{children}</CardTitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AddNewCard;
