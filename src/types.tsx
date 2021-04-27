export interface Token {
  label: string;
}

export interface Price {
  [key: string]: string;
}

export interface Order {
  sell_token: string;
  buy_token: string;
  sell_amount: string;
  buy_amount: string;
  is_sell_order: true;
  allow_partial_fill: boolean;
  exec_sell_amount: boolean;
  exec_buy_amount: string;
  id?: string;
  type?: string;
}

export interface Node {
  id: string;
  label: string;
  ticker: string;
  price: number;
  order: {
    sell: number;
    buy: number;
  };
  exec: {
    sell: number;
    buy: number;
  };
  orders: Order[];
}

export type GenericObject = { [key: string]: any };

export interface Settlement {
  id: string;
  tokens: GenericObject;
  orders: GenericObject;
  prices: GenericObject;
}
