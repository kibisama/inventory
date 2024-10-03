import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../../reduxjs@toolkit/globalSlice';
import MyIconButton from '../../../atoms/MyIconButton';

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.global);
  const handleChange = React.useCallback(() => {
    dispatch(setDarkMode(!darkMode));
  }, [dispatch, darkMode]);
  if (darkMode) {
    return <MyIconButton variant="lightMode" onClick={handleChange} />;
  }
  return <MyIconButton variant="darkMode" onClick={handleChange} />;
};

export default DarkModeButton;
