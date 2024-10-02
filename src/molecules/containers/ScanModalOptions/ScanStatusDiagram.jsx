import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Image Copyrights Freepik
import qrCode from '../../../img/qrCode.gif';
import verified from '../../../img/verified.gif';
import loading from '../../../img/loading.gif';
import warning from '../../../img/warning.gif';
import { initIsUpdated } from '../../../reduxjs@toolkit/scanSlice';

const ScanStatusDiagram = () => {
  const dispatch = useDispatch();
  const { isUpdating, isUpdated, error } = useSelector((state) => state.scan);
  React.useEffect(() => {
    if (isUpdated && error == null) {
      setTimeout(() => {
        dispatch(initIsUpdated());
      }, 5000);
    }
  }, [dispatch, isUpdated, error]);
  return (
    <div>
      {isUpdating ? (
        <img src={loading} />
      ) : error ? (
        <img src={warning} />
      ) : isUpdated ? (
        <img src={verified} />
      ) : (
        <img src={qrCode} />
      )}
    </div>
  );
};

export default ScanStatusDiagram;
