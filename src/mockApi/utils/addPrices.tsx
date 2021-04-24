import { Price } from '../types';

export default function addPrices(nodes: any, prices: Price[]) {
  for (let key in prices) {
    if (nodes[key]) {
      nodes[key].price = Number(prices[key]);
    }
  }
}
