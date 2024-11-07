import React from 'react';
import { Box } from '@mui/material';

import QrCodeSvg from '../svg/QrCode';
import LoadingSvg from '../svg/Loading';

const style = {
  width: '100%',
  aspectRatio: '1/1',
  display: 'flex',
  justifyContent: 'center',
};

const ScanStatusDiagram = ({ isUpdating, isUpdated, error }) => {
  return (
    <Box sx={style}>
      {error ? (
        <QrCodeSvg />
      ) : isUpdating ? (
        <LoadingSvg />
      ) : isUpdated ? (
        <QrCodeSvg />
      ) : (
        <QrCodeSvg />
      )}
    </Box>
  );
};

export default ScanStatusDiagram;
