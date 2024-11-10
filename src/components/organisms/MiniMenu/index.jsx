import { useDispatch } from 'react-redux';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import { setOpen } from '../../../reduxjs@toolkit/cardinalInvoiceSlice';

const actions = [{ name: 'Review Cardinal Invoice', icon: <TaskIcon /> }];

const style = {
  position: 'fixed',
  zIndex: 999,
  top: '2rem',
  right: '7.5rem',
  // backgroundColor: 'white',
};

const MiniMenu = ({ open, onMouseEnter, onMouseLeave }) => {
  const dispatch = useDispatch();
  const openCardinalInvoice = () => {
    dispatch(setOpen(true));
  };
  return (
    <Box sx={style}>
      <SpeedDial
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ariaLabel="Mini Menu"
        direction="right"
        hidden
        open={open}
      >
        <SpeedDialAction
          key="Review Cardinal Invoice"
          icon={<TaskIcon />}
          tooltipTitle="Review Cardinal Invoice"
          onClick={openCardinalInvoice}
        />
      </SpeedDial>
    </Box>
  );
};

export default MiniMenu;
