import React from 'react';
import dayjs from 'dayjs';
import DOTable from '../../organisms/DOTable';
import * as mongodAPI from '../../../lib/api/mongod';
import { Box } from '@mui/material';

const style = {
  container: {
    p: '1rem',
  },
};

const DailyOrderView = () => {
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await mongodAPI.getDailyOrder(
          dayjs().format('MM-DD-YYYY'),
        );
        setResults(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);
  console.log(results);
  return (
    <Box sx={style.container}>
      <DOTable rows={results} />
    </Box>
  );
};

export default DailyOrderView;
