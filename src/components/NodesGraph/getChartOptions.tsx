import ReactDOMServer from 'react-dom/server';
import NodeTooltip from './NodeTooltip';

const getChartOptions = (nodes) => {
  if (!nodes) {
    return null;
  }

  const data = nodes.map((node) => ({
    name: node.ticker,
    symbolSize: 60,
    node,
  }));

  const formatter = ({ data }) => {
    return ReactDOMServer.renderToString(<NodeTooltip node={data.node} />);
  };

  return {
    tooltip: {
      formatter,
    },
    animationDurationUpdate: 500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'force',
        roam: true,
        force: {
          repulsion: 200,
        },
        label: {
          show: true,
        },
        edgeLabel: {
          fontSize: 20,
        },
        data,
      },
    ],
  };
};

export default getChartOptions;
