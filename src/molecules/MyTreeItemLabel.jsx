import React from 'react';
import { TreeItem2Label } from '@mui/x-tree-view/TreeItem2';
import MyIconButton from '../atoms/MyIconButton';
import { Box } from '@mui/material';
import Counter from '../atoms/Counter';
import StarIcon from '@mui/icons-material/Star';
import InvTables from './InvTables';

const style = {
  label: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  starIcon: {
    marginLeft: '1rem',
    color: 'primary.main',
  },
  editIcon: {
    marginLeft: '1rem',
    color: 'grey',
    ':hover': { color: 'primary.main' },
  },
};
const fontStyle = [
  { fontSize: '1.1rem' },
  { fontSize: '1.05rem' },
  { fontSize: '1rem' },
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
        sx={{ ...style.label, ...fontStyle[hierarchy] }}
      >
        {children}
        <Box sx={style.status}>
          {hierarchy === 2 && <Counter count={count} optimalQty={optimalQty} />}
          {preferred && <StarIcon sx={style.starIcon} />}
          {editable && (
            <MyIconButton
              variant="edit"
              sx={style.editIcon}
              fontSize="small"
              onClick={toggleItemEditing}
            />
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
