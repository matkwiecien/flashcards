import Typography from '@mui/material/Typography';

type CardTitleProps = {
  children: string;
};

const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {children}
    </Typography>
  );
};

export default CardTitle;
