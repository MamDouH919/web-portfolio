import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Banner from "../../../asset/img/banner2-bg.jpg"
import Dots from "../../../asset/img/dot.png"
import BannerImage from "../../../asset/img/home-font.png"
import './Hero.css'
import logo from '../../../asset/img/logo-banner.png'
import WhatsApp from '../../../asset/img/whatsapp-logo-4456.svg'
import Phone from '../../../asset/img/blue-phone-7152.svg'
import Linkedin from '../../../asset/img/blue-linkedin-logo-15916.svg'
import Github from '../../../asset/img/github-logo-6532.svg'

const PREFIX = 'Hero';
const classes = {
    root: `${PREFIX}-root`,
    heroPaper: `${PREFIX}-heroPaper`,
    subTitleHero: `${PREFIX}-subTitleHero`,
    detailsHero: `${PREFIX}-detailsHero`,
    imgHero: `${PREFIX}-imgHero`,
    dots: `${PREFIX}-dots`,
    heroTitle: `${PREFIX}-heroTitle`,
    imgWrapper: `${PREFIX}-imgWrapper`,
    imgShadow: `${PREFIX}-imgShadow`,
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
        // backgroundColor: "gray",
        background: "linear-gradient(0deg, #9b9797, #2f3863)",
        backgroundImage: `url(${Banner})`,
        position: "relative",
        width: "100%",
        zIndex: 1,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        "&:before": {
            content: "''",
            position: "absolute",
            zIndex: "-1",
            top: 0,
            left: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            opacity: "0.7",
            background: "linear-gradient(to right, rgb(0 0 0), rgb(175 175 175), rgb(255 255 255), rgb(169 165 165), rgb(0 0 0))",
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(12, 1),
        },

    },
    [`& .${classes.heroTitle}`]: {
        fontWeight: 600,
        lineHeight: 1.2,
        textTransform: "capitalize",

        // [theme.breakpoints.down('md')]: {
        //     fontSize: "30px",
        // },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: "30px",
        // },
    },
    [`& .${classes.detailsHero}`]: {
        position: "relative",
        zIndex: 4,
        // [theme.breakpoints.down('md')]: {
        textAlign: "center"
        // },
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 4,
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
        },
    },
    [`& .${classes.subTitleHero}`]: {
        color: theme.palette.primary.main,
    },
    [`& .${classes.imgShadow}`]: {
        background: "#888989",
        height: "20px",
        width: "350px",
        borderRadius: "50%",
        marginTop: "50px",
        animation: "bounceWidth 3s infinite ease-in-out",

        [theme.breakpoints.down('md')]: {
            width: "300px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "250px",
        },
    },
    [`& .${classes.imgWrapper}`]: {
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        backgroundImage: `url(${BannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        animation: "bounce 3s infinite ease-in-out",

        [theme.breakpoints.down('md')]: {
            width: "300px",
            height: "300px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "250px",
            height: "250px",
        },
    },
}));
export default function Hero() {
    return (
        <Root>
            <Box className={classes.heroPaper} id="home">
                <Container>
                    <Grid container spacing={2} justifyContent='center' alignItems="center" height={"100%"}>
                        <Grid xs={12} md={6} item className={classes.detailsHero}>
                            <Stack spacing={3}>
                                <Box>
                                    <img src={logo} alt='logo' width={"40%"} />
                                </Box>
                                <Typography variant='h6' color={"white"} className={classes.heroTitle}>
                                    Hi I'm Mamdouh Mohammed
                                </Typography>
                                <Typography variant='h3' className={classes.subTitleHero} >
                                    I'm a front-end developer
                                </Typography>
                                <a href={'/Mamdouh-Mohammed-cv.pdf'} download={"Mamdouh-Mohammed-cv"}>
                                    <Button variant="contained" size="large" sx={{ minWidth: "200px !important" }}>Download CV</Button>
                                </a>
                                <Stack direction={"row"} spacing={2} alignItems="center" justifyContent={"center"} useFlexGap flexWrap={"wrap"}>
                                    <a href="tel:+201157143609" className={classes.iconWrapper}>
                                        <img src={Phone} alt="WhatsApp" width={35} height={35} />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/+201157143609" className={classes.iconWrapper}>
                                        <img src={WhatsApp} alt="WhatsApp" width={35} height={35} />
                                    </a>
                                    <a href="https://github.com/MamDouH919" className={classes.iconWrapper}>
                                        <img src={Github} alt="Github" width={35} height={35} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mamdouh-mohammed/" className={classes.iconWrapper}>
                                        <img src={Linkedin} alt="Linkedin" width={35} height={35} />
                                    </a>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.imgHero}>
                            <Box className={classes.imgWrapper}>
                                {/* <img src={BannerImage} alt='BannerImage' width={"100%"} /> */}
                            </Box>
                            <Box className={classes.imgShadow}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                {/* <div className={classes.dots}></div> */}
            </Box>
        </Root>
    )
}
