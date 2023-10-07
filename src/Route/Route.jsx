import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/JobDetails/JobDetails";

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
                path: "/jobDetails/:id",
                element: <JobDetails />,
                loader: async ({ params }) => {
                    const res = await fetch("/jobs_all.json");
                    const data = await res.json();
                    return data.find(job => job.id === params.id);
                }
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