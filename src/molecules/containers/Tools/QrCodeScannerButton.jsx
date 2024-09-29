import React from 'react';
import { useDispatch } from 'react-redux';
import MyIconButton from '../../../atoms/MyIconButton';
import { setOpen } from '../../../reduxjs@toolkit/scanSlice';

const QrCodeScannerButton = () => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback(() => {
    dispatch(setOpen(true));
  }, [dispatch]);

  return <MyIconButton variant="qrcodescanner" onClick={handleClick} />;
};

export default QrCodeScannerButton;
