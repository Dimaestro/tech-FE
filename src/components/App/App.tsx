import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import Layout from "../layouts/Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>...Loading</div>}>
                <Layout />
            </Suspense>
        ),
    },
]);

const App = () => <RouterProvider router={router} />

export default App
