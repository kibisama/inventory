import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
// Image Copyrights Freepik
import qrCode from '../../../img/qrCode.gif';
import verified from '../../../img/verified.gif';
import loading from '../../../img/loading.gif';
import warning from '../../../img/warning.gif';
import { setIsUpdated } from '../../../reduxjs@toolkit/scanSlice';

const ScanStatusDiagram = () => {
  const dispatch = useDispatch();
  const { isUpdating, isUpdated, error } = useSelector((state) => state.scan);
  React.useEffect(() => {
    if (isUpdated && error == null) {
      setTimeout(() => {
        dispatch(setIsUpdated(false));
      }, 3000);
    }
  }, [dispatch, isUpdated, error]);
  return (
    <Box>
      {isUpdating ? (
        <img src={loading} />
      ) : error ? (
        <img src={warning} />
      ) : isUpdated ? (
        <img src={verified} />
      ) : (
        <img src={qrCode} />
      )}
    </Box>
  );
};

export default ScanStatusDiagram;
