import React from 'react';
import { Box } from '@mui/material';

const style = {
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
    <Box sx={getStyle(count, optimalQty)}>
      {count} / {optimalQty ?? 0}
    </Box>
  );
};

export default Counter;
