import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrigin } from '../../../reduxjs@toolkit/scanSlice';
import MySelector from '../../../atoms/MySelector';

const style = {
  width: 180,
};

const OriginSelector = () => {
  const dispatch = useDispatch();
  const { origin } = useSelector((state) => state.scan);
  const handleChange = React.useCallback(
    (e) => {
      dispatch(setOrigin(e.target.value));
    },
    [dispatch],
  );
  const menuItem = ['Cardinal', 'PharmSaver'];

  return (
    <MySelector
      sx={style}
      label="Origin"
      value={origin}
      onChange={handleChange}
      menuItem={menuItem}
    />
  );
};

export default OriginSelector;
