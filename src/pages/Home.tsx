import { Box } from '@mui/material';
import { Header } from '@src/pages/components/Header';
import { Shop } from '@src/pages/Shop';

export const Home = () => {
  return (
    <Box sx={{ width: '100vw', padding: '0 1.5rem', overflow: 'hidden' }}>
      <Header />
      <Shop />
    </Box>
  );
};
