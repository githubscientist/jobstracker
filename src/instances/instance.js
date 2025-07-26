import axios from "axios";

// set the base URL for axios
const baseURL = 'https://685ac3af9f6ef9611157b188.mockapi.io/jobs';

// create an axios instance with the base URL
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// export the axios instance
export default instance;