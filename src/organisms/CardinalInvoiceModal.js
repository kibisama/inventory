import React from 'react';
import { Box, Modal } from '@mui/material';
import UpperRightCloseButton from '../atoms/UpperRightCloseButton';

import TestContent from '../molecules/containers/CardinalInvoiceModal/TestContent';

const style = {
  container: {
    height: 500,

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 860,
    bgcolor: 'background.paper',
    boxShadow: 12,
    borderRadius: 2,
  },
};

const CardinalInvoiceModal = (props) => {
  const { open } = props;
  return (
    <Modal open={open}>
      <Box sx={style.container}>
        <UpperRightCloseButton
          title="Cardinal Invoice"
          onClick={props.handleClose}
        />
        <TestContent />
      </Box>
    </Modal>
  );
};

export default CardinalInvoiceModal;
