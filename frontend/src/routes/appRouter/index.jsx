import { Layout } from '../../components';
import { routes } from '..';
import {
  HomePage,
  SpeakersPage,
  EventsPage,
  PageNotFound,
  TeamsPage,
  ComboPage,
  ComboDetail,
  DevelopersPage,
} from '../../pages';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router';
import React from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // doesn't render anything
};

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.events} element={<EventsPage />} />
          <Route path={routes.speakers} element={<SpeakersPage />} />
          <Route path={routes.teams} element={<TeamsPage />} />
          <Route path={routes.combo} element={<ComboPage />} />
          <Route path={routes.comboDetail} element={<ComboDetail />} />
          <Route path={routes.developers} element={<DevelopersPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
