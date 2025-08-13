import { Layout } from '../../components/layout';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage, TimelinePage , SpeakersPage, EventsPage, PageNotFound, TeamsPage, ComboPage, ComboDetail} from '../../pages';

import { BrowserRouter as Router , Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={routes.timeline} element={<TimelinePage/>}/> */}
          <Route path={routes.events} element={<EventsPage />} />
          <Route path={routes.speakers} element={<SpeakersPage />} />
          <Route path={routes.teams} element={<TeamsPage />} />
          <Route path={routes.combo} element={<ComboPage />} />
          <Route path={routes.comboDetail} element={<ComboDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};