import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
