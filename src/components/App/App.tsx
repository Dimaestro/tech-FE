import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Auth from '@/components/pages/Auth';
import Home from '@/components/pages/Home';
import Index from '@/components/pages/Dashboard';
import PrivateRoute from '../../utils/router/PrivateRoute.tsx';
import LayoutHomePage from '@/components/layouts/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHomePage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: 'signin',
    element: <Auth />,
  },
  {
    path: 'signup',
    element: <Auth />,
  },
  {
    path: 'dashboard',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Index />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
