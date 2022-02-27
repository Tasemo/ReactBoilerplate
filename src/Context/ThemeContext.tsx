import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import useLocalStorage from '../Hooks/UseLocalStorage';

type ThemeContext = {
    switchDarkMode(): void
    isInDarkMode(): boolean;
}

export const Context = React.createContext({} as ThemeContext);

export default function ThemeContext(props: React.PropsWithChildren<unknown>) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    const value = {
        switchDarkMode() {
            setDarkMode(!darkMode);
        },
        isInDarkMode() {
            return darkMode;
        }
    }

    return (
        <Context.Provider value={value} >
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ Context.Provider >
    );
}
