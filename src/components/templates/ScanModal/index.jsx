import { useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import ModalBox from '../../atoms/ModalBox';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 600,
    height: 600,
  },
};

const ScanModal = () => {
  const { open } = useSelector((state) => state.scan);
  return (
    <Modal sx={style.container} open={open}>
      <ModalBox sx={style.box}></ModalBox>
    </Modal>
  );
};

export default ScanModal;
