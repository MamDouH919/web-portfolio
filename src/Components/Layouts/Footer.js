import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import config from '../../config.json'
import clsx from 'clsx'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './footerStyle.css'
import { BiCopyright } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi';
import theme from '../../theme';

const PREFIX = 'FooterSection';

const classes = {
    background: `${PREFIX}-background`,
    container: `${PREFIX}-container`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    background: '#80808024',
    [`& .${classes.background}`]: {
        margin: 0,
        "& li a": {
            "&:hover": {
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },
    [`& .${classes.container}`]: {
        // padding: theme.spacing(2,0),
        [theme.breakpoints.down('sm')]: {
            // padding: theme.spacing(0, 2),
            // flexDirection: "column"
        },
        [`& .info`]: {
            display: "flex",
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'center'
            },
        },
        [`& .social`]: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: "center"
            },
        },
    },
}));

export default function Footer() {
    return (
        <Root>
            <Container className={classes.container}>
                <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"} py={2}>
                    <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"}>
                        <BiCopyright />
                        <Typography ml={1} >All rights reserved to
                            <a href={config.originSite} target="_blank" rel="noopener noreferrer" style={{
                                color: theme.palette.primary.main,
                                margin: "0px 2px"
                            }}>
                                {config.originName}
                            </a>
                            2023</Typography>
                    </Stack>
                    <Stack>
                        <ul className={clsx(classes.background, "d-flex social")}>
                            {config.facebook && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.facebook}
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                            )}
                            {config.linkedIn && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.linkedIn}
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                            )}
                            {config.twitter && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.twitter}
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                            )}
                            {config.github && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.github}
                                    >
                                        <FiGithub />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </Stack>
                </Stack>
            </Container>
        </Root >
    )
}
