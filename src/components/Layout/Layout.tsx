import { ReactChild, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2) * 4,
    paddingBottom: theme.spacing(2) * 4,
    minHeight: 'calc(100vh - 50px)',
  },
}));

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props): ReactElement => {
  const classes = useStyles();

  return <Container className={classes.root}>{children}</Container>;
};

export default Layout;
