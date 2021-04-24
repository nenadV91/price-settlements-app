import { Token } from '../types';

export default function getNodes(data: Token[]) {
  return Object.entries(data).reduce((r, [ticker, { label }]) => {
    r[ticker] = {
      ticker,
      label,
      sold: 0,
      bought: 0,
    };

    return r;
  }, {});
}
