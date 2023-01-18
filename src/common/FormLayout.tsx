import { Card, CardContent, Grid } from '@mui/material';
import { columnLayout } from '../style/composition';

const FormLayout = ({ children }: any) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent sx={{ ...columnLayout }}>{children}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FormLayout;
