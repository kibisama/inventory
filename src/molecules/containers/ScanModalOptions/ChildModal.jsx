import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import beep from '../../../sound/beep.wav';
import { setError } from '../../../reduxjs@toolkit/scanSlice';
import UpperRightCloseButton from '../../../atoms/UpperRightCloseButton';

const style = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 12,
    borderRadius: 2,
  },
  msg: {},
};

const generateErrorMsg = (error) => {
  switch (error) {
    case 1:
      return 'The item is expired or has a short expiration date (less than 1 year).';
    case 99:
      return 'An invalid code scanned. Please scan one more time.';
    case 500:
      return '500 Internal server error';
    default:
      return '';
  }
};

const ChildModal = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.scan);
  const [, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setOpen(false);
    dispatch(setError(null));
  }, [dispatch]);
  const playBeep = React.useCallback(() => {
    new Audio(beep).play();
  }, []);
  React.useEffect(() => {
    if (error != null) {
      playBeep();
    }
  }, [error, playBeep]);

  return (
    <Modal open={error != null} onClose={handleClose}>
      <Box sx={style.container}>
        <UpperRightCloseButton onClick={handleClose} />
        <Box sx={style.msg}>{generateErrorMsg(error)}</Box>
      </Box>
    </Modal>
  );
};

export default ChildModal;
