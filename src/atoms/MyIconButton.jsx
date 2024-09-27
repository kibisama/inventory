import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MyIconButton = (props) => {
  return (
    <IconButton
      sx={{ color: 'primary.main', ...props.sx }}
      onClick={props.onClick}
    >
      {(() => {
        switch (props.variant) {
          case 'add':
            return <AddIcon />;
          case 'remove':
            return <RemoveIcon />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
