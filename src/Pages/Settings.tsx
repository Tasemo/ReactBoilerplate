import { FormControl, InputLabel, Select, MenuItem, Box, SelectChangeEvent, Switch, FormControlLabel } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Context as IntlContext } from "../Context/IntlContext";
import { Context as ThemeContext } from "../Context/ThemeContext";

export default function Settings() {
    const intlContext = React.useContext(IntlContext);
    const themeContext = React.useContext(ThemeContext);
    const [language, setLanguage] = React.useState("en")

    const onLanguageChange = (event: SelectChangeEvent) => {
        intlContext.switchLocale(event.target.value);
        setLanguage(event.target.value);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <FormControl variant="filled" sx={{ width: "20%" }}>
                <InputLabel id="languageLabel">
                    <FormattedMessage id="language" />
                </InputLabel>
                <Select labelId="languageLabel" value={language} onChange={onLanguageChange}>
                    <MenuItem value="en">
                        <FormattedMessage id="english" />
                    </MenuItem>
                    <MenuItem value="de">
                        <FormattedMessage id="german" />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel control={<Switch onChange={themeContext.switchDarkMode} />} label={<FormattedMessage id="darkMode" />} />
        </Box>
    );
}
