import React from 'react';
import { useDispatch } from 'react-redux';
import MyIconButton from '../../../atoms/MyIconButton';
import { setMode } from '../../../reduxjs@toolkit/scanSlice';

const RemoveItemsButton = () => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback(() => {
    dispatch(setMode('remove'));
  }, [dispatch]);

  return <MyIconButton variant="remove" onClick={handleClick} />;
};

export default RemoveItemsButton;
