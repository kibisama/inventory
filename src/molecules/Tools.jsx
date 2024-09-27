import Grid from '@mui/material/Grid2';
import AddItemsButton from './containers/Tools/AddItemsButton';
import RemoveItemsButton from './containers/Tools/RemoveItemsButton';
import ScanModal from '../organisms/ScanModal';
import DarkModeSwitch from './containers/Tools/DarkModeSwitch';

// Grid 대신 style Flexbox 활용하자
const Tools = () => {
  return (
    <Grid container>
      <Grid size={2}>
        <AddItemsButton />
      </Grid>
      <Grid size={2}>
        <RemoveItemsButton />
      </Grid>
      <Grid size={2}>Report</Grid>
      <Grid size={2}>Alert</Grid>
      <Grid size={4}>
        <DarkModeSwitch />
      </Grid>
      <ScanModal />
    </Grid>
  );
};

export default Tools;
