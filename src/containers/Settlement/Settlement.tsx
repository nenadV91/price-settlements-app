import { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loader from 'components/Loader';
import mockApi from 'mockApi';

type Props = {
  match?: {
    params?: {
      id: string;
    };
  };
};

const useStyles = makeStyles({});

const Settlement = (props: Props) => {
  const classes = useStyles();

  const id = props.match?.params?.id;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nodes, setNodes] = useState<any>(null);
  const [activeNode, setActiveNode] = useState<any>(null);

  const getSettlement = useCallback(async (): Promise<void> => {
    if (!id) {
      return;
    }

    try {
      const res = await mockApi.getSettlement(id);
      setNodes(res);
    } catch (err) {
      console.log(`Error fetching settlements, ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getSettlement();
  }, [getSettlement]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !nodes) {
    return <Redirect to='/not-found' />;
  }

  return (
    <Grid container justify='center'>
      <Grid item md={8}>
        Graph
      </Grid>

      <Grid item md={4}>
        Sidebar
      </Grid>
    </Grid>
  );
};

export default Settlement;
