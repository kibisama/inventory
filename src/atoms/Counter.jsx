import React from 'react';
import { Box } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: 'primary.main',
    fontSize: 'h6.fontSize',
    marginRight: 0.5,
  },
  font: {
    marginLeft: 0.5,
    letterSpacing: 1,
  },
  in: {
    color: 'success.main',
  },
  limited: {
    color: 'warning.main',
  },
  out: {
    color: 'error.main',
  },
};

const Counter = (props) => {
  const count = props.count;
  const optimalQty = props.optimalQty ?? 0;
  const getStyle = React.useCallback((count, optimalQty) => {
    switch (true) {
      case count > 0 && count >= optimalQty:
        return style.in;
      case count > 0 && count < optimalQty:
        return style.limited;
      case count === 0 && optimalQty > 0:
        return style.out;
      default:
        return;
    }
  }, []);
  return (
    <Box sx={style.container}>
      <InventoryIcon sx={style.icon} />
      <Box sx={{ ...style.font, ...getStyle(count, optimalQty) }}>
        {count} / {optimalQty ?? 0}
      </Box>
    </Box>
  );
};

export default Counter;
