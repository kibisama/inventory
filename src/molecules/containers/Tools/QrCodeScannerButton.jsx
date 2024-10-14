import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../reduxjs@toolkit/scanSlice';
import MyIconButton from '../../../atoms/MyIconButton';
import ScanModal from '../../../organisms/ScanModal';

const QrCodeScannerButton = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.scan);
  const handleClick = React.useCallback(() => {
    dispatch(setOpen(true));
  }, [dispatch]);
  return (
    <React.Fragment>
      <MyIconButton variant="qrcodescanner" onClick={handleClick} />
      {open && <ScanModal />}
    </React.Fragment>
  );
};

export default QrCodeScannerButton;
