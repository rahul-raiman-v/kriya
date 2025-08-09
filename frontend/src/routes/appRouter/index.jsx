import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage , SpeakersPage} from '../../pages';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path={routes.home} element={<HomePage />} /> */}
        <Route path={routes.speakers} element={<SpeakersPage />} />
      </Routes>
    </Router>
  );
};
