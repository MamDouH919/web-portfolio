import { Box, Button, Container } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import SectionWrapper from '../../Layouts/SectionWrapper';
import './Projects.css'
import { data } from './data'

const PREFIX = 'Projects';
const classes = {
    wrapper: `${PREFIX}-wrapper`,
    item: `${PREFIX}-item`,
    content: `${PREFIX}-content`,
    name: `${PREFIX}-name`,
    button: `${PREFIX}-button`,

};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.wrapper}`]: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flexWrap: "wrap"
    },
    [`& .${classes.item}`]: {
        position: "relative",
        margin: theme.spacing(2, 4),
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "#fafafa",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1, 1),
        },
        "&:before": {
            content: "''",
            position: "absolute",
            inset: "-20px 0px",
            background: `linear-gradient(315deg,${theme.palette.primary.contrastText},${theme.palette.primary.dark})`,
            transition: "0.5s",
            animation: "animate 4s linear infinite",
        },
        "&:after": {
            content: "''",
            position: "absolute",
            inset: "2px",
            background: "white",
            borderRadius: "50%",
            zIndex: 1
        },
        "&:hover": {
            "&::before": {
                inset: "-10px 70px",
            },
            [`& .${classes.content}`]: {
                "& img": {
                    opacity: 0.1
                }
            },
            [`& .${classes.name}`]: {
                opacity: 1
            },
            [`& .${classes.button}`]: {
                opacity: 1
            },
        },
    },
    [`& .${classes.content}`]: {
        position: "absolute",
        inset: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        zIndex: 3,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
            transition: "0.5s",
            pointerEvents: "none",
        }
    },
    [`& .${classes.name}`]: {
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        transition: "0.5s",
        opacity: 0,
        marginBottom: theme.spacing(1)
    },
    [`& .${classes.button}`]: {
        transition: "0.5s",
        opacity: 0
    },
}));
export default function Projects() {

    const openLink = (link) => {
        console.log(link);
        window.open(link, "_blank");
    }
    return (
        <Root id='projects'>
            <SectionWrapper title={"Projects"} subTitle={"We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning"}>
                <Container>
                    <Box className={classes.wrapper}>
                        {data.map((el) =>
                            <Box className={classes.item} key={el.id}>
                                <Box className={classes.content}>
                                    <img src={el.img} alt='ll' />
                                    <Button variant="contained" size="medium" className={classes.button} onClick={() => openLink(el.link)}>{el.name}</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Container>
            </SectionWrapper>
        </Root >
    )
}
