import { Layout } from '../../components/layout';
import { routes } from '..';
import { HomePage , SpeakersPage, EventsPage, PageNotFound} from '../../pages';
import { BrowserRouter as Router , Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={routes.events} element={<EventsPage />} />
          <Route path={routes.speakers} element={<SpeakersPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
