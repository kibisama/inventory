import { IconButton } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const MyIconButton = (props) => {
  return (
    <IconButton
      sx={{ color: 'primary.main', ...props.sx }}
      onClick={props.onClick}
    >
      {(() => {
        switch (props.variant) {
          case 'qrcodescanner':
            return <QrCodeScannerIcon />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
