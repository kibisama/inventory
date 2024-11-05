import { Box, Grow, Paper } from '@mui/material';
import ReportSummaryItem from '../../../molecules/SummaryItem';

const style = {
  container: {
    width: '100%',
    px: 4,
    py: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottom: {},
  paper: {
    minHeight: 180,
    p: 1,
  },
};

const generateText = (data = {}) => {
  const {
    duplicatesWithDifferentPrices,
    backorderedItems,
    differentQtyShipped,
  } = data;
  let text = '';
  if (text === '') {
    return 'Please click Review button to proceed.';
  }
  return text;
};

const PreviewSummary = (props) => {
  const { invoiceNumbers, invoiceTotalShipped, invoiceTotalAmount } =
    props.data;
  return (
    <Box sx={style.container}>
      <Box sx={style.top}>
        <Grow in timeout={250}>
          <div>
            <ReportSummaryItem
              label="Invoices"
              content={invoiceNumbers.length}
            />
          </div>
        </Grow>
        <Grow in timeout={500}>
          <div>
            <ReportSummaryItem label="Items" content={invoiceTotalShipped} />
          </div>
        </Grow>
        <Grow in timeout={750}>
          <div>
            <ReportSummaryItem
              label="Total Amount"
              content={invoiceTotalAmount}
            />
          </div>
        </Grow>
      </Box>
      <Box sx={style.bottom}>
        <Grow in timeout={750}>
          <Paper elevation={3} sx={style.paper}>
            {generateText(props.data)}
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
};

export default PreviewSummary;
