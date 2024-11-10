import { Box, Paper } from '@mui/material';
import ReportSummaryItem from '../../../molecules/SummaryItem';
import textGenerator from './text';

const style = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottom: {},
  paper: {
    minHeight: 240,
    p: 2,
  },
};

const PreviewSummary = ({ data }) => {
  const { invoiceNumbers, invoiceTotalShipped, invoiceTotalAmount } = data;
  console.log(data);
  return (
    <Box sx={style.container}>
      <Box sx={style.top}>
        <ReportSummaryItem label="Invoices" content={invoiceNumbers.length} />
        <ReportSummaryItem label="Items" content={invoiceTotalShipped} />
        <ReportSummaryItem label="Total Amount" content={invoiceTotalAmount} />
      </Box>
      <Box sx={style.bottom}>
        <Paper elevation={3} sx={style.paper}>
          {textGenerator(data)}
        </Paper>
      </Box>
    </Box>
  );
};

export default PreviewSummary;
