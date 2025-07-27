import jobServices from "../services/jobServices";

const jobLoader = async ({ params }) => {
    try {
        const job = await jobServices.getJobById(params.jobId);
        return job;
    } catch (error) {
        return {};
    }
}

export default jobLoader;