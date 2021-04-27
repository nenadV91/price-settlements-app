import { Token, Node } from 'types';

export default function getNodes(data: {
  [key: string]: Token;
}): { [key: string]: Node } {
  return Object.entries(data).reduce((r, [ticker, { label }]) => {
    r[ticker] = {
      id: ticker,
      order: { sell: 0, buy: 0 },
      exec: { sell: 0, buy: 0 },
      orders: [],
      ticker,
      label,
    };

    return r;
  }, {});
}
