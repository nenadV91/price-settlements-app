import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import ReactECharts from 'echarts-for-react';
import getChartOptions from './getChartOptions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      justifyContent: 'space-between',
    },
    stats: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    table: {
      '& td, & th': {
        border: 'none',
      },
    },
    price: {
      fontSize: '2.6rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    info: {
      fontSize: '0.65rem',
      fontWeight: 400,
      color: theme.palette.text.secondary,
    },
    name: {
      marginRight: 5,
    },
    chartItem: {
      display: 'block',
    },
    container: {
      maxHeight: 200,
      overflowY: 'auto',
    },
  };
});

const NodeOverview = ({ node }) => {
  const classes = useStyles();

  const options = getChartOptions(node);

  return (
    <Paper>
      <List>
        <ListItem className={classes.heading}>
          <Typography variant='h6'>
            <span className={classes.name}>{node.label}</span>
            <span className={classes.info}>({node.ticker})</span>
          </Typography>

          <Typography
            className={classes.price}
            color='primary'
            component='h2'
            variant='h2'
          >
            <Tooltip placement='left' title='Clearing price'>
              <span>{node.price}</span>
            </Tooltip>
          </Typography>
        </ListItem>

        <Divider />

        <ListItem>
          <Table
            className={classes.table}
            aria-label='simple table'
            size='small'
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Buy</TableCell>
                <TableCell>Sell</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>Ordered</Typography>
                </TableCell>
                <TableCell>{node.order.buy}</TableCell>
                <TableCell>{node.order.sell}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography>Executed</Typography>
                </TableCell>
                <TableCell>{node.exec.buy}</TableCell>
                <TableCell>{node.exec.sell}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ListItem>

        <Divider />

        <ListItem>
          <TableContainer className={classes.container}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label='simple table'
              size='small'
            >
              <TableHead>
                <TableRow>
                  <TableCell>Tokens (sell/buy)</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Sell amount</TableCell>
                  <TableCell>Buy amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {node.orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      {order.sell_token}/{order.buy_token}
                    </TableCell>
                    <TableCell>
                      <Chip
                        size='small'
                        color={order.is_sell_order ? 'primary' : 'secondary'}
                        label={order.is_sell_order ? 'Sell' : 'Buy'}
                      />
                    </TableCell>
                    <TableCell>{order.sell_amount}</TableCell>
                    <TableCell>{order.buy_amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ListItem>

        <Divider />

        <ListItem className={classes.chartItem}>
          <ReactECharts option={options} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default NodeOverview;
