import React from 'react';
import dayjs from 'dayjs';
import {
  Box,
  Divider,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChart from '../BarChart';

const style = {
  cardinalProduct: {
    name: {
      fontSize: '1rem',
    },
    subtitle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    cin: {
      fontSize: '0.9rem',
    },
    lastUpdated: {
      fontSize: '0.7rem',
    },
    content: {
      minWidth: 480,
    },
    headLine: {
      py: 1,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '0.9rem',
    },
    headLineItem: {
      minWidth: 100,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  psDetails: {
    description: {
      fontSize: '1rem',
    },
    lastUpdated: {
      justifySelf: 'flex-end',
      fontSize: '0.7rem',
    },
    table: {
      pt: 1,
      minWidth: 240,
      display: 'flex',
      justifyContent: 'space-between',
    },
    key: {
      fontSize: '0.9rem',
    },
    data: {
      fontSize: '0.9rem',
      justifySelf: 'flex-end',
    },
  },
};

//여기서는 계산을 최소화하고 렌더링만 한다. 데이터는 미리 계산해서 row레벨에서 메모리제이션해둘것
const psDetailsKeys = ['Wholesaler', 'Exp Date', 'Qty Avl'];
export const PSDetailsTooltip = ({ data, shortDated }) => {
  const { description, lastUpdated, lotExpDate, qtyAvl, wholesaler } = data;
  const _style = style.psDetails;
  let _lastUpdated = '';
  if (dayjs().isSame(lastUpdated, 'day')) {
    _lastUpdated += 'Today ' + dayjs(lastUpdated).format('hh:mm A');
  } else {
    _lastUpdated += dayjs(lastUpdated).format('MM-DD-YYYY hh:mm A');
  }
  return (
    <Box>
      <Box>
        <Typography sx={_style.description}>{description}</Typography>
        <Typography sx={_style.lastUpdated}>{_lastUpdated}</Typography>
      </Box>
      <Divider />
      <Box sx={_style.table}>
        <Box>
          {psDetailsKeys.map((v) => (
            <Typography key={v} sx={_style.key}>
              {v}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography sx={_style.data}>{wholesaler}</Typography>
          <Typography
            sx={
              shortDated
                ? { ..._style.data, color: 'warning.main' }
                : _style.data
            }
          >
            {lotExpDate}
          </Typography>
          <Typography sx={_style.data}>{qtyAvl}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const CardinalProductTooltip = ({ data }) => {
  const {
    name,
    cin,
    lastUpdated,
    contract,
    stockStatus,
    stock,
    returnable,
    purchaseHistory,
  } = data;
  const _style = style.cardinalProduct;
  const today = dayjs();
  let _lastUpdated = '';
  if (today.isSame(lastUpdated, 'day')) {
    _lastUpdated += 'Today ' + dayjs(lastUpdated).format('hh:mm A');
  } else {
    _lastUpdated += dayjs(lastUpdated).format('MM-DD-YYYY hh:mm A');
  }
  const [barChart, setBarChart] = React.useState(true);
  const barData = [];

  return (
    <Box>
      <Box>
        <Typography sx={_style.name}>{name}</Typography>
        <Box sx={_style.subtitle}>
          <Typography sx={_style.cin}>{cin}</Typography>
          <Typography sx={_style.lastUpdated}>{_lastUpdated}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={_style.content}>
        <Box sx={_style.headLine}>
          <Box sx={_style.headLineItem}>{contract}</Box>
          <Box sx={_style.headLineItem}>
            {stockStatus} {stock ? `(${stock})` : null}
          </Box>
          <Box sx={_style.headLineItem}>
            {returnable === 'done' ? 'RETURNABLE' : 'NON-RETURNABLE'}
          </Box>
          <ToggleButtonGroup sx={_style.headLineItem} size="small">
            <ToggleButton value={true}>
              <BarChartIcon />
            </ToggleButton>
            <ToggleButton value={false}>
              <TimelineIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <BarChart />
        </Box>
      </Box>
    </Box>
  );
};
