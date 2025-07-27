import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import jobServices from "../services/jobServices";

const JobUpdate = () => {

    const navigate = useNavigate();
    const job = useLoaderData();
    const [jobDetails, setJobDetails] = useState(job || {
        company: '',
        position: '',
        status: 'Applied',
        notes: ''
    });

    const handleUpdate = async (event) => {
        event.preventDefault();

        await jobServices.updateJobById(job.id, { company: jobDetails.company, position: jobDetails.position, status: jobDetails.status, notes: jobDetails.notes })
            .then(() => {
                alert('Job updated');

                setTimeout(() => {
                    navigate('/');
                }, 500);
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={jobDetails.company}
                            onChange={(e) => setJobDetails({ ...jobDetails, company: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Position
                        </label>
                        <input
                            type="text"
                            placeholder="Enter position title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={jobDetails.position}
                            onChange={(e) => setJobDetails({ ...jobDetails, position: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Status
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={jobDetails.status}
                            onChange={(e) => setJobDetails({
                                ...jobDetails, status: e.target.value
                            })}
                        >
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Notes
                        </label>
                        <textarea
                            placeholder="Enter any notes"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                            value={jobDetails.notes}
                            onChange={(e) => setJobDetails({
                                ...jobDetails,
                                notes: e.target.value
                            })}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Update Job
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobUpdate;