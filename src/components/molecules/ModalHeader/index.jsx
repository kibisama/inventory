import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  icon: {
    cursor: 'pointer',
    ':hover': {
      color: 'primary.main',
    },
    fontSize: 36,
  },
  title: {
    fontSize: 'h5.fontSize',
    mt: 2,
    ml: 4,
  },
};

const ModalHeader = ({ title, handleClose }) => {
  const { palette } = useTheme();
  return (
    <Box style={style.container}>
      <CloseIcon
        sx={{ ...style.icon, color: palette.grey[500] }}
        onClick={handleClose}
      />
      {title && <Typography sx={style.title}>{title}</Typography>}
    </Box>
  );
};

export default ModalHeader;
