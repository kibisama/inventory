import { Box } from '@mui/material';
import OriginSelector from './containers/ScanModalOptions/OriginSelector';
import DateInDatePicker from './containers/ScanModalOptions/DateInDatePicker';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0.5rem',
};

const ScanModalOptions = (props) => {
  return (
    <Box style={style}>
      <OriginSelector />
      <DateInDatePicker />
    </Box>
  );
};

export default ScanModalOptions;
