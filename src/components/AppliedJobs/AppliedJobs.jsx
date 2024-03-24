import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id == id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            console.log(jobsApplied, jobs, storedJobIds)
        }
    }  ,[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-extrabold my-12">Applied Jobs</h2>
            </div>
            <div>
            <div className="flex justify-end">
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn m-1">Filtered by</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
                <div>
                    {
                        displayJobs.map(job => 
                            <div key={job.id} className="card card-side border my-4 rounded-lg bg-base-100">
                            <figure className="w-56 p-6"><img src={job.logo}/></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <div className="flex-1">
                                            <h2 className="card-title">{job.job_title}</h2>
                                            <h3>{job.company_name}</h3>
                                            <div className="space-x-3 my-4">
                                                <button className="px-5 py-2 font-extrabold border-2 text-indigo-500 border-indigo-600 rounded-lg">{job.remote_or_onsite}</button>
                                                <button className="px-5 py-2 font-extrabold border-2 text-indigo-500 border-indigo-600 rounded-lg">{job.job_type}</button>
                                            </div>
                                            <span className="grid grid-cols-2  w-7/12">
                                                <p className="flex items-center gap-1 my-2"><span className="text-xl"><SlLocationPin/></span><span className="text-xl">{job.location}</span></p>
                                                <p className="flex items-center gap-1 my-2"><span className="text-2xl"><AiOutlineDollar/></span><span className="text-xl">Salary : {job.salary}</span></p>
                                            </span>
                                        </div>
                                        <div className="card-actions ">
                                            <button className="btn text-white bg-gradient-to-r from-indigo-400 to-indigo-500">View Details</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;