import React from 'react';
import StyledDarkModeSwitch from '../../../atoms/StyledDarkModeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../../reduxjs@toolkit/globalSlice';

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.global);
  const handleChange = React.useCallback(() => {
    dispatch(setDarkMode(!darkMode));
  }, [dispatch, darkMode]);

  return <StyledDarkModeSwitch onChange={handleChange} />;
};

export default DarkModeSwitch;
