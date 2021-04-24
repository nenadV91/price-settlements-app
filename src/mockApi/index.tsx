import data from './data.json';

interface Settlement {
  id: string
  tokens: any
  orders: any
  prices: any
}

class MockApi {
  constructor(protected data: Settlement[]) {
    this.data = data
  }

  getSettlements = async () => {
    return this.data
  }

  getSettlement = async (id: string) => {
    return this.data.find(item => item.id === id)
  }
}

const api = new MockApi(data);

export default api;