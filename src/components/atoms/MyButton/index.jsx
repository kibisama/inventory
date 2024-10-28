import { Button } from '@mui/material';
// const style = { color: 'primary.main' };
// const style = { backgroundColor: '#33cccc' };

const MyButton = (props) => {
  return (
    <Button
      variant={props.variant ?? 'contained'}
      //   sx={{ ...style, ...props.sx }}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
