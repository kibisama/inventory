import { Box } from '@mui/material';
import OriginSelector from './containers/ScanModalOptions/OriginSelector';
import InputDatePicker from './containers/ScanModalOptions/InputDatePicker';
import ModeSelector from './containers/ScanModalOptions/ModeSelector';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0.5rem',
};

const ScanModalOptions = (props) => {
  return (
    <Box style={style}>
      <ModeSelector />
      <InputDatePicker disabled={props.mode !== 'Receive'} />
      <OriginSelector disabled={props.mode !== 'Receive'} />
    </Box>
  );
};

export default ScanModalOptions;
