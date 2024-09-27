import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import useScanDetection from '../hooks/useScanDetection';
import { asyncInvScan } from '../reduxjs@toolkit/scanSlice';
import { setMode } from '../reduxjs@toolkit/scanSlice';
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
  const { mode, dateIn, origin } = useSelector((state) => state.scan);
  const handleClose = React.useCallback(() => {
    dispatch(setMode(null));
  }, [dispatch]);
  const onComplete = React.useCallback(
    (dataMatrix) => {
      const body = {
        mode,
        dataMatrix,
        dateIn,
        origin,
      };
      dispatch(asyncInvScan(body));
    },
    [dateIn, mode, origin, dispatch],
  );
  useScanDetection({
    onComplete: onComplete,
    minLength: 50,
    preventDefault: true,
  });
  if (!mode) {
    return null;
  }

  return (
    <Modal open={!!mode} onClose={handleClose}>
      <Box sx={style.box}>
        <UpperRightCloseButton onClick={handleClose} />
        <ScanStatusDiagram />
        {mode === 'add' ? <ScanModalOptions /> : null}
      </Box>
    </Modal>
  );
};

export default ScanModal;
