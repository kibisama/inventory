import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InvTables from '../molecules/InvTables';
import { asyncGetInv } from '../reduxjs@toolkit/searchSlice';

const TestContents = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.search);
  React.useEffect(() => {
    dispatch(asyncGetInv());
  }, [dispatch]);
  if (result.length === 0) {
    return null;
  }
  return <InvTables data={result} />;
};

export default TestContents;
