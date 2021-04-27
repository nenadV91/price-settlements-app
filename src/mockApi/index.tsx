import data from './data.json';
import { getNodes, addPrices, addOrders } from './utils';
import { Settlement, Node } from 'types';

class MockApi {
  constructor(protected data: Settlement[]) {
    this.data = data;
  }

  delay = (time: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  getSettlements = async (): Promise<Settlement[]> => {
    await this.delay(1000);
    return this.data;
  };

  getSettlement = async (id: string): Promise<Node[] | null> => {
    const data = this.data.find((item) => item.id === id);

    if (!data) {
      return null;
    }

    const { tokens, prices, orders } = data;
    const nodes = getNodes(tokens);

    addPrices(nodes, prices);
    addOrders(nodes, orders);

    await this.delay(1000);

    const result = Object.values(nodes);

    return result;
  };
}

const api = new MockApi(data);

export default api;
