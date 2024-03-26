import React, { useState, useContext, createContext } from "react";

export const AuthContext = createContext({
    auth: undefined,
    login: () => {},
    loginOut: () => {},
});


export function AuthProvider(props){
    const { children } = props;

    const [auth, setAuth] = useState(undefined);

    const login = (useData) => {
        setAuth(useData);
    }

    const loginOut = () => {
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        login,
        loginOut
    };

    return(
        <>
            <AuthContext.Provider value={valueContext}>
                { children }
            </AuthContext.Provider>
        </>
    )
}