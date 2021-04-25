import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});

const StatBox = ({ label, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>{label}</Typography>
      <Typography color='primary'>{value}</Typography>
    </div>
  );
};

export default StatBox;
