import { Box, Typography } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
            <Typography variant="h1">Hello World</Typography>
        </Box>
    );
}
