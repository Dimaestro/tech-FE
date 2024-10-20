import {Navigate, Outlet} from "react-router-dom";

// interface IPrivateRoute {
//
// }

const PrivateRoute = () => {
    const auth = true;
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    );
};

export default PrivateRoute;
