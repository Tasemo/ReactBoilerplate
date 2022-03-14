import { Box, Button, Paper, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

export default function Register() {
    const authContext = React.useContext(Context);
    const navigate = useNavigate();

    const handleRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        authContext.register(formData.get("email") as string, formData.get("password") as string);
    }

    const handleLogin = () => {
        navigate("/login", { replace: true });
    }

    return (
        <Box component="form" onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <Paper elevation={5} sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
                <TextField name="email" type={"email"} required label={<FormattedMessage id="email" />} />
                <TextField name="password" type={"password"} required label={<FormattedMessage id="password" />} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Button type="submit" variant="outlined">
                        <FormattedMessage id="register" />
                    </Button>
                    <Button variant="outlined" onClick={handleLogin}>
                        <FormattedMessage id="login" />
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}