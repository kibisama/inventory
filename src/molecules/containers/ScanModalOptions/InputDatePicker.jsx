import React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setInputDate } from '../../../reduxjs@toolkit/scanSlice';
import MyDatePicker from '../../../atoms/MyDatePicker';

const style = {
  width: 180,
};

const InputDatePicker = (props) => {
  const dispatch = useDispatch();
  const { inputDate } = useSelector((state) => state.scan);
  const handleChange = React.useCallback(
    (dayjs) => {
      dispatch(setInputDate(dayjs.format()));
    },
    [dispatch],
  );

  return (
    <MyDatePicker
      sx={style}
      label="Date Received"
      value={dayjs(inputDate)}
      onChange={handleChange}
      disabled={props.disabled}
    />
  );
};

export default InputDatePicker;
