import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { FormattedMessage } from "react-intl";

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <>
            <AppBar position="sticky" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        <FormattedMessage id="title" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" onClose={toggleDrawer} open={open}>
                <Toolbar />
                <List>
                    <ListItemButton component={Link} to={"/"} onClick={toggleDrawer}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="home" />
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton component={Link} to={"/settings"} onClick={toggleDrawer}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="settings" />
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
