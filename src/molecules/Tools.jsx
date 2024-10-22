import Grid from '@mui/material/Grid2';
import QrCodeScannerButton from './containers/Tools/QrCodeScannerButton';
import DarkModeButton from './containers/Tools/DarkModeButton';
import ExpandTreeButtons from './containers/Tools/ExpandTreeButton';
import TaskButton from './containers/Tools/TaskButton';

// Grid 대신 style Flexbox 활용하자
const Tools = () => {
  return (
    <Grid container>
      <Grid size={2}>
        <QrCodeScannerButton />
      </Grid>
      <Grid size={2}>
        <ExpandTreeButtons />
      </Grid>
      <Grid size={2}>
        <TaskButton />
      </Grid>
      <Grid size={2}>Alert</Grid>
      <Grid size={2}>Option</Grid>
      <Grid size={2}>
        <DarkModeButton />
      </Grid>
    </Grid>
  );
};

export default Tools;
