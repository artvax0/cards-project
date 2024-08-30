import axios from 'axios'
const apiUrl = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

export const login = async (userLogin) => {
    try {
        return await axios.post(apiUrl + '/login', userLogin);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export const signup = async (signupInfo) => {
    try {
        return await axios.post(apiUrl, signupInfo);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export const getUserData = async (userId) => {
    try {
        return await axios.get(`${apiUrl}/${userId}`);
    } catch (error) {
        throw new Error(error.response.data);
    }
}