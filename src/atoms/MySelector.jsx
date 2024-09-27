import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MySelector = (props) => {
  const handleClose = React.useCallback(() => {
    setTimeout(() => {
      document.activeElement.blur();
    }, 0);
  }, []);
  return (
    <FormControl sx={props.sx}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={props.value}
        onChange={props.onChange}
        onClose={handleClose}
      >
        {props.menuItem.map((v, i) => (
          <MenuItem value={i} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelector;
