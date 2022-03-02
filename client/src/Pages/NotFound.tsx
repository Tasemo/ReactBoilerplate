import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

export default function NotFound() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <Typography variant="h1">
                <FormattedMessage id="404" />
            </Typography>
        </Box>
    );
}
