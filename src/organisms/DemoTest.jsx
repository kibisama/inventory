import React from 'react';
import dayjs from 'dayjs';
import * as mongodAPI from '../lib/api/mongod';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const tableHeads = [
  'Item',
  'Cost',
  'Cardinal Price',
  'PS Price',
  'PS Alternative',
  'Status',
  'Action',
];

const DemoTest = (props) => {
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeads.map((v, i) => (
              <TableCell key={i}>{v}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {results.length > 0 &&
            results.map((v, i) => (
              <TableRow key={i}>
                <TableCell>{v.package.brand_name}</TableCell>
                <TableCell>{v.item.cost ?? 'UNKNOWN'}</TableCell>
                <TableCell>{v.cardinalCost ?? 'PENDING'}</TableCell>
                <TableCell>
                  {v.secondaryDetails?.pkgPrice ?? 'PENDING'}
                </TableCell>
                <TableCell></TableCell>
                <TableCell>{v.orderStatus}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DemoTest;
