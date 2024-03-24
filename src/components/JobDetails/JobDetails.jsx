import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);


    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast('You have applied successfully');
    }

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-extrabold my-12">Job Details</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 my-32">
                <div className="md:col-span-2">
                    <p className="mb-6 leading-8"><span className="font-extrabold">Job Description:</span><span className="text-gray-700">{job.job_description}</span></p>
                    <p className="mb-6 leading-8"><span className="font-extrabold">Job Responsibility:</span><span>{job.job_responsibility}</span></p>
                    <h4 className="font-extrabold mb-4">Educational Requirements:</h4>
                        <p>{job.educational_requirements}</p>
                    <h4 className="font-extrabold mt-5 mb-6">Experiences:</h4>
                        <p>{job.experiences}</p>
                </div>
                <div className="">
                    <div className="mb-10 p-7 bg-indigo-100 rounded-lg">
                        <h3 className="text-xl font-extrabold mb-6">Job Details</h3>
                        <hr className="border border-indigo-200" />
                        <p className="flex gap-2 items-center my-2"><span className="text-indigo-600 font-extrabold text-xl"><AiOutlineDollar /></span><span className="text-xl font-medium">Salary:</span><span className="text-lg text-gray-500 font-medium">{job.salary}</span></p>
                        <p className="flex gap-2 items-center"><span className="text-indigo-600 font-extrabold text-xl"><SlCalender /></span><span className="text-xl font-medium">Job Title:</span><span className=" text-gray-500 font-medium">{job.job_title}</span></p>
                        <h4 className="text-xl font-extrabold my-4">Contact Information</h4>
                        <hr className="border border-indigo-200" />
                        <p className="flex gap-2 items-center text-xl my-2"><span><FiPhone /></span> Phone: <span>{job.contact_information.phone}</span></p>
                        <p className="flex gap-2 items-center text-xl my-2"><span><HiOutlineMail /></span> Email: <span>{job.contact_information.email}</span></p>
                        <p className="flex gap-2 text-xl"><span className="flex"><HiOutlineLocationMarker /> Address: </span><span>{job.contact_information.address}</span></p>
                    </div>
                    <button onClick={handleApplyJob} className="btn text-white bg-gradient-to-r from-indigo-400 to-indigo-500 w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;