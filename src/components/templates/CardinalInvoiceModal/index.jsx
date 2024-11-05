import { useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import ModalHeader from '../../molecules/ModalHeader';
import Preview from '../../organisms/CardinalInvoice/Preview';
import Result from '../../organisms/CardinalInvoice/Result';

const style = {
  modal: {
    minWidth: 640,
    minHeight: 480,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 12,
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {},
  content: {
    flexGrow: 1,
    display: 'flex',
    // alignItems: 'stretch',
  },
};

const CardinalInvoiceModal = ({ handleOpen }) => {
  const { open, resultData, isRequesting } = useSelector(
    (state) => state.cardinalInvoice,
  );

  return (
    <Modal open={open}>
      <Box sx={style.modal}>
        <Box sx={style.header}>
          <ModalHeader title="Cardinal Invoice Review" onClick={handleOpen} />
        </Box>
        <Box sx={style.content}>
          {resultData ? <Result data={resultData} /> : <Preview />}
        </Box>
      </Box>
    </Modal>
  );
};

export default CardinalInvoiceModal;
