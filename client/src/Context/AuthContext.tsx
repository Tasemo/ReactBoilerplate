import React from "react";
import { useNavigate } from "react-router-dom";

type AuthContext = {
    isAuthenticated(): boolean;
    login(email: string, password: string): void;
    logout(): void;
}

export const Context = React.createContext({} as AuthContext);

export default function AuthContext(props: React.PropsWithChildren<unknown>) {
    const [token, setToken] = React.useState("");
    const navigate = useNavigate();

    const value = {
        isAuthenticated() {
            return token != "";
        },
        login(email: string, password: string) {
            console.log(email + " with " + password);
            setToken("ValidToken");
            navigate("/");
        },
        logout() {
            setToken("");
        }
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}