import jobServices from "../services/jobServices";

const jobsLoader = async () => {
    try {
        const jobs = await jobServices.getJobs();
        return jobs;
    } catch (error) {
        return [];
    }
}

export default jobsLoader;