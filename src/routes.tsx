import { Switch, Route } from 'react-router-dom';
import SettlementList from 'containers/SettlementList';
import Settlement from 'containers/Settlement';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SettlementList} />
    <Route path="/:id" component={Settlement} />
  </Switch>
)

export default Routes;