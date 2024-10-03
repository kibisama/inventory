import { IconButton } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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
          case 'lightMode':
            return <LightModeIcon />;
          case 'darkMode':
            return <DarkModeIcon />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
