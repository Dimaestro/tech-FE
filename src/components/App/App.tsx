import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layouts/Layout.tsx";
import Auth from "../pages/auth/Auth.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [],
    },
    {
        path: "auth",
        element: <Auth />,
    },
]);

const App = () => <RouterProvider router={router} />

export default App;
