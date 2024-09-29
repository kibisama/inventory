import Grid from '@mui/material/Grid2';
import QrCodeScannerButton from './containers/Tools/QrCodeScannerButton';
import ScanModal from '../organisms/ScanModal';
import DarkModeSwitch from './containers/Tools/DarkModeSwitch';

// Grid 대신 style Flexbox 활용하자
const Tools = () => {
  return (
    <Grid container>
      <Grid size={3}>
        <QrCodeScannerButton />
      </Grid>
      <Grid size={3}>Report</Grid>
      <Grid size={3}>Alert</Grid>
      <Grid size={3}>
        <DarkModeSwitch />
      </Grid>
      <ScanModal />
    </Grid>
  );
};

export default Tools;
