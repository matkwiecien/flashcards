import { AppBar, Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const HeaderLayout = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ p: 2 }}>
        <Typography variant="h5" component="h1">
          Flashcards
        </Typography>
      </AppBar>
      <Box sx={{ px: 2, py: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HeaderLayout;
