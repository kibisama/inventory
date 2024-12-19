import React from 'react';
import Table from '../../organisms/_DailyOrderView/Table';
import Toolbar from '../../organisms/_DailyOrderView/Toolbar';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const style = {
  container: {
    p: '1rem',
  },
};

const DailyOrderView = () => {
  const { results } = useSelector((state) => state.dailyOrder);
  return (
    <Box sx={style.container}>
      <Toolbar />
      <Table rows={results} />
    </Box>
  );
};

export default DailyOrderView;
