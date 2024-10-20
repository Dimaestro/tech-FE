import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/auth/Auth.tsx";
import Home from "../pages/home/Home.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import PrivateRoute from "../../utils/router/PrivateRoute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "dashboard",
        element: <PrivateRoute />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "auth",
        element: <Auth />,
    },
]);

const App = () => <RouterProvider router={router} />

export default App;
