import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetCardinalInvoice,
  asyncPostCardinalInvoice,
  setDate,
} from '../../../../reduxjs@toolkit/cardinalInvoiceSlice';
import dayjs from 'dayjs';
import { Box, Button } from '@mui/material';
import MyDatePicker from '../../../molecules/MyDatePicker';
import NoResultFoundImage from '../../../molecules/NoResultsImage';
import PreviewSummary from '../PreviewSummary';

const style = {
  container: {
    width: '100%',
    mt: 0.5,
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    my: 1,
    mx: 8,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    minWidth: 140,
  },
};

const Preview = () => {
  const dispatch = useDispatch();
  const today = dayjs();
  const { date, previewData } = useSelector((state) => state.cardinalInvoice);

  const handleDateChange = React.useCallback(
    (value) => {
      dispatch(setDate(value.format('MM-DD-YYYY')));
    },
    [dispatch],
  );
  const onClickReview = React.useCallback(() => {
    dispatch(asyncPostCardinalInvoice(date));
  }, [dispatch, date]);

  React.useEffect(() => {
    dispatch(asyncGetCardinalInvoice(date));
  }, [dispatch, date]);

  return (
    <Box sx={style.container}>
      <Box sx={style.top}>
        <MyDatePicker
          slotProps={{ textField: { size: 'small' } }}
          label="Invoice Date"
          value={dayjs(date)}
          maxDate={today}
          onChange={handleDateChange}
        />
        {previewData ? (
          <Button
            variant="outlined"
            sx={style.button}
            children="review"
            onClick={onClickReview}
          />
        ) : (
          <Button
            variant="outlined"
            sx={style.button}
            children="find invoice"
          />
        )}
      </Box>
      <Box sx={style.bottom}>
        {previewData ? (
          <PreviewSummary data={previewData} />
        ) : (
          <NoResultFoundImage />
        )}
      </Box>
    </Box>
  );
};

export default Preview;
