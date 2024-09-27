import React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setDateIn } from '../../../reduxjs@toolkit/scanSlice';
import MyDatePicker from '../../../atoms/MyDatePicker';

const style = {
  width: 180,
};

const DateInDatePicker = () => {
  const dispatch = useDispatch();
  const { dateIn } = useSelector((state) => state.scan);
  const handleChange = React.useCallback(
    (dayjs) => {
      dispatch(setDateIn(dayjs.format()));
    },
    [dispatch],
  );

  return (
    <MyDatePicker
      sx={style}
      label="Date Received"
      value={dayjs(dateIn)}
      onChange={handleChange}
    />
  );
};

export default DateInDatePicker;
