import React from 'react';
import { Modal, Typography } from '@mui/material';
import beep from '../../../sound/beep.wav';
import ModalHeader from '../../molecules/ModalHeader';
import ModalBox from '../../atoms/ModalBox';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 420,
  },
  msg: {
    minHeight: 80,
    px: 2,
    display: 'flex',
    fontSize: '1.2rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const generateErrorMsg = (error) => {
  switch (error) {
    case 1:
      return 'An invalid code scanned. Please try again.';
    case 500:
      return 'Internal server error (500)';
    default:
      return 'Unexpected Error';
  }
};

const ChildErrorModal = ({ error, handleClose }) => {
  const playBeep = React.useCallback(() => {
    new Audio(beep).play();
  }, []);
  React.useEffect(() => {
    if (error) {
      playBeep();
    }
  }, [error, playBeep]);

  return (
    <Modal sx={style.container} open={error != null}>
      <React.Fragment>
        <ModalBox sx={style.box}>
          <ModalHeader handleClose={handleClose} />
          <Typography sx={style.msg}>{generateErrorMsg(error)}</Typography>
        </ModalBox>
      </React.Fragment>
    </Modal>
  );
};

export default ChildErrorModal;
