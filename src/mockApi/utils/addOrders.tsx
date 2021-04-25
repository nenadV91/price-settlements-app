import { Order } from '../types';

export default function addOrders(nodes: any, orders: Order) {
  Object.entries(orders).forEach(([id, order]) => {
    const {
      sell_token,
      buy_token,
      exec_sell_amount,
      exec_buy_amount,
      sell_amount,
      buy_amount,
    } = order;

    const sell = nodes[sell_token];
    const buy = nodes[buy_token];
    sell.exec.sell += Number(exec_sell_amount);
    sell.order.sell += Number(sell_amount);
    buy.exec.buy += Number(exec_buy_amount);
    buy.order.buy += Number(buy_amount);

    sell.orders.push({ id, type: 'sell', ...order });
    buy.orders.push({ id, type: 'buy', ...order });
  });
}
