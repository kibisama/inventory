import React from 'react';
import MyIconButton from '../../../atoms/MyIconButton';
import CardinalInvoiceModal from '../../../components/organisms/CardinalInvoiceModal';

const TaskButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <React.Fragment>
      <MyIconButton variant="task" onClick={handleOpen} />
      {open && <CardinalInvoiceModal open={open} handleClose={handleOpen} />}
    </React.Fragment>
  );
};

export default TaskButton;
