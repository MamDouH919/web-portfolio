import React from 'react'
import { styled } from '@mui/material/styles';
// import logo from '../asset/img/slide1.jpg'
import Hero from '../Components/Home/Hero/Hero';
import About from '../Components/Home/About/About';
import ContactForm from '../Components/Home/ContactForm/ContactForm';
import VideoContainer from '../Components/Home/VideoContainer/VideoContainer';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import Services from '../Components/Home/Services/Services';
import Projects from '../Components/Home/Projects/Projects';

const PREFIX = 'ContactForm';
const classes = {
    root: `${PREFIX}-root`,
    paper: `${PREFIX}-paper`,
    offer: `${PREFIX}-offer`,
    title: `${PREFIX}-title`,
    description: `${PREFIX}-description`,
    sliderContent: `${PREFIX}-sliderContent`,
    sliderContainer: `${PREFIX}-sliderContainer`,
    tabListContainer: `${PREFIX}-tabListContainer`,
    tab: `${PREFIX}-tab`,
    offerCard: `${PREFIX}-offerCard`,
    contact: `${PREFIX}-contact`,
    clientSuccess: `${PREFIX}-clientSuccess`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.paper}`]: {
        // margin: theme.spacing(4, 0),
        padding: theme.spacing(8, 4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 1),
        },
    },
    [`& .${classes.contact}`]: {
        padding: theme.spacing(8, 0),
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 0),
        },
        "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            // backgroundImage: `url(${logo})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            width: "100%",
            height: "350px",
        },
    },
    [`& .${classes.title}`]: {
        marginBottom: theme.spacing(4),
    },
    [`& .${classes.offer}`]: {
        backgroundColor: "#e0e0e0"
    },
    [`& .${classes.clientSuccess}`]: {
        backgroundColor: "#e0e0e0"
    },
    [`& .${classes.description}`]: {
        margin: theme.spacing(3, 0),
        opacity: 0.6,
        textAlign: 'center',
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    [`& .${classes.sliderContainer}`]: {
        width: '100%',
        height: '600px',
        position: "relative"
    },
    [`& .${classes.sliderContent}`]: {
        position: 'absolute',
        top: "50%",
        transform: "translateY(-50%)",
        left: 20,
        width: "70%",
        color: "white",
        [theme.breakpoints.up('sm')]: {
            left: 100,
            width: "60%",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
        "& .title": {
            textTransform: "uppercase",
            fontSize: '1.6rem',
            '@media (min-width:600px)': {
                fontSize: '1.9rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },
    },
    [`& .${classes.tabListContainer}`]: {
        display: "flex",
        justifyContent: 'center',
        "& .MuiTabs-flexContainer": {
            justifyContent: "center"
        },
    },
    [`& .${classes.tab}`]: {
        borderBottom: 1,
        transition: "all 1s",
        borderColor: 'divider',
        width: "33%",
        fontSize: '0.8rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
            width: "30%",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
            width: "20%",
        },
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
    },
    [`& .${classes.offerCard}`]: {
        margin: "2px",
        "& .card": {
            transition: "all 0.5s",
            height: "190px",
            backgroundColor: "#fff",
            padding: theme.spacing(3, 2),
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                cursor: "pointer",
            },
            "& .icon": {
                marginBottom: theme.spacing(2)
            },
            "& .icon svg": {
                display: "inline-block",
                width: "80px"
            },
            "& .icon img": {
                display: "inline-block",
                width: "80px"
            },
            "& .title": {
                fontWeight: 600,
                marginBottom: theme.spacing(1),
                lineHeight: 1.1
            },
            "& .description": {
                opacity: 0.6,
            },
            [theme.breakpoints.down('md')]: {
                height: "250px",
                textAlign: "center",
                padding: theme.spacing(1),
            },
        },
    },
}));

export default function Home() {
    return (
        <Root>
            <Header />
            <Hero />
            <About />
            <Services />
            <VideoContainer />
            <Projects />
            <ContactForm />
            <Footer />
        </Root>
    )
}
