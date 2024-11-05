import { Box } from '@mui/material';
import Header from '../../organisms/Header';

import DrugTreeView from '../../../organisms/DrugTreeView';
import CardinalInvoiceModal from '../CardinalInvoiceModal';
import ScanModal from '../ScanModal';
import QrCodeSVG from '../../atoms/svg/QrCode';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const Main = () => {
  return (
    <Box sx={style.container}>
      <Header />
      <QrCodeSVG />
      <DrugTreeView />
      <CardinalInvoiceModal />
      <ScanModal />
    </Box>
  );
};

export default Main;
