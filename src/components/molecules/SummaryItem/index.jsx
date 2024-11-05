import { Paper, Typography } from '@mui/material';

const style = {
  container: {
    minWidth: 120,
    width: 'fit-content',
    px: 2,
    py: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    marginBottom: 2,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: 'h4.fontSize',
    fontWeight: 600,
  },
};

const SummaryItem = (props) => {
  return (
    <Paper elevation={3} sx={style.container}>
      <Typography sx={style.label}>{props.label}</Typography>
      <Typography sx={style.content}>{props.content}</Typography>
    </Paper>
  );
};

export default SummaryItem;
