import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import TaskIcon from '@mui/icons-material/Task';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

const style = { color: 'primary.main' };

const MyIconButton = ({ sx, variant, ...others }) => {
  return (
    <IconButton {...others}>
      {(() => {
        switch (variant) {
          case 'check':
            return <CheckIcon sx={{ ...style, ...sx }} />;
          case 'close':
            return <CloseIcon sx={{ ...style, ...sx }} />;
          case 'qrcodescanner':
            return <QrCodeScannerIcon sx={{ ...style, ...sx }} />;
          case 'unfoldMore':
            return <UnfoldMoreIcon sx={{ ...style, ...sx }} />;
          case 'unfoldLess':
            return <UnfoldLessIcon sx={{ ...style, ...sx }} />;
          case 'task':
            return <TaskIcon sx={{ ...style, ...sx }} />;
          case 'lightMode':
            return <LightModeIcon sx={{ ...style, ...sx }} />;
          case 'darkMode':
            return <DarkModeIcon sx={{ ...style, ...sx }} />;
          case 'star':
            return <StarIcon sx={{ ...style, ...sx }} />;
          case 'starBorder':
            return <StarBorderIcon sx={{ ...style, ...sx }} />;
          default:
            return;
        }
      })()}
    </IconButton>
  );
};

export default MyIconButton;
