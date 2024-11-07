import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../reduxjs@toolkit/scanSlice';
import { Modal } from '@mui/material';
import ModalBox from '../../atoms/ModalBox';
import ModalHeader from '../../molecules/ModalHeader';
import ScanInputForm from '../../organisms/ScanInputForm';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 480,
  },
};

const ScanModal = () => {
  const dispatch = useDispatch();
  const { open, mode, source, cost } = useSelector((state) => state.scan);
  const handleClose = () => {
    dispatch(setOpen(false));
  };
  const status = { mode, source, cost };

  return (
    <Modal sx={style.container} open={open}>
      <React.Fragment>
        <ModalBox sx={style.box}>
          <ModalHeader handleClose={handleClose} />
          <ScanInputForm status={status} />
        </ModalBox>
      </React.Fragment>
    </Modal>
  );
};

export default ScanModal;
