import { CardSet } from '../CardSet/interfaces';
import { Link as RouterLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import NewCardSetCard from './NewCardSetCard';
import { Grid } from '@mui/material';
import { cardGrid } from '../style/composition';

type CardSetsListProps = {
  sets: CardSet[];
};

const CardSetsList = ({ sets }: CardSetsListProps) => {
  return (
    <Grid component={List} container alignItems="stretch" justifyContent="stretch" justifyItems="stretch">
      <Grid item component={ListItem} xs={12} sm={6} md={4} lg={3} sx={{ ...cardGrid }}>
        <NewCardSetCard />
      </Grid>

      {sets.map(({ id, name }) => (
        <Grid item component={ListItem} key={id} xs={12} sm={6} md={4} lg={3} sx={{ ...cardGrid }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to={`/card-set/${id}`}>
                Add card
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSetsList;
