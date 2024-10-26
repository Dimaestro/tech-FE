import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "../pages/Auth/Auth.tsx";
import Home from "../pages/Home/Home.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import PrivateRoute from "../../utils/router/PrivateRoute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "Login",
        element: <Auth />,
    },
    {
        path: "register",
        element: <Auth />,
    },
    {
        path: "Dashboard",
        element: <PrivateRoute />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />

export default App;
