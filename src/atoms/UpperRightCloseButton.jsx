import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  container: {
    width: '100%',
    height: '2rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
    color: 'grey',
    ':hover': {
      color: 'primary.main',
    },
    fontSize: '2rem',
  },
  title: {
    fontSize: 'h5.fontSize',
    ml: '2rem',
  },
  divider: {
    mx: '0.5rem',
  },
};

const UpperRightCloseButton = ({ title, onClick }) => {
  return (
    <React.Fragment>
      <Box style={style.container}>
        <CloseIcon sx={style.icon} onClick={onClick} />
        <Typography sx={style.title}>{title}</Typography>
      </Box>
      <Divider sx={style.divider} />
    </React.Fragment>
  );
};

export default UpperRightCloseButton;
