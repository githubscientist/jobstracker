import { useLoaderData } from "react-router";
import Job from "../components/Job";

const Jobs = () => {

    const jobs = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-0 px-4">
                {
                    jobs.map((job) => (
                        <Job
                            key={job.id}
                            job={job}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Jobs;