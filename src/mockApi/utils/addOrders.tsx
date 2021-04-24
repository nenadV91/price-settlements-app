import { Order } from '../types';

export default function addOrders(nodes: any, orders: Order) {
  Object.entries(orders).forEach(([id, { sell_token, buy_token, ...rest }]) => {
    nodes[sell_token].sold += Number(rest.exec_sell_amount);
    nodes[buy_token].bought += Number(rest.exec_buy_amount);
  });
}
