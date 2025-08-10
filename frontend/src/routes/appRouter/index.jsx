import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes, PrivateRouter, PublicRouter } from '..';
import { HomePage, TimelinePage } from '../../pages';
import { Layout } from '../../components';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/timeline' element={<TimelinePage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};
