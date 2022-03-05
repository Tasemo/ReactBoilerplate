import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../Hooks/UseLocalStorage';

type AuthContext = {
    isAuthenticated(): boolean;
    setTarget(target: string): void;
    getTarget(): string;
    login(email: string, password: string): void;
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
            fetch('/rest/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then(response => response.json())
                .then(token => {
                    setAuthenticated(true)
                    setToken(token);
                    navigate("/", { replace: true })
                })
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