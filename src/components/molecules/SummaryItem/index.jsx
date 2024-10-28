import { Paper, Typography } from '@mui/material';

const style = {
  container: {
    minWidth: 100,
    width: 'fit-content',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '1rem',
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
    <Paper sx={style.container}>
      <Typography sx={style.label}>{props.label}</Typography>
      <Typography sx={style.content}>{props.content}</Typography>
    </Paper>
  );
};

export default SummaryItem;
