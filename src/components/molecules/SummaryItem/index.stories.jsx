import SummaryItem from './index';

export default {
  title: 'SummaryItem',
  component: SummaryItem,
};

export const Invoices = () => {
  {
    return <SummaryItem label="Total Amount" content="$12,302.00" />;
  }
};
