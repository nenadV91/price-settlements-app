import { Token } from '../types';

export default function getNodes(data: Token[]) {
  return Object.entries(data).reduce((r, [ticker, { label }]) => {
    r[ticker] = {
      ticker,
      label,
      exec: {
        sell: 0,
        buy: 0,
      },
      order: {
        sell: 0,
        buy: 0,
      },
      orders: [],
    };

    return r;
  }, {});
}
