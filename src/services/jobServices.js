import instance from "../instances/instance";

const jobServices = {
    getJobs: async () => {
        try {
            const response = await instance.get('/');
            return response.data;
        } catch (error) {
            return { message: 'Failed to fetch jobs', error: error.message };
        }
    }
}

export default jobServices;