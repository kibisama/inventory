import React from 'react';
import dayjs from 'dayjs';
import { Box, Divider, Typography } from '@mui/material';

const style = {
  psDetails: {
    description: {
      fontSize: '1rem',
    },
    lastUpdated: {
      justifySelf: 'flex-end',
      fontSize: '0.7rem',
    },
  },
};

export const PSDetailsTooltip = ({ data = {} }) => {
  const { description, pkg, lastUpdated, lotExpDate, qtyAvl, wholesaler } =
    data;
  const _style = style.psDetails;
  let _lastUpdated = '';
  if (dayjs().isSame(lastUpdated, 'day')) {
    _lastUpdated += 'Today ' + dayjs(lastUpdated).format('hh:mm A');
  } else {
    _lastUpdated += dayjs(lastUpdated).format('MM-DD-YYYY hh:mm A');
  }
  return (
    <React.Fragment>
      <Typography sx={_style.description}>{description}</Typography>
      <Typography sx={_style.lastUpdated}>{_lastUpdated}</Typography>
      <Divider />
      <Typography>{lotExpDate}</Typography>
      <Typography>{qtyAvl}</Typography>
      <Typography>{wholesaler}</Typography>
    </React.Fragment>
  );
};
