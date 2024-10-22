import React from 'react';
import { TreeItem2Label } from '@mui/x-tree-view/TreeItem2';
import MyIconButton from '../atoms/MyIconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import Counter from '../atoms/Counter';
import StarIcon from '@mui/icons-material/Star';
import InvTables from './InvTables';

const style = {
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 'h6.fontSize',
  },
  starIcon: {
    marginRight: 1,
    color: 'primary.main',
    fontSize: 'h5.fontSize',
  },
  editIcon: {
    fontSize: 'h6.fontSize',
    marginLeft: 5,
    marginRight: 1,
    color: 'grey',
    ':hover': { color: 'primary.main' },
  },
};
const fontStyle = [
  { fontSize: 'h5.fontSize' },
  { fontSize: 'h6.fontSize' },
  { fontSize: 'h6.fontSize' },
];

const MyTreeItemLabel = ({
  editing,
  editable,
  children,
  toggleItemEditing,
  item,
  ...other
}) => {
  const { hierarchy, count, optimalQty, preferred, data } = item;
  if (children) {
    return (
      <TreeItem2Label
        {...other}
        editable={editable}
        sx={{ ...style.container, ...fontStyle[hierarchy] }}
      >
        <Box sx={style.label}>
          {preferred && <StarIcon sx={style.starIcon} />}
          {children}
        </Box>
        <Box sx={style.status}>
          {hierarchy === 2 && <Counter count={count} optimalQty={optimalQty} />}
          {editable && (
            <EditIcon sx={style.editIcon} onClick={toggleItemEditing} />
          )}
        </Box>
      </TreeItem2Label>
    );
  }
  if (data.length > 0) {
    return <InvTables data={data} />;
  }
};

export default MyTreeItemLabel;
