import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import './Services.css'
import { data } from './data';
import SectionWrapper from '../../Layouts/SectionWrapper';

const PREFIX = 'Services';
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
    heroTitle: `${PREFIX}-heroTitle`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.propDetails}`]: {
        textAlign: "center",
        transition: "all .3s ease",
        "&:hover": {
            transform: "translate(0, -7px)",
            boxShadow: "0 1rem 2rem rgba(31, 45, 51, .125)",
            borderRadius: "20px"
        },
    },
    [`& .${classes.detailsHero}`]: {
        position: "relative",
        zIndex: 4,
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        },
    },
}));


export default function Services() {
    return (
        <Root id='services'>
            <SectionWrapper title={"Services"} subTitle={"We do simple, useful and beautiful solutions."}>
                <Container>
                    <Grid container spacing={3} justifyContent='center' alignItems="center">
                        {data.map((item) =>
                            <Grid md={6} lg={4} item key={item.id} className={classes.propDetails}>
                                <Typography variant='body1' color={item.color} className={classes.propIcons}>
                                    <item.icon size={40} />
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant='subtitle1' width="70%" margin={"auto"}>
                                    {item.desc}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </SectionWrapper>
        </Root>
    )
}
