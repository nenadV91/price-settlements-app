import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReactECharts from 'echarts-for-react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import getChartOptions from './getChartOptions';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  heading: {
    padding: theme.spacing(1),
  },
}));

const NodesGraph = ({ nodes, id, handleNodeClick }) => {
  const classes = useStyles();

  const chartOptions = useMemo(() => getChartOptions(nodes), [nodes]);

  const handleClick = (node) => {
    if (node?.data?.node) {
      handleNodeClick(node?.data?.node);
    }
  };

  const onEvents = {
    click: handleClick,
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.heading}>
        <Typography variant='h6'>Nodes graph</Typography>
      </div>

      <Divider />

      <ReactECharts onEvents={onEvents} option={chartOptions} />
    </Paper>
  );
};

export default React.memo(NodesGraph);
