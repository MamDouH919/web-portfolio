import { Alert, Button, Collapse, Grid, IconButton, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { memo, useEffect, useState } from "react";

import { Menu } from "@mui/icons-material";
import clsx from "clsx";
// import NavDrawer from "./NavDrawer";

import { withRouter } from "react-router";
// import { Can } from "../Component/HOC/CustomComponents/Secured";
import useWidth, { isWidthDown, isWidthUp } from "../../Hooks/useWidth";
import Footer from "./Footer";
import withUserDataLoader from "../../Hooks/UserData";
// import { useTranslation } from "react-i18next";
import CloseIcon from '@mui/icons-material/Close';
import NavDrawer from "./NavDrawer";
import HeaderDashboard from "./HeaderDashboard";
// import { Globals } from "../Component/HOC/Classes/Globals";

const PREFIX = "LayoutWithDrawer";

const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  drawerHeader: `${PREFIX}-drawerHeader`,
  lang: `${PREFIX}-lang`,
  contentWrapper: `${PREFIX}-contentWrapper`,
  content: `${PREFIX}-content`,
  contentShift: `${PREFIX}-contentShift`,
  renewalContainer: `${PREFIX}-renewalContainer`,
};

const drawerWidth = 240;

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    position: "relative",
    // transition: "all 1s",
  },

  [`& .${classes.appBar}`]: {
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
  },

  [`& .${classes.drawerHeader}`]: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  [`& .${classes.lang}`]: {
    marginLeft: theme.spacing(1),
  },

  [`& .${classes.contentWrapper}`]: {
    flexGrow: 1,
  },

  [`& .${classes.content}`]: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: -drawerWidth,
    },
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  [`& .${classes.contentShift}`]: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  },
  [`& .${classes.renewalContainer}`]: {
    width: "100%",
    position: "fixed",
    zIndex: 1068
  },
}));

const LayoutWithDrawer = (props) => {
  const screenWidth = useWidth();
  const isScreenLarge = isWidthUp("lg", screenWidth);
  const isScreenSmall = isWidthDown("xs", screenWidth);
  const drawerAnchor = isScreenSmall ? "bottom" : "left";
  const navDrawerOpen = localStorage.getItem("navDrawerOpen");
  // const { t } = useTranslation();

  const isNavDrawerOpen = isScreenSmall
    ? false
    : navDrawerOpen !== null
      ? navDrawerOpen === "true"
      : isScreenLarge;
  const [navDrawer, setNavDrawer] = useState({
    top: isNavDrawerOpen,
    left: isNavDrawerOpen,
    bottom: isNavDrawerOpen,
    right: isNavDrawerOpen,
  });

  useEffect(() => {
    if (!localStorage.getItem("firstOpen")) {
      localStorage.setItem("firstOpen", new Date());
    }

    return () => { };
  }, []);

  const toggleDrawer = (anchor, open) => {
    setNavDrawer((prev) => ({ ...prev, [anchor]: open }));
  };
  const drawerToggleButton = () => {
    toggleDrawer(drawerAnchor, !navDrawer[drawerAnchor]);
    localStorage.setItem("navDrawerOpen", !navDrawer[drawerAnchor]);
  };
  const handleDrawerClose = () => {
    toggleDrawer(drawerAnchor, false);
  };

  const MenuButton = () => {
    return (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={drawerToggleButton}
        edge="start"
        size={isScreenSmall ? "small" : "medium"}
        sx={{ p: 1 }}
      >
        <Menu fontSize="large" color="primary" />
      </IconButton>
    );
  };

  // const uesrCanSubsciption = Globals.user.hasPermission('shipping.settings.renew_subscription')
  // const [open, setOpen] = React.useState(uesrCanSubsciption && localStorage.getItem('renewalDateMsg') === "true");
  const [openRenewalDialog, setOpenRenewalDialog] = useState(false);
  const closeShipmentDialogHandler = () => {
    setOpenRenewalDialog(false);
  };

  return (
    <Root>
      <div className={classes.root} >
        <HeaderDashboard MenuButton={MenuButton} props={props} />

        <NavDrawer
          navDrawer={navDrawer}
          drawerAnchor={drawerAnchor}
          handleDrawerClose={handleDrawerClose}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: navDrawer[drawerAnchor],
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.contentWrapper}>
            {/* <Can permission={props.permission}> */}
            {props.children}
            {/* </Can> */}
          </div>
          <Footer />
        </main>
      </div>
    </Root>
  );
};

export default memo(
  withUserDataLoader(withRouter(LayoutWithDrawer))
);
