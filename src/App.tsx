import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings";
import Header from "./Header";
import Home from "./Pages/Home";
import IntlContext from "./Context/IntlContext";
import ThemeContext from "./Context/ThemeContext";
import { CssBaseline } from "@mui/material";
import AuthRoute from "./Context/AuthRoute";
import Login from "./Pages/Login";
import AuthContext from "./Context/AuthContext";
import NotFound from "./Pages/NotFound";

export default function App() {
    return (
        <IntlContext>
            <ThemeContext>
                <BrowserRouter>
                    <AuthContext>
                        <CssBaseline enableColorScheme />
                        <Header />
                        <Routes>
                            <Route path="/" element={
                                <AuthRoute>
                                    <Home />
                                </AuthRoute>} />
                            <Route path="/settings" element={
                                <AuthRoute>
                                    <Settings />
                                </AuthRoute>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AuthContext>
                </BrowserRouter>
            </ThemeContext>
        </IntlContext>
    );
}
