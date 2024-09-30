import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSource } from '../../../reduxjs@toolkit/scanSlice';
import MySelector from '../../../atoms/MySelector';

const style = {
  width: 180,
};

const SourceSelector = (props) => {
  const dispatch = useDispatch();
  const { source } = useSelector((state) => state.scan);
  const handleChange = React.useCallback(
    (e) => {
      dispatch(setSource(e.target.value));
    },
    [dispatch],
  );
  const menuItem = ['Cardinal', 'PharmSaver'];

  return (
    <MySelector
      sx={style}
      label="Source"
      value={source}
      onChange={handleChange}
      menuItem={menuItem}
      disabled={props.disabled}
    />
  );
};

export default SourceSelector;
