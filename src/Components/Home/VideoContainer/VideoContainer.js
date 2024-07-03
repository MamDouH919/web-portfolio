import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Banner from "../../../asset/img/bg-free.jpg"
import './VideoContainer.css'
import clsx from 'clsx';

const PREFIX = 'VIdeoContainer';
const classes = {
    root: `${PREFIX}-root`,
    Paper: `${PREFIX}-Paper`,
    subTitle: `${PREFIX}-subTitle`,
    marginBottom: `${PREFIX}-marginBottom`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.Paper}`]: {
        display: "flex",
        // minHeight: "660px",
        padding: theme.spacing(8, 0),
        height: "100%",
        backgroundImage: `url(${Banner})`,
        position: "relative",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        zIndex: 1,
        "&:before": {
            content: "''",
            position: "absolute",
            zIndex: "-1",
            top: 0,
            left: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            opacity: "0.9",
            // background: "linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1))",
        },
    },
    [`& .${classes.marginBottom}`]: {
        marginBottom: theme.spacing(3),
    },
    [`& .${classes.subTitle}`]: {
        margin: theme.spacing(3, 0),
        // opacity: 0.6,
        fontWeight: "normal",
        // fontSize: '2rem',
        color: "white",
        textAlign: "center",
        // '@media (min-width:600px)': {
        //     fontSize: '1rem',
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '0.9rem',
        // },
    },
}));
export default function VideoContainer() {
    return (
        <Root>
            <Box className={classes.Paper}>
                <Container>
                    <Grid container spacing={2} justifyContent='center' alignItems="center">
                        <Grid xs={12} md={8} item>
                            <Typography variant='h3' textAlign={"center"} color={"white"} fontWeight={600} className={classes.marginBottom}>
                                I Am Available For Freelancer.
                            </Typography>
                            <Typography variant='subtitle1' className={clsx(classes.subTitle, classes.marginBottom)}>
                                Browse hundreds of job offers and find the bestsuitable position.
                            </Typography>
                            {/* <img src={Watch} alt='watch' width={"100%"} /> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Root>
    )
}
