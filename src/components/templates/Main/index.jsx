import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Header from '../../organisms/Header';
import DailyOrderView from '../DailyOrderView';

import DrugTreeView from '../../../organisms/DrugTreeView';
import CardinalInvoiceModal from '../CardinalInvoiceModal';
import ScanModal from '../ScanModal';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const Main = () => {
  const { mainView } = useSelector((state) => state.global);
  return (
    <Box sx={style.container}>
      <Header />
      {mainView === 'inventories' && <DrugTreeView />}
      {mainView === 'daily orders' && <DailyOrderView />}
      <ScanModal />
      <CardinalInvoiceModal />
    </Box>
  );
};

export default Main;
