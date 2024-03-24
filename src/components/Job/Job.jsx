import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite,
        location, job_type, salary} = job;
    return (
        <div className="p-10 bg-base-100 border-2 border-gray-100 rounded-xl">
            <figure className="w-36 h-10"><img src={logo} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="space-x-3 my-4">
                    <button className="px-5 py-2 font-extrabold border-2 text-indigo-500 border-indigo-600 rounded-lg">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border-2 text-indigo-500 border-indigo-600 rounded-lg">{job_type}</button>
                </div>
                <div>
                    <div className="flex gap-4">
                        <p className="flex items-center gap-1 my-2"><span className="text-xl"><SlLocationPin/></span><span className="text-xl">{location}</span></p>
                        <p className="flex items-center gap-1 my-2"><span className="text-2xl"><AiOutlineDollar/></span><span className="text-xl">Salary : {salary}</span></p>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn text-white bg-gradient-to-r from-indigo-400 to-indigo-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object
}
export default Job;