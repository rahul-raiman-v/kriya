import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage, TeamsPage } from '../../pages';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path={routes.home} element={<HomePage />} /> */}
        <Route path={routes.home} element={<TeamsPage />} />
      </Routes>
    </Router>
  );
};
