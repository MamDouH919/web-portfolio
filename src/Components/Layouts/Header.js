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
import { Container, Grid, ListItemIcon } from '@mui/material';
// import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Link as ScrollLink } from "react-scroll";
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const drawerWidth = 240;
const navItems = [
    {
        id: '0',
        name: 'home',
        to: 'home',
        icon: CottageIcon
    },
    {
        id: '1',
        name: 'about me',
        to: 'aboutMe',
        icon: InfoIcon
    },
    {
        id: '2',
        name: 'services',
        to: 'services',
        icon: MiscellaneousServicesIcon
    },
    {
        id: '3',
        name: 'projects',
        to: 'projects',
        icon: AccountTreeIcon
    },
    {
        id: '4',
        name: 'contact me',
        to: 'contactMe',
        icon: ContactPhoneIcon
    },
];
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
    mainColor: `${PREFIX}-mainColor`,
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
        maxHeight: 40,
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up('md')]: {
            maxHeight: 40
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
        position: "absolute",
        backgroundColor: 'transparent',
        transition: "all 1s",
    },
    [`& .${classes.stickyHeader}`]: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 100,
        transition: "all 1s",
        backgroundColor: "#fff",
        color: "#fff",
        borderBottom: `1px solid ${theme.palette.divider}`,
        animationName: "$animationFade",
        animationDuration: "1s",
        animationFillMode: "both",
        "& .logo": {
            color: "#000"
        }
    },
    [`& .${classes.link}`]: {
        display: "inline-block",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: 500,
        margin: theme.spacing(0, 2),
        color: "#fff",
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 1),
            // color: "#000",
        },
        "&:hover": {
            // color: theme.palette.primary.main,
            cursor: "pointer",
        },
    },
    [`& .${classes.drawerLink}`]: {
        color: "#000",
    },
    [`& .${classes.mainColor}`]: {
        color: theme.palette.primary.main,
    },
}));
const Header = (props) => {
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
                {/* <Typography variant="h6" color={"text.primary"}>mamdouh mohammed</Typography> */}
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ScrollLink className={clsx(classes.link, {
                            [classes.drawerLink]: shouldShowHeader,
                        })}
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            onClick={handleDrawerToggle}
                            duration={500}
                            key={item.id}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    {item.icon && <ListItemIcon>
                                        <item.icon className={classes.mainColor} />
                                    </ListItemIcon>}
                                    <ListItemText primary={item.name} sx={{ color: "#000" }} />
                                </ListItemButton>
                            </ListItem>
                        </ScrollLink>
                    ))}
                </List>
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
                        <Container>
                            <Grid container justifyContent='space-between'>
                                <Grid display='flex' alignItems='center' className="logo">
                                    {/* mamdouh mohammed */}
                                    <img src={logo} alt="logo" className={classes.logoImg} />
                                </Grid>
                                <Grid>
                                    <IconButton
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        className={clsx({
                                            [classes.drawerLink]: shouldShowHeader,
                                        })}
                                        sx={{ display: { sm: 'none' }, color: "#fff" }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Box alignItems='center' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                    {navItems.map((item) => (
                                        <ScrollLink className={clsx(classes.link, {
                                            [classes.drawerLink]: shouldShowHeader,
                                        })}
                                            activeClass="active"
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            key={item.id}>
                                            {item.name}
                                        </ScrollLink>
                                    ))}
                                </Box>
                            </Grid>
                        </Container>
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

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
