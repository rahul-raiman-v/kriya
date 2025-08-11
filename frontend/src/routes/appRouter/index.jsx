import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/homePage';
import { routes, PrivateRouter, PublicRouter } from '..';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
      </Switch>
    </Router>
  );
};
