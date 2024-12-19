import CustomTable from '../../CustomTable';
import formats from './formats';
/* import Tooltip contents from _TooltipTitles folder */
// import { PSDetailsTooltip } from '../_TooltipTitles';

const heads = [
  'ITEM',
  'COST',
  'QTY',
  'CH PRICE',
  'CH ALT',
  'PS PRICE',
  'PS ALT',
  'STATUS',
];
const keys = [
  'package',
  'item',
  'qty',
  'cardinalProduct',
  'cardinalAlt',
  'psDetails',
  'psAlts',
  'status',
];

const cellStyles = {
  package: () => {
    return { width: '25%' };
  },
  qty: () => {
    return { width: '5%' };
  },
};

const Table = ({ rows }) => {
  console.log(rows);
  return (
    <CustomTable
      heads={heads}
      keys={keys}
      rows={rows}
      formats={formats}
      cellStyles={cellStyles}
      hover
      rowOnClick={(v) => {
        const ndc11 = v.package.ndc11;
        if (ndc11) {
          window.navigator.clipboard.writeText(ndc11);
        }
      }}
    />
  );
};

export default Table;
