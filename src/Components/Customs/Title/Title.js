import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


const PREFIX = 'Title';
const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        display: "flex",
    },
    [`& .${classes.title}`]: {
        textTransform: 'uppercase',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    },
}));
export default function Title(props) {
    return (
        <Root>
            <Typography
                {...props}
                variant='h3'
                className={classes.title}
            >
                {props.title}
            </Typography>
        </Root>
    )
}
