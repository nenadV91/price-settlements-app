import { Token } from '../types';

export default function getNodes(data: Token[]) {
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
