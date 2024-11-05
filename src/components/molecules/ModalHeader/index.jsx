import React from 'react';
import { Box, Typography } from '@mui/material';
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
    color: 'grey',
    ':hover': {
      color: 'primary.main',
    },
    fontSize: '2rem',
  },
  title: {
    fontSize: 'h5.fontSize',
    mt: 2,
    ml: 4,
  },
};

const ModalHeader = ({ title, onClick }) => {
  return (
    <React.Fragment>
      <Box style={style.container}>
        <CloseIcon sx={style.icon} onClick={onClick} />
        <Typography sx={style.title}>{title}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default ModalHeader;
