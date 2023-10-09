import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {

    const service = useLoaderData();

    const { img, title, type, details_description, registration_fee } = service;

    const { intro, body, summary } = details_description;

    const bgImg = {
        backgroundImage: `url(${img})`
    };

    return (
        <section className="container mx-auto">
            <Helmet>
                <title>{title} Details | Career Mela</title>
            </Helmet>
            <div className="hero min-h-screen" style={bgImg}>
                <div className="hero-overlay bg-blue-50 bg-opacity-90 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-fit py-6 text-black">
                        <h1 className="pb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">{title}</h1>
                        <p className="italic mb-4 text-center">{registration_fee}</p>
                        <div className="mb-5 text-justify space-y-4">
                            <p className="text-xl text-center">Why and What is <span className="font-bold">{type}</span></p>
                            <p>{intro}</p>
                            <ol className="list-decimal list-inside">
                                {
                                    body.map((point, idx) => <li className={`mb-2 ${idx < 5 ? "text-black" : idx < 10 ? "text-gray-700" : "text-gray-600"}`} key={idx}>
                                        <span className="font-bold underline">{point.title}:</span>
                                        <span> {point.description}</span>
                                    </li>)
                                }
                            </ol>
                            <p className="italic">{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;