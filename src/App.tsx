import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
