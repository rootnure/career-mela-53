import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Register />,
            },
            {
                path: "/appliedJobs",
                element: <Register />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
        ]
    },
]);

export default router;