import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../../reduxjs@toolkit/scanSlice';
import MySelector from '../../../atoms/MySelector';

const style = {
  width: 180,
};

const ModeSelector = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.scan);
  const handleChange = React.useCallback(
    (e) => {
      dispatch(setMode(e.target.value));
    },
    [dispatch],
  );
  const menuItem = ['Receive', 'Fill', 'Reverse', 'Return'];

  return (
    <MySelector
      sx={style}
      label="Mode"
      value={mode}
      onChange={handleChange}
      menuItem={menuItem}
    />
  );
};

export default ModeSelector;
