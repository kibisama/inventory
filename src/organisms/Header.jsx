import Grid from '@mui/material/Grid2';
import Tools from '../molecules/Tools';

const Header = () => {
  return (
    <Grid container>
      <Grid size={3}>El Camino Pharmacy</Grid>
      <Grid size={3}>Search</Grid>
      <Grid size={3} />
      <Grid size={3}>
        <Tools />
      </Grid>
    </Grid>
  );
};

export default Header;
