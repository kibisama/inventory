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
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        onClose={handleClose}
        disabled={props.disabled}
      >
        {props.menuItem.map((v, i) => (
          <MenuItem value={v} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelector;
