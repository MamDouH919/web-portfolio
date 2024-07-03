import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { memo, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, ExpandMore } from "@mui/icons-material";
import clsx from "clsx";
import { Fragment } from "react";
// import { useTranslation } from "react-i18next";
import { AiOutlineDashboard } from "react-icons/ai";

import { GoDash } from "react-icons/go";

import { withRouter } from "react-router-dom";
import HFWraper from "./WraperHeaderFooter";
// import { Globals } from "../Component/HOC/Classes/Globals";
// import { SecuredNavLink } from "../Component/HOC/CustomComponents/Secured";
// import Profile from "./NavDrawerProfile";
// import HFWraper from "./WraperHeaderFooter";

const PREFIX = "NavDrawer";

const classes = {
  root: `${PREFIX}-root`,
  bottomDrawer: `${PREFIX}-bottomDrawer`,
  dialog: `${PREFIX}-dialog`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  profile: `${PREFIX}-profile`,
  topList: `${PREFIX}-topList`,
  navLink: `${PREFIX}-navLink`,
  listItemFocus: `${PREFIX}-listItemFocus`,
  outline: `${PREFIX}-outline`,
  nestedListItem: `${PREFIX}-nestedListItem`,
  navIcon: `${PREFIX}-navIcon`,
  navSubItem: `${PREFIX}-navSubItem`,
  renewalStyle: `${PREFIX}-renewalStyle`,
};

const drawerWidth = 260;

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
  },

  [`& .${classes.bottomDrawer}`]: {
    [theme.breakpoints.down("sm")]: {
      width: "auto !important",
      height: "100%",
    },
  },

  [`& .${classes.dialog}`]: {
    minWidth: "325px",
  },

  [`& .${classes.drawer}`]: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  [`& .${classes.drawerPaper}`]: {
    zIndex: 1090,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
    "& .MuiList-padding": {
      padding: 0,
    },
    // overflow: "hidden"
  },
  [`& .${classes.renewalStyle}`]: {
    top: 48,
    height: "calc(100% - 48px)",
  },

  [`& .${classes.profile}`]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    "& a": {
      color: theme.palette.text.secondary + "!important",
      textDecoration: "none",
    },
  },

  [`& .${classes.topList}`]: {
    "&:hover": {
      overflowY: "auto",
    },
    overflow: "hidden",
    height: "100vh",
    "& .MuiListItemIcon-root": {
      minWidth: theme.spacing(4),
    },

    textTransform: "capitalize",
  },

  [`& .${classes.navLink}`]: {
    textDecoration: "none",
    color: theme.palette.text.primary + "!important",
    "& svg": {
      color: theme.palette.text.secondary + "!important",
    },
    "&:hover": {
      color: theme.palette.text.primary + "!important",
    },
  },

  [`& .${classes.listItemFocus}`]: {
    color: `${theme.palette.primary.main}!important`,
    "& svg": {
      color: theme.palette.primary.main,
    },
  },

  [`& .${classes.outline}`]: {
    fontFamily: "Material Icons Outlined",
  },

  [`& .${classes.nestedListItem}`]: {
    paddingLeft: theme.spacing(4),
  },

  [`& .${classes.navIcon}`]: {
    fontSize: 20,
    color: "inherit",
  },

  [`& .${classes.navSubItem}`]: {
    minWidth: "20px !important",
  },
}));

const NavDrawer = (props) => {
  const { navDrawer, handleDrawerClose, drawerAnchor, top } = props;
  let collapseOpened = useRef(true);
  // const { t } = useTranslation();
  const theme = useTheme();
  const storeNavLinkIndex = (index) =>
    localStorage.setItem("activeNavLink", index);

  const [nestedList, setNestedList] = useState({});
  const handleNestedNavLink = (type) => {
    storeNavLinkIndex(type);
    setNestedList((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const linksList = [
    {
      pathname: "/admin",
      exact: true,
      icon: AiOutlineDashboard,
      primary: "dashboard"
    },
  ];

  return (
    <Root>
      <Drawer
        // sx={{ visibility: !token ? "hidd/en" : undefined }}
        className={clsx(classes.drawer, {
          [classes.bottomDrawer]: navDrawer[drawerAnchor],
        })}
        variant="persistent"
        anchor={drawerAnchor}
        open={navDrawer[drawerAnchor]}
        onClose={() => handleDrawerClose()}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.bottomDrawer]: navDrawer[drawerAnchor],
            [classes.renewalStyle]: Boolean(top),
          }),
        }}
      >
        <HFWraper />
        <Divider />

        {/* <div className={classes.profile}>
          <Profile profileData={Globals.user} />
        </div> */}
        <List className={classes.topList}>
          {linksList.map((link, index) => {
            if (!link.children) {
              return (
                <ListItem
                  button
                  onClick={() => {
                    drawerAnchor === "bottom" && handleDrawerClose();
                  }}
                >
                  <ListItemIcon className={classes.navIcon}>
                    <link.icon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography={true}
                    primary={link.primary}
                  />
                </ListItem>
              );
            } else {
              if (
                +localStorage.getItem("activeNavLink") === index &&
                collapseOpened.current
              ) {
                nestedList[index] = true;
                collapseOpened.current = false;
              }
              return (
                <Fragment key={index}>
                  <ListItem button onClick={() => handleNestedNavLink(index)}>
                    <ListItemIcon>
                      <link.icon className={classes.navIcon} />
                    </ListItemIcon>
                    <ListItemText
                      disableTypography={true}
                      primary={link.primary}
                    />
                    {nestedList[index] ? (
                      <ExpandMore />
                    ) : theme.direction === "ltr" ? (
                      <ChevronRight />
                    ) : (
                      <ChevronLeft />
                    )}
                  </ListItem>
                  <Collapse
                    key={index}
                    in={nestedList[index] ?? false}
                    timeout="auto"
                    unmountOnExit
                  >
                    {link.children.map((child, i) => {
                      return (
                        <ListItem
                          className={classes.nestedListItem}
                          button
                          onClick={() => {
                            child?.action && child.action();
                            storeNavLinkIndex(index);
                            drawerAnchor === "bottom" &&
                              handleDrawerClose();
                          }}
                        >
                          <ListItemIcon className={classes.navSubItem}>
                            <GoDash />
                          </ListItemIcon>
                          <ListItemText
                            disableTypography={true}
                            primary={child.primary}
                          />
                        </ListItem>
                      );
                    })}
                  </Collapse>
                </Fragment>
              );
            }
          })}
        </List>
      </Drawer>
    </Root>
  );
};

export default withRouter(memo(NavDrawer));
