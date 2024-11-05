import { Box, Typography } from '@mui/material';
import src from '../../../svg/lookup.svg';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 'h6.fontSize',
  },
};

const NoResultFoundImage = (props) => {
  return (
    <Box sx={style.container}>
      <img width={props.width ?? 300} src={src} />
      <Typography sx={style.text}>No results found</Typography>
    </Box>
  );
};

export default NoResultFoundImage;
