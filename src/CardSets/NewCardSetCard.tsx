import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import CardTitle from '../common/CardTitle';
import { centerContainer } from '../style/composition';
import { height100p } from '../style/utilities';

const NewCardSetCard = () => {
  return (
    <Card sx={{ flex: 1 }}>
      <CardActionArea component={RouterLink} to={`/card-set`} sx={{ ...height100p, ...centerContainer }}>
        <CardContent>
          <CardTitle>Add new card set</CardTitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewCardSetCard;
