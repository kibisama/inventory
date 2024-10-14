import * as React from 'react';
import { Box } from '@mui/material';
import MyTable from '../atoms/MyTable';

const tableHeads = ['SN', 'Lot', 'Exp.', 'Date Received', 'Source', 'Cost'];
const tableKeys = ['sn', 'lot', 'exp', 'dateReceived', 'source', 'cost'];

const style = {
  container: {
    minWidth: '95%',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
  },
};

const InvTables = (props) => {
  // const fadeRow = React.useCallback((row) => {
  //   if (row.dateFilled) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, []);

  return (
    <Box sx={style.container}>
      <MyTable
        sx={style.table}
        heads={tableHeads}
        keys={tableKeys}
        rows={props.data}
        // fadeRow={fadeRow}
      />
    </Box>
  );
};

export default InvTables;
