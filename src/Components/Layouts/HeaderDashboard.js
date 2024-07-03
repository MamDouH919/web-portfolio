import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import logo from '../../asset/img/logo.png'
import { Grid } from '@mui/material';
// import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Link as ScrollLink } from "react-scroll";


const drawerWidth = 240;

const PREFIX = 'Header';

const classes = {
    root: `${PREFIX}-root`,
    Toolbar: `${PREFIX}-Toolbar`,
    appBar: `${PREFIX}-appBar`,
    drawerHeader: `${PREFIX}-drawerHeader`,
    lang: `${PREFIX}-lang`,
    centerItems: `${PREFIX}-centerItems`,
    logoImg: `${PREFIX}-logoImg`,
    link: `${PREFIX}-link`,
    drawerLink: `${PREFIX}-drawerLink`,
    stickyHeader: `${PREFIX}-stickyHeader`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        display: "flex",
    },
    [`& .${classes.logoImg}`]: {
        maxHeight: 20,
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up('md')]: {
            maxHeight: 25
        },
    },
    [`& .${classes.Toolbar}`]: {
        padding: theme.spacing(0, 1),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0, 4)
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 15)
        },
    },
    [`& .${classes.appBar}`]: {
        boxShadow: "none",
        // position: "absolute",
        backgroundColor: 'white',
        transition: "all 1s",
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    [`& .${classes.drawerLink}`]: {
        color: "#000",
    },
}));
const HeaderDashboard = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [shouldShowHeader, setShouldShowHeader] = useState(false);
    const listenToScroll = () => {
        setShouldShowHeader(window.pageYOffset > 300);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Root>
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <img src={logo} alt="logo" className={classes.logoImg} />
                <Divider />
            </Box>
        </Root>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root className={classes.root}>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" className={clsx(classes.appBar, {
                    [classes.stickyHeader]: shouldShowHeader,
                })}>
                    <Toolbar className={classes.Toolbar}>
                        <Grid container justifyContent='space-between'>
                            <Grid display='flex' alignItems='center' color={"black"}>
                                <img src={logo} alt="logo" className={classes.logoImg} />
                            </Grid>

                        </Grid>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </Root>
    );
}

HeaderDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default HeaderDashboard;
