import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  paddingBottom: '0.5rem',
};

const UpperRightCloseButton = (props) => {
  return (
    <Box style={style}>
      <IconButton
        sx={{ color: 'primary.main', ...props.sx }}
        onClick={props.onClick}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default UpperRightCloseButton;
