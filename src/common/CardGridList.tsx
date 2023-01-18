import { Grid, List } from '@mui/material';

const CardGridList = ({ children }: any) => {
  return (
    <Grid component={List} container alignItems="stretch">
      {children}
    </Grid>
  );
};

export default CardGridList;
