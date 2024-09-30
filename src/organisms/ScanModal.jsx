import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import useScanDetection from '../hooks/useScanDetection';
import { asyncInvScan } from '../reduxjs@toolkit/scanSlice';
import { setOpen } from '../reduxjs@toolkit/scanSlice';
import UpperRightCloseButton from '../atoms/UpperRightCloseButton';
import ScanStatusDiagram from '../molecules/containers/ScanModalOptions/ScanStatusDiagram';
import ScanModalOptions from '../molecules/ScanModalOptions';

const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 640,
    bgcolor: 'background.paper',
    boxShadow: 12,
    borderRadius: 2,
  },
};

const ScanModal = () => {
  const dispatch = useDispatch();
  const { open, mode, inputDate, source } = useSelector((state) => state.scan);
  const handleClose = React.useCallback(() => {
    dispatch(setOpen(false));
  }, [dispatch]);
  const onComplete = React.useCallback(
    (dataMatrix) => {
      const body = {
        mode,
        dataMatrix,
        inputDate,
        source,
      };
      dispatch(asyncInvScan(body));
    },
    [inputDate, mode, source, dispatch],
  );
  const onError = React.useCallback(() => {
    console.log('error');
  }, []);
  useScanDetection({
    onComplete: onComplete,
    onError: onError,
    minLength: 50,
    preventDefault: true,
  });
  if (!open) {
    return null;
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style.box}>
        <UpperRightCloseButton onClick={handleClose} />
        <ScanStatusDiagram />
        <ScanModalOptions mode={mode} />
      </Box>
    </Modal>
  );
};

export default ScanModal;
