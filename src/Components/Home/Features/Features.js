import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Banner from "../../../asset/img/banner-bg.jpg"
import Dots from "../../../asset/img/dot.png"
import './Features.css'
import { data } from './data';

const PREFIX = 'Features';
const classes = {
    root: `${PREFIX}-root`,
    heroPaper: `${PREFIX}-heroPaper`,
    subTitleHero: `${PREFIX}-subTitleHero`,
    detailsHero: `${PREFIX}-detailsHero`,
    imgHero: `${PREFIX}-imgHero`,
    dots: `${PREFIX}-dots`,
    propPaper: `${PREFIX}-propPaper`,
    propIcons: `${PREFIX}-propIcons`,
    propDetails: `${PREFIX}-propDetails`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.heroPaper}`]: {
        display: "flex",
        minHeight: "660px",
        padding: theme.spacing(15, 4),
        height: "100%",
        backgroundImage: `url(${Banner})`,
        position: "relative",
        width: "100%",
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
            background: "linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1))",
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 1),
        },
    },
    [`& .${classes.propPaper}`]: {
        display: "flex",
        padding: theme.spacing(15, 4),
        height: "100%",
        position: "relative",
        width: "100%",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 1),
        },
    },
    [`& .${classes.propDetails}`]: {
        textAlign: "center",
        transition: "all .3s ease",
        "&:hover": {
            transform: "translate(0, -7px)",
        },
    },
    [`& .${classes.propIcons}`]: {
        color: theme.palette.primary.main,
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        boxShadow: "0 1rem 3rem rgba(31, 45, 61, .125)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginBottom: theme.spacing(2)
    },
    [`& .${classes.detailsHero}`]: {
        position: "relative",
        zIndex: 4,
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        },
    },
    [`& .${classes.dots}`]: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "400px",
        height: "100%",
        opacity: 0.5,
        backgroundImage: `url(${Dots})`,
    },
    [`& .${classes.imgHero}`]: {
        position: "relative",
        zIndex: 4,
        animation: "bounce 3s infinite ease-in-out",
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        },
    },
    [`& .${classes.subTitleHero}`]: {
        margin: theme.spacing(3, 0),
        // opacity: 0.6,
        fontSize: '1rem',
        color: "white",
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9rem',
        },
    },
}));
export default function Features() {
    return (
        <Root>
            <Box className={classes.propPaper}>
                <Container>
                    <Grid container spacing={5} justifyContent='center' alignItems="center">
                        <Grid md={12} item>
                            <Typography variant='h4' textAlign={"center"} fontWeight={600}>
                                Amazing Features
                            </Typography>
                        </Grid>
                        {data.map((item) =>
                            <Grid md={4} item key={item.id} className={classes.propDetails}>
                                <Typography variant='body1' className={classes.propIcons}>
                                    <item.icon size={40} />
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant='subtitle1' width="70%" margin={"auto"} >
                                    {item.desc}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        </Root>
    )
}
