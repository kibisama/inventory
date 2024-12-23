import dayjs from 'dayjs';
import { BarPlot, ChartContainer, ChartsXAxis } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];

const _months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const BarChart = ({ data }) => {
  const month = dayjs().get('month');
  const months =
    month > 6
      ? _months.slice(month - 6, month + 1)
      : _months.slice(11 - (5 - month), 12).concat(_months.slice(0, month + 1));
  return (
    <ChartContainer
      width={500}
      height={300}
      xAxis={[{ scaleType: 'band', data: months }]}
      series={[{ data: uData, type: 'bar' }]}
    >
      <BarPlot />
      <ChartsXAxis />
    </ChartContainer>
  );
};

export default BarChart;
