import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../../reduxjs@toolkit/globalSlice';
import { Box } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import QrCodeIcon from '@mui/icons-material/QrCode';
import StyledButtonBase from '../../atoms/StyledButtonBase';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { setOpen } from '../../../reduxjs@toolkit/scanSlice';

const style = {
  container: {
    minWidth: 240,
    mr: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const Tools = ({ onMouseEnter, onMouseLeave }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.global);
  const handleQrCodeButton = React.useCallback(() => {
    dispatch(setOpen(true));
  }, [dispatch]);
  const handleDarkModeButton = React.useCallback(() => {
    dispatch(setDarkMode(!darkMode));
  }, [dispatch, darkMode]);

  return (
    <Box sx={style.container}>
      <StyledButtonBase onClick={handleQrCodeButton}>
        <QrCodeIcon />
      </StyledButtonBase>
      <StyledButtonBase>
        <AppsIcon />
      </StyledButtonBase>
      <StyledButtonBase
        sx={{ ':hover': { border: '1px solid transparent' } }}
        disableRipple
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <AppsIcon />
      </StyledButtonBase>
      <StyledButtonBase>
        <NotificationsIcon />
      </StyledButtonBase>
      <StyledButtonBase onClick={handleDarkModeButton}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledButtonBase>
    </Box>
  );
};

export default Tools;
