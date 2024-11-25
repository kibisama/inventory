import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 600,
    fontSize: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    // backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 'none',
  },
}));

const CustomTable = ({
  heads = [],
  keys = [],
  rows = [],
  formats = {},
  rowStyles,
  rowOnClick,
  cellStyles = {},
  aligns = {},
  size = 'small',
  hover = false,
}) => {
  return (
    <TableContainer>
      <Table size={size}>
        <TableHead>
          <StyledTableRow>
            {keys.map((v, i) => (
              <StyledTableCell key={i} align={aligns[v] ?? 'center'}>
                {heads[i]}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((v, i) => {
            const style =
              rowStyles instanceof Function ? rowStyles(v) : undefined;
            const _rowOnClick = rowOnClick
              ? (e) => {
                  e.preventDefault();
                  rowOnClick(v);
                }
              : undefined;
            return (
              <StyledTableRow
                key={i}
                sx={style}
                onClick={_rowOnClick}
                hover={hover}
              >
                {keys.map((y, j) => {
                  const value = formats[y] ? formats[y](v) : rows[i][y];
                  const style = cellStyles[y] ? cellStyles[y](v) : undefined;
                  return (
                    <StyledTableCell
                      key={j}
                      sx={style}
                      align={aligns[y] ?? 'center'}
                    >
                      {value}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
