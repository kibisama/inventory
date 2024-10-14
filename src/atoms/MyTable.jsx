import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const style = {
  // fadedRow: { color: 'grey' },
  tableCell: { color: 'inherit' },
};

const MyTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.heads.map((v, i) => (
              <TableCell key={i}>{v}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, i) => (
            <TableRow
              key={i}
              // sx={props.fadeRow(row) ? style.fadedRow : null}
              hover
            >
              {props.keys.map((v, i) => (
                <TableCell sx={style.tableCell} key={i}>
                  {row[props.keys[i]]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
