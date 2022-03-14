import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../Hooks/UseLocalStorage';

type AuthContext = {
    isAuthenticated(): boolean;
    setTarget(target: string): void;
    getTarget(): string;
    login(email: string, password: string): void;
    register(email: string, password: string): void;
    logout(): void;
}

export const Context = React.createContext({} as AuthContext);

export default function AuthContext(props: React.PropsWithChildren<unknown>) {
    const [token, setToken] = useLocalStorage("token", "");
    const [authenticated, setAuthenticated] = React.useState(false);
    const targetURL = React.useRef("");
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch('/rest/authenticated', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        }).then(response => response.json())
            .then(setAuthenticated);
    }, []);

    const loginOrRegister = (url: string, email: string, password: string) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(response => response.json())
            .then(setToken)
            .then(() => setAuthenticated(true))
            .then(() => navigate("/", { replace: true }))
    }

    const value = {
        isAuthenticated() {
            return authenticated;
        },
        setTarget(target: string) {
            targetURL.current = target;
        },
        getTarget() {
            return targetURL.current;
        },
        login(email: string, password: string) {
            loginOrRegister("/rest/login", email, password);
        },
        register(email: string, password: string) {
            loginOrRegister("/rest/register", email, password);
        },
        logout() {
            setAuthenticated(false);
            setToken("");
        }
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}