import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    table: {
      '& td, & th': {
        border: 'none',
      },
    },
    row: {
      cursor: 'pointer',
    },
  };
});

const NodeList = ({ nodes = [], handleNodeClick }) => {
  const classes = useStyles();

  return (
    <Paper>
      <List>
        <ListItem>
          <Typography variant='h6'>Nodes overview</Typography>
        </ListItem>

        <Divider />

        <ListItem>
          <Table
            size='small'
            className={classes.table}
            aria-label='NodeList table'
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Ticker</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Orders</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nodes.map((node: any) => (
                <TableRow
                  className={classes.row}
                  onClick={() => handleNodeClick(node)}
                  hover={true}
                  key={node.ticker}
                >
                  <TableCell component='th' scope='row'>
                    {node.label}
                  </TableCell>
                  <TableCell>{node.ticker}</TableCell>
                  <TableCell>{node.price}</TableCell>
                  <TableCell>{node.orders.length}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ListItem>
      </List>
    </Paper>
  );
};

export default NodeList;
