import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=> {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="">
            <div className="text-center my-10">
                <h2 className="text-5xl font-extrabold pt-7 mb-5">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center my-6">
                <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn text-white bg-gradient-to-r from-indigo-400 to-indigo-500">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;