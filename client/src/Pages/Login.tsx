import { Box, Button, Paper, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

export default function Login() {
    const authContext = React.useContext(Context);
    const navigate = useNavigate();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        authContext.login(formData.get("email") as string, formData.get("password") as string);
    }

    const handleRegister = () => {
        navigate("/register", { replace: true });
    }

    return (
        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <Paper elevation={5} sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
                <TextField name="email" type={"email"} required label={<FormattedMessage id="email" />} />
                <TextField name="password" type={"password"} required label={<FormattedMessage id="password" />} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Button type="submit" variant="outlined">
                        <FormattedMessage id="login" />
                    </Button>
                    <Button variant="outlined" onClick={handleRegister}>
                        <FormattedMessage id="register" />
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}