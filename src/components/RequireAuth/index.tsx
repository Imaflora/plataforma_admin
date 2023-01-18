import { useLocation, Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location, access: true }} />
  );
}

export default RequireAuth;
