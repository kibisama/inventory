import dayjs from 'dayjs';
import CustomTable from '../CustomTable';

const heads = ['SN', 'Lot', 'Exp.', 'Date Received', 'Source', 'Cost'];
const keys = ['sn', 'lot', 'exp', 'dateReceived', 'source', 'cost'];
const formats = {
  // exp: (v) => dayjs(v).format('MM-DD-YYYY'),
  // dateReceived: (v) => dayjs(v).format('MM-DD-YYYY'),
};
const cellStyles = {
  sn: () => {
    return { width: '20%' };
  },
  lot: () => {
    return { width: '20%' };
  },
  exp: () => {
    return { width: '15%' };
  },
  dateReceived: () => {
    return { width: '15%' };
  },
  source: () => {
    return { width: '15%' };
  },
  cost: () => {
    return { width: '15%' };
  },
};

const InvTable = ({ rows }) => {
  return (
    <CustomTable
      heads={heads}
      keys={keys}
      rows={rows}
      formats={formats}
      cellStyles={cellStyles}
    />
  );
};

export default InvTable;
