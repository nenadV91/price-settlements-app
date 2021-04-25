import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from 'components/Loader';
import mockApi from 'mockApi';
import theme from 'theme';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    table: {
      minWidth: 650,
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  };
});

const SettlementList: React.FC = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rows, setRows] = useState<any>([]);

  const getSettlements = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const data = await mockApi.getSettlements();
      setRows(data);
    } catch (err) {
      console.log(`Error fetching settlements, ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getSettlements();
  }, [getSettlements]);

  return (
    <Grid container justify='center'>
      <Grid item md={8}>
        <Typography variant='h4' component='h4' gutterBottom>
          Latest settlements
        </Typography>

        {isLoading && <Loader />}

        {!isLoading && rows ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Settlement</TableCell>
                  <TableCell align='right'>Tokens</TableCell>
                  <TableCell align='right'>Total orders</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      <Link
                        className={classes.link}
                        to={`/settlements/${row.id}`}
                      >
                        {row.id}
                      </Link>
                    </TableCell>
                    <TableCell align='right'>
                      {Object.keys(row.tokens).length}
                    </TableCell>
                    <TableCell align='right'>
                      {Object.keys(row.orders).length}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default SettlementList;
