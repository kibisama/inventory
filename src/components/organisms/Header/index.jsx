import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../molecules/Logo';
import Tools from '../Tools';
import MiniMenu from '../MiniMenu';

const style = {
  header: {
    width: '100%',
    p: 0.25,
    position: 'sticky',
    top: 0,
    zIndex: 998,
    backgroundColor: 'background.paper',
    borderBottom: '1px solid',
    borderColor: 'divider',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    ml: 2,
  },
  miniMenu: {
    position: 'sticky',
  },
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const onMouseEnter = React.useCallback(() => {
    setOpen(true);
  }, []);
  const onMouseLeave = React.useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <React.Fragment>
      <Box sx={style.header}>
        <Box sx={style.logo}>
          <Logo />
        </Box>
        <Box>
          <Tools onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        </Box>
      </Box>
      <MiniMenu
        open={open}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </React.Fragment>
  );
};

export default Header;
