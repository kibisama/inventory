import { ToggleButton, styled } from '@mui/material';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  minWidth: 100,
  borderColor: theme.palette.grey[500],
  fontWeight: 600,
  '&.Mui-disabled': {
    color: theme.palette.grey[500],
  },
}));

export default StyledToggleButton;
