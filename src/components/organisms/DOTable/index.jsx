import dayjs from 'dayjs';
import CustomTable from '../CustomTable';
import CustomTableCell from '../../molecules/CustomTableCell';
/* import Tooltip contents from _TooltipTitles folder */
import PSDetailsTooltip from '../_TooltipTitles/PSDetails';

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
  'cardinalItem',
  'cardinalAlts',
  'psDetails',
  'psAlts',
  'status',
];
const formats = {
  package: (v) => {
    let title = '';
    let subtitle = '';
    const pkg = v.package;
    if (pkg) {
      if (pkg.brand_name) {
        if (pkg.brand_name.length > 20) {
          title += pkg.brand_name.substring(0, pkg.brand_name.indexOf(' '));
        } else {
          title += pkg.brand_name;
        }
        if (pkg.strength) {
          title += ' ' + pkg.strength;
        }
        if (pkg.size) {
          title += ' (' + pkg.size + ')';
        }
        if (pkg.manufacturer_name) {
          subtitle += pkg.manufacturer_name;
        }
      }
    }
    if (!title) {
      title = v.gtin;
    }
    return (
      <CustomTableCell title={title} subtitle={subtitle ? subtitle : null} />
    );
  },
  item: (v) => v.item.cost ?? 'UNKNOWN',
  qty: (v) => v.item.length,
  cardinalItem: () => 'DISABLED',
  cardinalAlts: () => 'DISABLED',
  psDetails: (v) => {
    let title = '';
    let subtitle = '';
    const pkgPrice = v.psDetails.pkgPrice;
    if (pkgPrice) {
      title += pkgPrice;
      if (pkgPrice !== 'NOT AVAILABLE') {
        subtitle += Number(
          v.psDetails.unitPrice.replaceAll(/[^0-9.]+/g, ''),
        ).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
      }
    }
    if (!title) {
      title += 'PENDING';
    }
    return (
      <CustomTableCell
        title={title}
        subtitle={subtitle ? subtitle : null}
        tooltip={
          pkgPrice !== 'NOT AVAILABLE' ? (
            <PSDetailsTooltip data={v.psDetails} />
          ) : null
        }
      />
    );
  },
  psAlts: (v) =>
    v.psAlts.length > 0
      ? v.psAlts[0].pkgPrice === 'NOT AVAILABLE'
        ? 'NOT AVAILABLE'
        : `${v.psAlts[0].pkgPrice} (${Number(
            v.psAlts[0].unitPrice.replaceAll(/[^0-9.]+/g, ''),
          ).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })})`
      : v.psDetails.pkgPrice
      ? 'NO BETTER DEALS'
      : 'PENDING',
};
const cellStyles = {
  package: () => {
    return { width: '25%' };
  },
  qty: () => {
    return { width: '5%' };
  },
};

const DOTable = ({ rows }) => {
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

export default DOTable;
