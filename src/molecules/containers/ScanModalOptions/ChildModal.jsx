import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import beep from '../../../sound/beep.wav';
import { setError } from '../../../reduxjs@toolkit/scanSlice';
import UpperRightCloseButton from '../../../atoms/UpperRightCloseButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 12,
  borderRadius: 2,
};

const generateErrorMsg = (error) => {
  switch (error) {
    case 1:
      return 'The item is expired or has a short expiration date.';
    case 99:
      return 'Invalid code. Please scan one more time.';
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
  //   const msg = generateErrorMsg(error);

  return (
    <Modal open={error != null} onClose={handleClose}>
      <Box sx={style}>
        <UpperRightCloseButton onClick={handleClose} />
        {generateErrorMsg(error)}
      </Box>
    </Modal>
  );
};

export default ChildModal;
