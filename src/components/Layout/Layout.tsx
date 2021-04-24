import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2) * 4,
    paddingBottom: theme.spacing(2) * 4,
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Layout;