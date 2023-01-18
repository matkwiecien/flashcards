import { Grid, ListItem } from '@mui/material';
import { cardGrid } from '../style/composition';

const CardGridListItem = ({ children }: any) => {
  return (
    <Grid item component={ListItem} xs={12} sm={6} md={4} lg={3} sx={{ ...cardGrid }}>
      {children}
    </Grid>
  );
};

export default CardGridListItem;
