const getChartOptions = (node) => {
  function getData(obj, label) {
    return Object.entries(obj).map(([key, value]) => ({
      name: `${label} ${key}`,
      value,
    }));
  }

  const data = [
    ...getData(node.order, 'Ordered'),
    ...getData(node.exec, 'Executed'),
  ];

  return {
    title: {
      text: node.label,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
};

export default getChartOptions;
