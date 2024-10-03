import { IconButton } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SummarizeIcon from '@mui/icons-material/Summarize';

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
          case 'summarize':
            return <SummarizeIcon />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
