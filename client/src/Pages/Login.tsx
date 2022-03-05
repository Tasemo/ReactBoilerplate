import { Box, Button, Paper, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import { FormattedMessage } from "react-intl";
import { Context } from "../Context/AuthContext";

export default function Login() {
    const authContext = React.useContext(Context);

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        authContext.login(formData.get("email") as string, formData.get("password") as string);
    }

    return (
        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <Paper elevation={5} sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
                <TextField name="email" type={"email"} required label={<FormattedMessage id="email" />} />
                <TextField name="password" type={"password"} required label={<FormattedMessage id="password" />} />
                <Button type="submit" variant="outlined">
                    <FormattedMessage id="login" />
                </Button>
            </Paper>
        </Box>
    );
}