import React from 'react';
import {
  Badge,
  Box,
  CircularProgress,
  Typography,
  styled,
} from '@mui/material';
import StyledTooltip from '../../organisms/StyledTooltip';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleOnly: { fontSize: '1rem' },
  title: { fontSize: '0.85rem' },
  subtitle: {
    fontSize: '0.65rem',
    color: 'text.secondary',
  },
};

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[700]
      : theme.palette.grey[300],
}));

const CustomTableCell = ({ title, subtitle, badge, tooltip }) => {
  const content = title ? (
    <Badge variant="dot" color={badge}>
      <Box>
        <Typography sx={subtitle ? style.title : style.titleOnly}>
          {title}
        </Typography>
        {subtitle && <Typography sx={style.subtitle}>{subtitle}</Typography>}
      </Box>
    </Badge>
  ) : (
    <StyledCircularProgress size="1.5rem" />
  );
  return (
    <Box sx={style.container}>
      {tooltip && title ? (
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
