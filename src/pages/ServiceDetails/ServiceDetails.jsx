import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {

    const service = useLoaderData();

    console.log(service);

    return (
        <section className="container mx-auto">
            <Helmet>
                <title>{service.title} Details | Career Mela</title>
            </Helmet>
            <h3>Service Details</h3>
        </section>
    );
};

export default ServiceDetails;