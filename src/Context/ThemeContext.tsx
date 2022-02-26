import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const Context = React.createContext(() => { });

export default function ThemeContext(props: React.PropsWithChildren<{}>) {
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
        <Context.Provider value={switchDarkMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </Context.Provider >
    );
}
