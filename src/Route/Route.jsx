import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginRegisterPage from "../pages/LogIn/LogInRegisterPage";
import EventsByCategory from "../pages/EventByCategory/EventsByCategory";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import AppliedEvents from "../pages/AppliedEvents/AppliedEvents";

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
                element: <UpcomingEvents></UpcomingEvents>,
                loader: async () => {
                    const res = await fetch("/allEvents.json");
                    const allEvents = await res.json();
                    return allEvents;
                }
            },
            {
                path: "/allEvents/:category",
                element: <EventsByCategory></EventsByCategory>,
                loader: async ({ params }) => {
                    const res = await fetch("/allEvents.json");
                    const allEvents = await res.json();
                    return allEvents.filter(event => event.category.toLowerCase() === params.category.toLowerCase());
                },
            },
            {
                path: "/appliedEvents",
                element: <PrivateRoute><AppliedEvents /></PrivateRoute>,
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