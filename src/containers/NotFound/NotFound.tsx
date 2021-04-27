import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `calc(100vh - ${theme.spacing(4) * 5}px)`,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
}));

const NotFound = (): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.text}>404 - page not found</Typography>
      <Typography>
        <Link className={classes.link} to='/'>
          Go home
        </Link>
      </Typography>
    </Grid>
  );
};

export default NotFound;
