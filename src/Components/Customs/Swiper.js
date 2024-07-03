import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "../../styles/swiper.css";

// import required modules
import { Autoplay, Navigation, Mousewheel, Keyboard, Parallax, FreeMode } from "swiper";
const PREFIX = 'Home';
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
};
const Root = styled('div')((
    {
        theme
    }
) => ({
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
}));
export default function SwiperBanner({ slides }) {
    return (
        <Root>
            <div className="banner">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={2000}
                    parallax={true}
                    cssMode={true}
                    mousewheel={true}
                    keyboard={true}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        type: "progressbar",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Mousewheel, Keyboard, Parallax, FreeMode]}
                    className="mySwiper"
                >
                    {slides.map((ele) => {
                        return (
                            <SwiperSlide key={ele.id}>
                                <Box className={classes.sliderContainer}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%", background: "#000", opacity: "0.6" }}></div>
                                    <div className={classes.sliderContent}>
                                        <div className="title">
                                            {ele.title}
                                        </div>
                                        <div className="text">
                                            <p>
                                                {ele.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                    <img src={require(`../../asset/img/${ele.img}`)} alt="back" height='100%' />
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Root>
    );
}
