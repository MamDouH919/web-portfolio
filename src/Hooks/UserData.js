import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Grid, Box, Button, Typography } from "@mui/material";

// import logo from "../assets/Image/logo.png";
// import { Fragment } from "react";
// import { gql, useQuery } from "@apollo/client";
// import { User } from "../Component/HOC/Classes/User";
// import { USER_SETTINGS } from "./DashBoardGraphql";
// import CustomSpinner from "../Component/HOC/FunctionComponents/CustomSpinner";
// import { useTranslation } from "react-i18next";
// import { Globals } from "../Component/HOC/Classes/Globals";
import { useHistory } from "react-router";
import { Globals } from "./Classes/Globals";
import { USER } from "./GraphQl";
import { gql, useQuery } from "@apollo/client";
import { User } from "./Classes/User";
// import { SettingsData } from "../Component/HOC/Classes/SettingsData";
// import moment from "moment/moment";

const PREFIX = 'withUserDataLoader';

const classes = {
    loadingPage: `${PREFIX}-loadingPage`,
    errorMessage: `${PREFIX}-errorMessage`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.loadingPage}`]: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
    },

    [`& .${classes.errorMessage}`]: {
        marginTop: theme.spacing(2),
        display: "block",
    }
}));

function withUserDataLoader(Component) {
    const UserDataLoader = (props) => {

        // const { t } = useTranslation();
        const [loadingFinshed, setLoadingFinshed] = useState(false);
        const [loadingErorr, setLoadingError] = useState(false);
        const history = useHistory();
        useEffect(() => {
            const token = localStorage.getItem("token");
            if (!token) {
                history.push({
                    pathname: "/login",
                    state: {
                        unAuthenticated: true,
                        prevUrl: `${history.location.pathname}${window.location.search}`,
                    },
                });
                // replaceUrl(props, "/login");
                return;
            }
            return () => {
                setLoadingFinshed(false);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        useQuery(
            gql`
        ${USER.query}
      `,
            {
                fetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache",
                skip: Globals.user,
                variables: {
                    // input: {
                    //   main: true,
                    // },
                },
                onCompleted: (data) => {
                    const allData = data.me
                    Globals.setUser(new User(allData));
                    // Globals.branch = new Branch(data.settings["mainBranch"]);
                    setLoadingFinshed(true);
                },
                onError: (error) => {
                    const networkError = Object(error.networkError);
                    const errorExtensions = error?.graphQLErrors?.[0]?.extensions;
                    const category = errorExtensions?.category;
                    const versionNotSupportedError =
                        errorExtensions?.code === "VERSION_NOT_SUPPORTED";

                    //check ErrorHandler file and change the condation there too
                    if (
                        error?.networkError ||
                        (category &&
                            !["validation", "custom", "authorization"].includes(category)) ||
                        versionNotSupportedError
                    ) {
                        console.log(networkError.message);
                        setLoadingError(true);
                    } else {
                        console.log(networkError.message);
                        setLoadingFinshed(true);
                    }
                },
            }
        );

        return (
            <Root>
                {loadingFinshed ? (
                    <Component {...props} />
                ) : (
                    <Grid
                        container
                        alignContent="center"
                        justifyContent="center"
                        className={classes.loadingPage}
                    >
                        {/* <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            height={42}
                            sx={{ margin: "40px 100%" }}
                        /> */}
                        <Grid
                            sx={{
                                height: 80,
                                display: "flex",
                            }}
                        >
                            {!loadingErorr ? (
                                <div>load</div>
                            ) : (
                                <Box>
                                    <Typography>
                                        {"Network Error"}
                                    </Typography>
                                    <Grid item container justifyContent="center">
                                        <Button
                                            variant="outlined"
                                            onClick={() => window.location.reload()}
                                            color="primary"
                                            size="small"
                                            className={classes.errorMessage}
                                        >
                                            {"try Again"}
                                        </Button>
                                    </Grid>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                )}
            </Root>
        );
    };
    return UserDataLoader;
}
export default withUserDataLoader;
