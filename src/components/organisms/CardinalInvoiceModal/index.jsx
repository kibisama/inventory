import React from 'react';
import dayjs from 'dayjs';
import { Box, Modal } from '@mui/material';
import ModalHeader from '../../molecules/ModalHeader';
import MyDatePicker from '../../molecules/MyDatePicker';
import MyButton from '../../atoms/MyButton';
import * as mongodAPI from '../../../lib/api/mongod';
import NoResultFoundImage from '../../molecules/NoResultsImage';
import CardinalInvoiceSummary from '../CardinalInvoiceSummary';

const style = {
  container: {
    minWidth: 640,
    minHeight: 466,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 12,
    borderRadius: 1,
  },
  top: {
    mt: '0.75rem',
    mx: '4rem',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  summary: {
    my: '1rem',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const CardinalInvoiceModal = ({ open }) => {
  const today = dayjs();
  const [date, setDate] = React.useState(today);
  const [data, setData] = React.useState(null);
  const handleChange = (value) => {
    setDate(value);
  };
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await mongodAPI.getCardinalInvoice(
          date.format('MM-DD-YYYY'),
        );
        setData(data);
        console.log(data);
      } catch (e) {
        setData(null);
        console.log(e);
      }
    };
    fetch();
  }, [date]);

  //   const handleRunReport = async () => {
  //     try {
  //       const { data } = await mongodAPI.postCardinalInvoice(
  //         date.format('MM-DD-YYYY'),
  //       );
  //       setResult(data);
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <React.Fragment>
      {open && (
        <Modal open={open}>
          <Box sx={style.container}>
            <ModalHeader title="Cardinal Invoice Report" />
            <Box sx={style.top}>
              <MyDatePicker
                slotProps={{ textField: { size: 'small' } }}
                label="Invoice Date"
                value={date}
                maxDate={today}
                onChange={handleChange}
              />
              <MyButton>Find Invoice</MyButton>
            </Box>
            <Box sx={style.summary}>
              {data ? (
                <CardinalInvoiceSummary data={data} />
              ) : (
                <NoResultFoundImage />
              )}
            </Box>
          </Box>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CardinalInvoiceModal;
