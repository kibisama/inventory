import React from 'react';
import { Box, Typography } from '@mui/material';
import StyledTooltip from '../../organisms/StyledTooltip';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: { fontSize: '1rem' },
  subtitle: {
    fontSize: '0.75rem',
    color: 'text.secondary',
  },
};

const CustomTableCell = ({ title, subtitle, tooltip }) => {
  const content = (
    <React.Fragment>
      <Typography sx={style.title}>{title}</Typography>
      {subtitle && <Typography sx={style.subtitle}>{subtitle}</Typography>}
    </React.Fragment>
  );
  return (
    <Box sx={style.container}>
      {tooltip ? (
        <StyledTooltip title={tooltip}>
          <Box>{content}</Box>
        </StyledTooltip>
      ) : (
        content
      )}
    </Box>
  );
};

export default CustomTableCell;
