import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings";
import Header from "./Header";
import Home from "./Pages/Home";
import IntlContext from "./Context/IntlContext";
import ThemeContext from "./Context/ThemeContext";
import { CssBaseline } from "@mui/material";

export default function App() {
    return (
        <IntlContext>
            <ThemeContext>
                <BrowserRouter>
                    <CssBaseline enableColorScheme />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContext>
        </IntlContext>
    );
}
