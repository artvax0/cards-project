import React, { createContext, useContext, useEffect, useState } from 'react'
import { getToken, getUser } from '../services/localStorageService';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(getUser());
    const [token, setToken] = useState(getToken());

    useEffect(() => {
        if (!user) {
            const userFromLocalStorage = getUser();
            if (userFromLocalStorage) setUser(userFromLocalStorage);
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}

export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useData must be within provider');
    }
    return context;
}