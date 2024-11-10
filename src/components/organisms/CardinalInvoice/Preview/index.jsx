import React from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncGetCardinalInvoice,
  asyncReviewCardinalInvoice,
  asyncFindCardinalInvoice,
  setDate,
} from '../../../../reduxjs@toolkit/cardinalInvoiceSlice';
import dayjs from 'dayjs';
import { Box, Button, CircularProgress } from '@mui/material';
import MyDatePicker from '../../../molecules/MyDatePicker';
import SearchingSvg from '../../../atoms/svg/Searching';
import PreviewSummary from '../PreviewSummary';

const style = {
  container: {
    width: '100%',
    px: '36px',
    pb: '36px',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    py: 1.5,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  bottom: {
    height: 360,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 140,
  },
  datePicker: {
    width: 180,
  },
  figure: {
    width: 300,
  },
};

const Preview = ({ state }) => {
  const { date, previewData, isUpdating } = state;
  const dispatch = useDispatch();
  const today = dayjs();
  const handleDateChange = React.useCallback(
    (value) => {
      dispatch(setDate(value.format('MM-DD-YYYY')));
    },
    [dispatch],
  );
  const onClickReview = React.useCallback(() => {
    dispatch(asyncReviewCardinalInvoice(date));
  }, [dispatch, date]);
  const onClickFind = React.useCallback(() => {
    dispatch(asyncFindCardinalInvoice(date));
  }, [dispatch, date]);

  React.useEffect(() => {
    if (!isUpdating) {
      dispatch(asyncGetCardinalInvoice(date));
    }
    // must not include isUpdating below
  }, [dispatch, date]);

  return (
    <Box sx={style.container}>
      <Box sx={style.top}>
        <MyDatePicker
          sx={style.datePicker}
          disabled={isUpdating}
          slotProps={{ textField: { size: 'small' } }}
          label="Invoice Date"
          value={dayjs(date)}
          maxDate={today}
          onChange={handleDateChange}
        />
        {previewData ? (
          <Button
            disabled={isUpdating}
            variant="outlined"
            sx={style.button}
            children="review"
            onClick={onClickReview}
          />
        ) : (
          <Button
            disabled={isUpdating}
            variant="outlined"
            sx={style.button}
            children="find invoice"
            onClick={onClickFind}
          />
        )}
      </Box>
      <Box sx={style.bottom}>
        {isUpdating ? (
          <CircularProgress />
        ) : previewData ? (
          <PreviewSummary data={previewData} />
        ) : (
          <Box sx={style.figure}>
            <SearchingSvg />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Preview;
