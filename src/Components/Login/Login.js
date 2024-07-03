import { Box, Button, Collapse, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import MUItextField from '../Customs/MUItextField';
import * as gqlb from "gql-query-builder";
import { gql, useMutation } from '@apollo/client';
import { CustomSpinner } from '../Customs/loading/LoadingButon';
import { LockOutlined } from '@mui/icons-material';
import { setValidationError } from '../CustomFunctions/setValidationError';
import { enqueueSnackbar } from 'notistack';
import { pushUrl } from "../CustomFunctions/pushUrl";


const PREFIX = 'Hero';
const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
    container: `${PREFIX}-container`,

};
const Root = styled('div')((
    {
        theme
    }
) => ({

    [`& .${classes.container}`]: {
        textAlign: "center"
    },
    [`& .${classes.title}`]: {
        color: theme.palette.primary.main
    },
}));
const LOGIN = gqlb.mutation({
    operation: "login",
    fields: ["token"],
    variables: {
        input: {
            type: "LoginInput",
            required: true,
        },
    },
});
export default function Login(props) {

    const {
        handleSubmit,
        control,
        register,
        setError,
        formState,
    } = useForm();
    const { errors } = formState;

    const [loginMutation, { loading }] = useMutation(
        gql`
          ${LOGIN.query}
        `
    );

    const onSubmit = async (datas) => {
        await loginMutation({
            variables: {
                input: {
                    phone: datas.phone.trim(),
                    password: datas.password,
                },
            },
        })
            .then((data) => {
                const login = data.data.login;
                const token = login.token;
                localStorage.setItem("token", token);
                const prevUrl = window.history.state?.state?.prevUrl;
                const unAuthenticated =
                    window.history.state?.state?.unAuthenticated &&
                    prevUrl !== "/login";
                pushUrl(props, unAuthenticated ? prevUrl : `/admin`);
                // }
            })
            .catch(({ graphQLErrors }) => {
                const errorCode = graphQLErrors[0]?.extensions?.code;
                if (errorCode === "INVALID_PHONE_NUMBER") {
                    // setDialog(true);
                    setValidationError(graphQLErrors, setError);
                } else if (
                    errorCode === "INVALID_CREDENTIALS"
                    // errorCode === "ACCOUNT_DISABLED" ||
                    // errorCode === "USER_DISABLED"
                ) {
                    enqueueSnackbar(graphQLErrors[0]?.message, {
                        variant: "error",
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right",
                        },
                        TransitionComponent: Collapse,
                    });
                }
            });
    };

    return (
        <Root>
            <Box className={classes.heroPaper} id="home">
                <Container>
                    <Grid container spacing={2} justifyContent='center' alignItems="center">
                        <Grid xs={12} md={6} item className={classes.container}>
                            <Typography variant='h3' className={classes.title}>
                                Login
                            </Typography>
                            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                                <Grid xs={12} alignItems="flex-start">
                                    <MUItextField
                                        control={control}
                                        errors={errors}
                                        name={"phone"}
                                        label="First Name"
                                        variant="outlined"
                                        register={register}
                                        // rules={{ required: "field Is Required" }}
                                    />
                                </Grid>

                                <Grid xs={12} alignItems="flex-start">
                                    <MUItextField
                                        control={control}
                                        errors={errors}
                                        name={"password"}
                                        label="Last Name"
                                        variant="outlined"
                                        register={register}
                                        // rules={{ required: "field Is Required" }}
                                    />
                                </Grid>
                                <Grid xs={12} justifyContent="center">
                                    <Button
                                        fullWidth
                                        className={classes.button}
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={loading}
                                        startIcon={
                                            loading && (
                                                <CustomSpinner
                                                    size={8}
                                                    css={{ fontSize: "10px !important" }}
                                                    name={"PulseLoader"}
                                                />
                                            ) 
                                            // : (
                                            //     <LockOutlined />
                                            // )
                                        }
                                    >
                                        {"login"}
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Root>
    )
}
