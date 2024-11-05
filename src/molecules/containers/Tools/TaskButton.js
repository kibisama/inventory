import React from 'react';
import MyIconButton from '../../../atoms/MyIconButton';
// import CardinalInvoiceModal from '../../../organisms/CardinalInvoiceModal';
import CardinalInvoiceModal from '../../../components/templates/CardinalInvoiceModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../reduxjs@toolkit/cardinalInvoiceSlice';
const TaskButton = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.cardinalInvoice);
  const handleOpen = () => {
    dispatch(setOpen());
  };
  return (
    <React.Fragment>
      <MyIconButton variant="task" onClick={handleOpen} />
      {open && <CardinalInvoiceModal open={open} handleOpen={handleOpen} />}
    </React.Fragment>
  );
};

export default TaskButton;
