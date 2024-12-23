import dayjs from 'dayjs';
import { Badge } from '@mui/material';
import { CardinalProductTooltip, PSDetailsTooltip } from './tooltips';
import CustomTableCell from '../../../molecules/CustomTableCell';
import { formatCurrency } from '../../../../lib/functions';

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
  //
  cardinalProduct: (v) => {
    let title = '';
    let subtitle = '';
    let badge = false;
    const lastUpdated = v.cardinalProduct?.lastUpdated;
    if (lastUpdated) {
      const estNetCost = v.cardinalProduct.estNetCost;
      if (estNetCost) {
        title += estNetCost;
        subtitle += formatCurrency(v.cardinalProduct.netUoiCost);
      } else {
        title += 'N/A';
      }
    }
    return (
      <CustomTableCell
        title={title}
        subtitle={subtitle}
        tooltip={
          subtitle ? <CardinalProductTooltip data={v.cardinalProduct} /> : null
        }
      />
    );
  },
  cardinalAlt: (v) => {
    let title = 'N/A';
    let subtitle = '$0.00';
    const estNetCost = v.cardinalAlt?.estNetCost;
    const netUoiCost = v.cardinalAlt?.netUoiCost;
    if (estNetCost) {
      title = formatCurrency(estNetCost);
    }
    if (netUoiCost) {
      subtitle = formatCurrency(netUoiCost);
    }
    return <CustomTableCell title={title} subtitle={subtitle} />;
  },
  // 완
  psDetails: (v) => {
    let title = '';
    let subtitle = '';
    let shortDated = false;
    const pkgPrice = v.psDetails?.pkgPrice;
    if (pkgPrice) {
      title += pkgPrice;
      if (pkgPrice !== 'N/A') {
        subtitle += formatCurrency(v.psDetails.unitPrice);
      }
      const shortDate = dayjs().add(11, 'month');
      const expDate = dayjs(v.psDetails.lotExpDate, 'MM/YY');
      if (expDate.isBefore(shortDate)) {
        shortDated = true;
      }
    }
    return (
      <CustomTableCell
        title={title}
        subtitle={subtitle}
        badge={shortDated ? 'warning' : ''}
        tooltip={
          subtitle ? (
            <PSDetailsTooltip
              data={{ ...v.psDetails, lastUpdated: v.psLastUpdated }}
              shortDated={shortDated}
            />
          ) : null
        }
      />
    );
  },
  psAlts: (v) => {
    let title = '';
    let subtitle = '';
    let shortDated = false;
    const alt = v.psAlts[0];
    if (alt) {
      const pkgPrice = alt.pkgPrice;
      title += pkgPrice;
      if (pkgPrice !== 'N/A') {
        subtitle += formatCurrency(alt.unitPrice);
      }
    }
    return <CustomTableCell title={title} subtitle={subtitle} />;
  },
  // v.psAlts.length > 0
  //   ? v.psAlts[0]?.pkgPrice === 'NOT AVAILABLE'
  //     ? 'NOT AVAILABLE'
  //     : `${v.psAlts[0]?.pkgPrice} (${Number(
  //         v.psAlts[0]?.unitPrice.replaceAll(/[^0-9.]+/g, ''),
  //       ).toLocaleString('en-US', {
  //         style: 'currency',
  //         currency: 'USD',
  //       })})`
  //   : v.psDetails?.pkgPrice
  //   ? 'NO BETTER DEALS'
  //   : 'PENDING',
};

export default formats;
