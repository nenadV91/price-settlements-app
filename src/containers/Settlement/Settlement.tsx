import { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Loader from 'components/Loader';
import mockApi from 'mockApi';

import NodeList from 'components/NodeList';
import NodeOverview from 'components/NodeOverview';
import NodesGraph from 'components/NodesGraph';

type Props = {
  match?: {
    params?: {
      id: string;
    };
  };
};

const useStyles = makeStyles((theme) => {
  return {
    title: {
      marginBottom: theme.spacing(3),
    },
    titleStrong: {
      marginLeft: theme.spacing(1),
      color: theme.palette.primary.main,
      fontSize: '1.5rem',
    },
    heading: {
      marginBottom: theme.spacing(1),
    },
    widget: {
      marginBottom: theme.spacing(4),
    },
  };
});

const Settlement = (props: Props) => {
  const classes = useStyles();

  const id = props.match?.params?.id;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeNode, setActiveNode] = useState<any>(null);
  const [nodes, setNodes] = useState<any>(null);

  const selectNode = useCallback((node: any) => {
    setActiveNode(node);
  }, []);

  const getSettlement = useCallback(async (): Promise<void> => {
    if (!id) {
      return;
    }

    try {
      const res = await mockApi.getSettlement(id);
      setNodes(res);
      if (res) setActiveNode(res[0]);
    } catch (err) {
      console.log(`Error fetching settlement, ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getSettlement();
  }, [getSettlement]);

  if (isLoading) {
    return (
      <Grid container>
        <Grid item>
          <Loader />
        </Grid>
      </Grid>
    );
  }

  if (!isLoading && !nodes) {
    return <Redirect to='/not-found' />;
  }

  return (
    <Grid spacing={2} container>
      <Grid className={classes.title}>
        <Typography component='span' variant='h6'>
          Settlement
        </Typography>

        <Typography
          className={classes.titleStrong}
          variant='h4'
          component='span'
          color='primary'
        >
          {id}
        </Typography>
      </Grid>

      <Grid spacing={2} container>
        <Grid item md={7}>
          <div className={classes.widget}>
            <NodesGraph handleNodeClick={selectNode} nodes={nodes} id={id} />
          </div>
        </Grid>

        <Grid item md={5}>
          <div className={classes.widget}>
            <NodeList handleNodeClick={selectNode} nodes={nodes} />
          </div>

          <div className={classes.widget}>
            {activeNode ? <NodeOverview node={activeNode} /> : null}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Settlement;
