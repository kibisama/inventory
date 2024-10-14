import { styled } from '@mui/material/styles';

const StyledLabelInput = styled('input')(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: 'none',
  boxSizing: 'border-box',
  width: '100%',
  '&:focus': {
    outline: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default StyledLabelInput;
