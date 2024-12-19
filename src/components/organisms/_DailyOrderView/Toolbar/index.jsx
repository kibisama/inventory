import React from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import MyDatePicker from '../../../molecules/MyDatePicker';
import { asyncGetDailyOrder } from '../../../../reduxjs@toolkit/orderSlice';
import { useDispatch } from 'react-redux';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Toolbar = () => {
  const dispatch = useDispatch();
  const today = dayjs();
  const [date, setDate] = React.useState(today);
  const timeout = React.useRef(null);
  const handleChange = (value) => {
    setDate(value);
  };
  const dispatchFn = () => {
    timeout.current = setTimeout(() => dispatchFn(), 30000);
    dispatch(asyncGetDailyOrder(date.format('MM-DD-YYYY')));
  };
  React.useEffect(() => {
    dispatchFn();
    return () => clearTimeout(timeout.current);
  }, [date]);
  return (
    <Box sx={style.container}>
      <MyDatePicker
        slotProps={{ textField: { size: 'small' } }}
        value={date}
        maxDate={today}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Toolbar;
