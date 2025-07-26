import { useLoaderData } from "react-router";

const Jobs = () => {

    const jobs = useLoaderData();

    console.log(jobs);

    return (
        <div>Jobs</div>
    )
}

export default Jobs;