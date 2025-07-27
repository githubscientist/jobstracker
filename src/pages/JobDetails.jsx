import { useLoaderData, useNavigate } from "react-router";

const JobDetails = () => {

    const job = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="text-center mt-4 mx-0 p-4">
            <div className="bg-gray-400 shadow-md rounded-lg p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">{job.position}</h2>
                <p className="mb-2"><strong>Company:</strong> {job.company}</p>
                <p
                    className={
                        job.status === 'Applied' ? 'text-blue-500 text-sm' :
                            job.status === 'Interview' ? 'text-yellow-500 text-sm' :
                                job.status === 'Offer' ? 'text-green-500 text-sm' :
                                    job.status === 'Rejected' ? 'text-red-500 text-sm' : ''
                    }
                ><strong>Status:</strong> {job.status}</p>
                <p className="mb-2"><strong>Notes:</strong> {job.notes}</p>
                <p className="mb-2"><strong>Applied on:</strong> {new Date(job.dateApplied).toLocaleDateString()}</p>
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"

                onClick={() => navigate(-1)}
            >Back</button>

            <button
                className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => navigate(`/update/${job.id}`)}
            >Update</button>
        </div>
    )
}

export default JobDetails;