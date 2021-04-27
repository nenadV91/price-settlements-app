# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Notes

## UI

- two views, one for list of settlements (SettlementList) and one for single settlement (Settlement)
- each view will call separate mockApi endpoint for the data
- each view will be one react container

#### SettlementList

- gets the data in original format (array of settlement objects)
- displays table of settlements and each row will have a link to a single settlement view

#### Settlement

- gets the data formated by each individual node (array of node objects)
- uses id from the url and passes it as a parameter to the api endpoint
- example url `/settlements/vFWqhywsvccmb7oAqmrnxH`
- on the left it displays nodes graph and a table with all nodes for that settlement
- on the right it displays single (currently selected) node details
- to select active node click on the nodes in the graph or on the table row below the graph

## Api/endpoints

- for the demo purposes add delay for to each endpoint

#### getSettlements

- returns data in the original format

#### getSettlement

- takes an id as a parameter and uses that id to select correct settlement
- first restructure data to the format of nodes (object of nodes) (getNodes method)
- then add price to each node (addPrices method)
- then add orders data to each node (addOrders method)
- lastly return array of objects with Object.values method
- single node structure will look like

```typescript
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
```

## Containers

- from the containers we create api calls and get the data
- data is kept in the state
- we wrap the function that calls the api in useCallback and also try...catch and then call that function in useEffect hook
- each container has isLoading state that is true by default and is set to false when api request is finished (either fails or succeed), and if this state is true then we show Loader component
