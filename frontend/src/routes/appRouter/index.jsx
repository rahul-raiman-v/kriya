import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage, TimelinePage , SpeakersPage, EventsPage} from '../../pages';

import { Layout } from '../../components';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.timeline} element={<TimelinePage/>}/>
          <Route path={routes.speakers} element={<SpeakersPage />} />
          <Route path={routes.events} element={<EventsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
