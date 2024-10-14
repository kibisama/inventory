import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

const MyIconButton = ({ sx, fontSize, variant, ...others }) => {
  return (
    <IconButton sx={{ color: 'primary.main', ...sx }} {...others}>
      {(() => {
        switch (variant) {
          case 'check':
            return <CheckIcon fontSize={fontSize} />;
          case 'close':
            return <CloseIcon fontSize={fontSize} />;
          case 'qrcodescanner':
            return <QrCodeScannerIcon fontSize={fontSize} />;
          case 'unfoldMore':
            return <UnfoldMoreIcon fontSize={fontSize} />;
          case 'unfoldLess':
            return <UnfoldLessIcon fontSize={fontSize} />;
          // case 'summarize':
          //   return <SummarizeIcon fontSize={fontSize} />;
          case 'lightMode':
            return <LightModeIcon fontSize={fontSize} />;
          case 'darkMode':
            return <DarkModeIcon fontSize={fontSize} />;
          case 'edit':
            return <EditIcon fontSize={fontSize} />;
          case 'star':
            return <StarIcon fontSize={fontSize} />;
          case 'starBorder':
            return <StarBorderIcon fontSize={fontSize} />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
