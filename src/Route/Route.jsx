import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

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
                path: "/serviceDetails/:id",
                element: <ServiceDetails />,
                loader: async ({ params }) => {
                    const res = await fetch("/servicesDetails.json");
                    const data = await res.json();
                    const services = data.services;
                    console.log(services);
                    return services.find(service => service.id == params.id);
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