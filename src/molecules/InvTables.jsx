import * as React from 'react';
import { Box } from '@mui/material';
import MyTable from '../atoms/MyTable';

const tableHeads = ['SN', 'Lot', 'Exp.', 'Date Received', 'Source'];
const tableKeys = ['sn', 'lot', 'exp', 'dateReceived', 'source'];

const style = {
  container: {},
  table: { paddingTop: '1rem' },
};

const InvTables = (props) => {
  const fadeRow = React.useCallback((row) => {
    if (row.dateFilled) {
      return true;
    } else {
      return false;
    }
  }, []);

  return (
    <Box sx={style.container}>
      {props.data.map((v, i) => (
        <Box sx={style.table} key={i}>
          <MyTable
            sx={style.table}
            label={`${v.label} (${v.rows.length})`}
            heads={tableHeads}
            keys={tableKeys}
            rows={v.rows}
            fadeRow={fadeRow}
          />
        </Box>
      ))}
    </Box>
  );
};

export default InvTables;
