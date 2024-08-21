import {jwtDecode} from "jwt-decode";
const TOKEN = 'tlokern';

export const setTokenInLocalStorage = (token) => localStorage.setItem(TOKEN, token);

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
    try {
        const userToken = getToken();
        return jwtDecode(userToken);
    } catch (error) {
        return null;
    }
}