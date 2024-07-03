import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import PropTypes from "prop-types";

const PREFIX = 'SectionWrapper';
const classes = {
    title: `${PREFIX}-title`,
    subTitle: `${PREFIX}-subTitle`,
    children: `${PREFIX}-children`,
    lineWrapper: `${PREFIX}-lineWrapper`,
    line: `${PREFIX}-line`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    padding: theme.spacing(10, 0),
    display: "flex",
    flexDirection: "column",
    [`& .${classes.title}`]: {
        color: theme.palette.primary.main,
        textAlign: "center",
    },
    [`& .${classes.subTitle}`]: {
        color: "gray",
        textAlign: "center",
        marginTop: theme.spacing(0.1),
        width: "75%",
        margin: "auto"
    },
    [`& .${classes.children}`]: {
        marginTop: theme.spacing(5)
    },
    [`& .${classes.lineWrapper}`]: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(1)
    },
    [`& .${classes.line}`]: {
        height: "3px",
        width: "50px",
        background: theme.palette.primary.main,

    },

}));
function SectionWrapper(props) {
    return (
        <Root sx={{ background: props.background }}>
            {props.title && <Typography variant='h3' className={classes.title}>{props.title}</Typography>}
            {props.subTitle && <Typography variant='subtitle1' className={classes.subTitle}>{props.subTitle}</Typography>}
            {(props.title || props.subTitle) && <div className={classes.lineWrapper}>
                <div className={classes.line}></div>
            </div>}
            <Box className={classes.children} >
                {props.children}
            </Box>
        </Root>
    )
}


SectionWrapper.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    background: PropTypes.string,
};

export default SectionWrapper;