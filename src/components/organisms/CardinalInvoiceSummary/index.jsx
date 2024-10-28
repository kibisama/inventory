import { Box, Grow } from '@mui/material';
import SummaryItem from '../../molecules/SummaryItem';

const style = {
  width: '100%',
  mx: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const CardinalInvoiceSummary = (props) => {
  const {
    invoiceNumbers,
    duplicatesWithDifferentPrices,
    backorderedItems,
    differentQtyShipped,
    invoiceTotalShipped,
    invoiceTotalAmount,
  } = props.data;
  return (
    <Box sx={style}>
      <Grow in timeout={500}>
        <div>
          <SummaryItem label="Invoices" content={invoiceNumbers.length} />
        </div>
      </Grow>
      <Grow in timeout={1000}>
        <div>
          <SummaryItem label="Items" content={invoiceTotalShipped} />
        </div>
      </Grow>
      <Grow in timeout={1500}>
        <div>
          <SummaryItem label="Total Amount" content={invoiceTotalAmount} />
        </div>
      </Grow>
    </Box>
  );
};

export default CardinalInvoiceSummary;
