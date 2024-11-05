import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import useScanDetection from '../hooks/useScanDetection';
import {
  asyncInvScan,
  setIsUpdated,
  setOpen,
  setError,
} from '../reduxjs@toolkit/scanSlice';
import UpperRightCloseButton from '../atoms/UpperRightCloseButton';
import ScanStatusDiagram from '../molecules/containers/ScanModalOptions/ScanStatusDiagram';
import ChildErrorModal from './ChildErrorModal';
import ScanModalOptions from '../molecules/ScanModalOptions';
import { parseDataMatrix } from '../lib/functions';

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
  const { mode, inputDate, source, open } = useSelector((state) => state.scan);
  const handleClose = React.useCallback(() => {
    dispatch(setOpen(false));
    dispatch(setIsUpdated(false));
    dispatch(setError(null));
  }, [dispatch]);
  // 이상 유즈이팩트의 리턴값으로 updated, error 초기화
  const onComplete = React.useCallback(
    (dataMatrix) => {
      const { gtin, lot, exp, sn } = parseDataMatrix(dataMatrix);
      if (!gtin || !lot || !exp || !sn) {
        dispatch(setError(99));
        return;
      }
      const body = {
        mode,
        gtin,
        lot,
        exp,
        sn,
        inputDate,
        source,
      };
      dispatch(asyncInvScan(body));
    },
    [inputDate, mode, source, dispatch],
  );
  const onError = React.useCallback(() => {
    dispatch(setError(99));
  }, [dispatch]);

  useScanDetection({
    onComplete: onComplete,
    onError: onError,
    minLength: 38,
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
        <ChildErrorModal />
        <ScanModalOptions mode={mode} />
      </Box>
    </Modal>
  );
};

export default ScanModal;
