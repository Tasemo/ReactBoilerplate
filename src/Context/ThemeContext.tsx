import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeContext = {
    switchDarkMode(): void
}

export const Context = React.createContext({} as ThemeContext);

export default function ThemeContext(props: React.PropsWithChildren<unknown>) {
    const [darkMode, setDarkMode] = React.useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    const switchDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Context.Provider value={{ switchDarkMode }} >
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ Context.Provider >
    );
}
