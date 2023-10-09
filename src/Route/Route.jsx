import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginRegisterPage from "../pages/LogIn/LogInRegisterPage";

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
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch("/servicesDetails.json");
                    const data = await res.json();
                    const services = data.services;
                    return services.find(service => service.id == params.id);
                }
            },
            {
                path: "/upcomingEvents",
                element: <div>All Events</div>,
            },
            {
                path: "/allEvents/:category",
                element: <div>Category wise All Events</div>,
                loader: async ({ params }) => {
                    const res = await fetch("/allEvents.json");
                    const allEvents = await res.json();
                    return allEvents.filter(event => event.category.toLowerCase() === params.category.toLowerCase());
                },
            },
            {
                path: "/appliedEvents",
                element: <PrivateRoute><div>Applied Events</div></PrivateRoute>,
                loader: async () => {
                    const res = await fetch("/allEvents.json");
                    const allEvents = await res.json();
                    return allEvents;
                }
            },
            {
                path: "/profile",
                element: <PrivateRoute><div>Profile</div></PrivateRoute>,
            },
            {
                path: "/loginRegister",
                element: <LoginRegisterPage></LoginRegisterPage>,
            },
        ]
    },
]);

export default router;