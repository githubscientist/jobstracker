import { Link } from "react-router";

const Job = ({ job }) => {
    return (
        <Link
            to={`/jobs/${job.id}`}
        >
            <div key={job.id} className="bg-gray-400 p-4 rounded shadow hover:shadow-lg transition-shadow text-white">
                <h2 className="text-xl font-semibold">{job.position}</h2>
                <p>{job.company}</p>
                <p
                    className={
                        job.status === 'Applied' ? 'text-blue-500 text-sm' :
                            job.status === 'Interview' ? 'text-yellow-500 text-sm' :
                                job.status === 'Offer' ? 'text-green-500 text-sm' :
                                    job.status === 'Rejected' ? 'text-red-500 text-sm' : ''
                    }
                >{job.status}</p>
                <p className="mt-2">{job.notes}</p>
                <p className="mt-2 text-sm">Applied on: {new Date(job.dateApplied).toLocaleDateString()}</p>
            </div>
        </Link>
    )
}

export default Job;