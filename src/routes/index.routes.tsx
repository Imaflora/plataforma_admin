import { Routes, Route } from 'react-router-dom';
import RouterWrapper from './wrapper.routes';

import { ROUTES, ROUTES_INSIDE } from './list.routes';
// import RequireAuth from '../components/RequireAuth';

function Paths() {
  return (
    <Routes>
      {ROUTES.map((route) => {
        const Component = route.element;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={<RouterWrapper children={<Component />} />}
          />
        );
      })}

      <Route>
        {ROUTES_INSIDE.map((route) => {
          const Component = route.element;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={<RouterWrapper dashboard children={<Component />} />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default Paths;
