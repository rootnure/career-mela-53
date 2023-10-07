import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="col-span-3">
            <h3 className="text-3xl">Featured Jobs</h3>
            <div className="space-y-12">
                {
                    jobs.map((job, idx) => <Job key={job.id} job={job} isEven={idx % 2 ? true : false}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;