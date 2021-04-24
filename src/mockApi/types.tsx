export interface Token {
  [key: string]: {
    label: string;
  };
}

export interface Price {
  [key: string]: string;
}

export interface Order {
  [key: string]: {
    sell_token: string;
    buy_token: string;
    sell_amount: string;
    buy_amount: string;
    is_sell_order: true;
    allow_partial_fill: boolean;
    exec_sell_amount: boolean;
    exec_buy_amount: string;
  };
}

export interface Node {
  [key: string]: {
    label: string;
    ticker: string;
    sold: number;
    bought: number;
    price: number;
  };
}
