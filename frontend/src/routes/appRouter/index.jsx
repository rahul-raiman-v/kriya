import { Layout } from '../../components/layout';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage , SpeakersPage, EventsPage, TimelinePage} from '../../pages';
import { BrowserRouter as Router , Route, Routes } from 'react-router';


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={routes.events} element={<EventsPage />} />
          <Route path={routes.speakers} element={<SpeakersPage />} />
          <Route path={routes.timeline} element={<TimelinePage />} /> 
        </Route>
      </Routes>
    </Router>
  );
};
