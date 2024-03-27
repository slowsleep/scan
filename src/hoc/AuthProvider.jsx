import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(false);

    const signIn = (accessToken, expire) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("expire", expire);
        setAuth(true);
    };
    
    const signOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expire");
        setAuth(false)
    };

    const value = {auth, signIn, signOut};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
}
