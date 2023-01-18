import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { centerContainer } from '../style/composition';
import { height100p } from '../style/utilities';

const NewCardSetCard = () => {
  return (
    <Card sx={{ flex: 1 }}>
      <CardActionArea component={RouterLink} to={`/card-set`} sx={{ ...height100p, ...centerContainer }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Add new card set
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewCardSetCard;
