import { Switch, Route } from 'react-router-dom';
import SettlementList from 'containers/SettlementList';
import Settlement from 'containers/Settlement';
import NotFound from 'containers/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='(/|/settlements)' component={SettlementList} />
    <Route exact path='/settlements/:id' component={Settlement} />
    <Route path='*' component={NotFound} />
  </Switch>
);

export default Routes;
