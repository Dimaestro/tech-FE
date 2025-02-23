import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Auth from "@/components/pages/Auth/Auth.tsx";
import Home from "@/components/pages/Home/Home.tsx";
import Dashboard from "@/components/pages/Dashboard/Dashboard.tsx";
import PrivateRoute from "../../utils/router/PrivateRoute.tsx";
import LayoutPage from "@/components/layouts/Home/LayoutPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        children: [
            {
                path: "",
                element: <Home/>
            }
        ]
    },
    {
        path: "login",
        element: <Auth/>,
    },
    {
        path: "register",
        element: <Auth/>,
    },
    {
        path: "dashboard",
        element: <PrivateRoute/>,
        children: [
            {
                path: "",
                element: <Dashboard/>,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router}/>

export default App;
