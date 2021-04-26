const NodeTooltip = ({ node }) => {
  return (
    <div>
      <strong>
        {node.ticker} ({node.price})
      </strong>

      <div>
        <span>Sold: </span>
        <span>{node.exec.sell}</span>
      </div>

      <div>
        <span>Bought: </span>
        <span>{node.exec.buy}</span>
      </div>

      <div>
        <span>Orders: </span>
        <span>{node.orders.length}</span>
      </div>
    </div>
  );
};

export default NodeTooltip;
