import data from './data.json';
import { getNodes, addPrices, addOrders } from './utils';

interface Settlement {
  id: string;
  tokens: any;
  orders: any;
  prices: any;
}

class MockApi {
  constructor(protected data: Settlement[]) {
    this.data = data;
  }

  getSettlements = async () => {
    return this.data;
  };

  getSettlement = async (id: string) => {
    const data = this.data.find((item) => item.id === id);

    if (!data) {
      return null;
    }

    const { tokens, prices, orders } = data;
    const nodes = getNodes(tokens);

    addPrices(nodes, prices);
    addOrders(nodes, orders);

    return nodes;
  };
}

const api = new MockApi(data);

export default api;
