import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/homePage';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage , SpeakersPage, EventsPage} from '../../pages';


export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.events} element={<EventsPage />} />
        <Route path={routes.speakers} element={<SpeakersPage />} />
      </Switch>
    </Router>
  );
};
