import { Price, Node } from 'types';

export default function addPrices(
  nodes: { [key: string]: Node },
  prices: Price
): void {
  for (let key in prices) {
    if (nodes[key]) {
      nodes[key].price = Number(prices[key]);
    }
  }
}
