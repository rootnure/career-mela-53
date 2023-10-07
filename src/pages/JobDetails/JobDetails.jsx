import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const job = useLoaderData();

    console.log(job);

    return (
        <section className="container mx-auto">
            <h3>Job Details</h3>
        </section>
    );
};

export default JobDetails;