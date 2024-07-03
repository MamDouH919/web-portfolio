import { Box } from '@mui/material'
import React from 'react'
import ReactLoading from "react-loading";
import AnimationPage from './AnimationPage';
import config from '../../../config.json'

const Preloader = () => {
    return (
        <AnimationPage>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <ReactLoading type={"bars"} color={config.primaryColor} />
            </Box>
        </AnimationPage>
    )
}

export default Preloader