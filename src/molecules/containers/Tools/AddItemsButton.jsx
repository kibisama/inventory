import React from 'react';
import { useDispatch } from 'react-redux';
import MyIconButton from '../../../atoms/MyIconButton';
import { setMode } from '../../../reduxjs@toolkit/scanSlice';

const AddItemsButton = () => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback(() => {
    dispatch(setMode('add'));
  }, [dispatch]);

  return <MyIconButton variant="add" onClick={handleClick} />;
};

export default AddItemsButton;
