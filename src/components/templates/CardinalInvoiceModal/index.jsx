import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import {
  setOpen,
  setResultData,
  setError,
} from '../../../reduxjs@toolkit/cardinalInvoiceSlice';
import ModalHeader from '../../molecules/ModalHeader';
import ModalBox from '../../atoms/ModalBox';
import Preview from '../../organisms/CardinalInvoice/Preview';
import Result from '../../organisms/CardinalInvoice/Result';
import ChildErrorModal from '../../templates/ChildErrorModal';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 640,
  },
};

const CardinalInvoiceModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cardinalInvoice);
  const open = state.open;
  const error = state.error;
  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setResultData(null));
  };
  const handleChildClose = () => {
    dispatch(setError(null));
  };

  return (
    <Modal sx={style.container} open={open}>
      <React.Fragment>
        <ModalBox sx={style.box}>
          <ModalHeader
            title="Cardinal Invoice Review"
            handleClose={handleClose}
          />
          {/* {resultData ? (
            <Result data={resultData} />
          ) : (
            <Preview date={date} data={previewData} disabled={isRequesting} />
          )} */}
          <Preview state={state} />
          <ChildErrorModal error={error} handleClose={handleChildClose} />
        </ModalBox>
      </React.Fragment>
    </Modal>
  );
};

export default CardinalInvoiceModal;
