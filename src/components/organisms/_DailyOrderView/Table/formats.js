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
  cardinalProduct: (v) => {
    let title = 'N/A';
    let subtitle = '$0.00';
    const estNetCost = v.cardinalProduct?.estNetCost;
    const netUoiCost = v.cardinalProduct?.netUoiCost;
    if (estNetCost) {
      title = formatCurrency(estNetCost);
    }
    if (netUoiCost) {
      subtitle = formatCurrency(netUoiCost);
    }
    return <CustomTableCell title={title} subtitle={subtitle} />;
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
  psDetails: (v) => {
    let title = '';
    let subtitle = '';
    const pkgPrice = v.psDetails?.pkgPrice;
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
        // tooltip={
        //   pkgPrice && pkgPrice !== 'NOT AVAILABLE' ? (
        //     <PSDetailsTooltip data={v.psDetails} />
        //   ) : null
        // }
      />
    );
  },
  psAlts: (v) =>
    v.psAlts.length > 0
      ? v.psAlts[0]?.pkgPrice === 'NOT AVAILABLE'
        ? 'NOT AVAILABLE'
        : `${v.psAlts[0]?.pkgPrice} (${Number(
            v.psAlts[0]?.unitPrice.replaceAll(/[^0-9.]+/g, ''),
          ).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })})`
      : v.psDetails?.pkgPrice
      ? 'NO BETTER DEALS'
      : 'PENDING',
};

export default formats;
