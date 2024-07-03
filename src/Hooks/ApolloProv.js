/* eslint-disable default-case */
import {
    ApolloClient,
    ApolloProvider,
    gql,
    InMemoryCache,
} from "@apollo/client";
import { Collapse } from "@mui/material";
import { createUploadLink } from "apollo-upload-client";
import React from "react";

import { ApolloLink } from "@apollo/client/link/core";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import * as gqlb from "gql-query-builder";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import config from "../config.json";
import { UserLogout } from "../Components/helpers/helpersFunction";
// import SystemDown from "../../Error/SystemDown";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
// import moment from "moment";

const cache = new InMemoryCache({
    addTypename: false,
});

const writequery = (graphQLErrors, networkError) => {
    return cache.writeQuery({
        query: gql`
        query error {
          graphQLErrors @client
          networkError @client
          hasError @client
        }
      `,
        data: {
            graphQLErrors: graphQLErrors || null,
            networkError: networkError || null,
            hasError: true,
        },
    });
};

let ACCOUNT_DISABLED;
let AUTHENTICATION;
let USER_LOGOUT;
let SUBSCRIPTION_EXPIRED;

const graphQLErrors = onError(
    ({ graphQLErrors, networkError, forward, response, operation }) => {
        const queryName =
            operation.query.definitions[0].selectionSet?.selections?.[0]?.name?.value;
        const ignorMsg = queryName !== "listMessages";
        if (networkError && ignorMsg) {
            writequery(null, networkError);
        }
        if (graphQLErrors && ignorMsg) {
            for (let err of graphQLErrors) {
                switch (err.extensions.code) {
                    case "INSTANCE_CODE_MISSING":
                    case "INVALID_INSTANCE_CODE":
                        UserLogout(USER_LOGOUT);
                        break;
                    case "ACCOUNT_DISABLED":
                    case "USER_DISABLED":
                        ACCOUNT_DISABLED(err);
                        return;
                    case "SUBSCRIPTION_EXPIRED":
                    case "SUBSCRIPTION_EXPIRED_RENEW":
                        SUBSCRIPTION_EXPIRED(err);
                        break;
                }
                if (err.message === "Unauthenticated.") {
                    AUTHENTICATION(err);
                    return;
                }
            }
            writequery(graphQLErrors, null);
        }
    }
);
const retryLink = new RetryLink({
    attempts: {
        max: 3,
        retryIf: (error, count, operation) => {
            return !!error;
        },
    },
    delay: {
        initial: 500,
        max: Infinity,
        jitter: true,
    },
});

// const multiInstance = config?.multiInstance;

let authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token");
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : "",
            // "Content-Language": Language,
            // "X-Client-Type": "WEB",
            // "X-Client-Name": osName + "-" + browserName,
            // "X-App-Version": pjson.version,
            // ...(multiInstance && { "X-Instance-Code": instanceCode }),
            // ...operation.getContext().headers,
        },
    });
    return forward(operation);
});

let getBackendUri = () => {
    const domain = config.backend.domain
        ? config.backend.domain
        : window.location.hostname;

    return `${config.backend.protocol}://${domain}/${config.backend.path}`;
};

const uploadLink = createUploadLink({ uri: getBackendUri });
const client = new ApolloClient({
    cache,
    link: ApolloLink.from([authLink, retryLink, graphQLErrors, uploadLink]),
});

export const HAND_SHAKE = gqlb.query([{
    operation: "errors",
    fields: ["code"],
    variables: {},
}]);
const LoadingElement = document.getElementById("main-load");

function withApolloProvider(Component) {
    function WithApolloProvider(props) {
        const { enqueueSnackbar } = useSnackbar();
        // const { t } = useTranslation();
        const history = useHistory();

        const afterLogout = () => {
            history.push({
                pathname: "/login",
                state: {
                    unAuthenticated: true,
                    prevUrl: `${history.location.pathname}${window.location.search}`,
                },
            });
        };

        const authError = (error, authentication) => {
            const token = localStorage.getItem("token");
            const errorMsg =
                authentication && token ? "unauthentication" : error.message;
            // if (localStorage.getItem("token")) {
            enqueueSnackbar(errorMsg, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                },
                TransitionComponent: Collapse,
            });
            UserLogout(afterLogout);
            // }
        };

        ACCOUNT_DISABLED = (error) => authError(error);
        AUTHENTICATION = (error) => authError(error, true);
        USER_LOGOUT = afterLogout;

        const handshakeLoaded = () => {
            LoadingElement?.remove();
            return (
                <Component {...props} />
            );
        };

        return (
            <ApolloProvider client={client}>
                {handshakeLoaded()}
            </ApolloProvider>
        );
    }

    return WithApolloProvider;
}

export default withApolloProvider;
