import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const MyDatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
