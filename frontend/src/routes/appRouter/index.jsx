import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage} from '../../pages';
import { EventsPage } from '../../pages/eventsPage';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
};
