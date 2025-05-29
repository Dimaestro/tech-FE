import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import PrivateRoute from '@utils/router/PrivateRoute.tsx';
import Home from '@/components/pages/Home';
import LayoutHomePage from '@/components/layouts/Home';
import SignIn from '@pages/Auth/SignIn';
import SignUp from '@pages/Auth/SignUp';
import AuthLayout from '@/components/layouts/Auth';
import Dashboard from '@/components/pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    Component: LayoutHomePage,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: 'signin', Component: SignIn },
      { path: 'signup', Component: SignUp },
    ],
  },
  {
    path: 'dashboard',
    Component: PrivateRoute,
    children: [
      {
        path: '',
        Component: Dashboard,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
