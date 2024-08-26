import axios from 'axios'
import useAxios from '../hooks/useAxios';
const apiUrl = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

export const login = async (userLogin) => {
    try {
        const { data } = await axios.post(apiUrl + '/login', userLogin);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const signup = async (signupInfo) => {
    try {
        const { data } = await axios.post(apiUrl, signupInfo);
        return data;
    } catch (error) {
        console.error("Error making request:", error.message); // Log error message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received for the request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
        }
        throw new Error(error.message);
    }
}

export const getUserData = async (userId) => {
    console.log('Beginning API call getUserData');

    try {
        const { data } = await axios.get(`${apiUrl}/${userId}`);
        console.log('fetched: ' + data);
        return data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}