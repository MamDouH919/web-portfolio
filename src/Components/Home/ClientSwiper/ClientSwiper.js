import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clientData from './clientData.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { styled } from '@mui/material/styles';
import "./clientSwiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { Box } from "@mui/material";

// const PREFIX = 'FooterSection';

// const classes = {
//     background: `${PREFIX}-background`,
//     container: `${PREFIX}-container`
// };

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .ClientSwiper`]: {
        "& .mySwiper": {
            "& .swiper-slide": {
                transition: "all 2s",
                opacity: 0.4
                // border: `1px solid ${theme.palette.primary.light}`,
            },
        },
        "& .swiper-button-prev": {
            color: theme.palette.primary.main
        },
        "& .swiper-button-next": {
            color: theme.palette.primary.main
        },
    },
    [`& .swiper-v`]: {
        "& .swiper-button-prev": {
            color: theme.palette.primary.main,
            left: 'calc(100% - 37px)',
            top: '96%',
            transform: 'rotate(-90deg)',
            "&::after": {
                fontSize: "35px"
            }
        },
        "& .swiper-button-next": {
            color: theme.palette.primary.main,
            right: '10px',
            top: '90%',
            transform: 'rotate(-90deg)',
            "&::after": {
                fontSize: "35px"
            }
        },
    },
    [`& .mySwiper2`]: {
        "& .clientAbout": {
            padding: theme.spacing(3),
            paddingTop: theme.spacing(8),
            textAlign: "left",
            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(1),
                paddingTop: theme.spacing(8),
            },
            "& .clientName": {
                fontWeight: 600,
                textTransform: "uppercase",
            },
            "& .clientdes": {
                marginTop: theme.spacing(2),
                fontSize: "15px"
            },
        },
        "& .swiper-pagination": {
            top: "90%",
            "& span": {
                transition: "all 2s",
                borderRadius: 0,
                width: "16px",
                height: "2px"
            },
            "& span.swiper-pagination-bullet-active": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
export default function ClientSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Root>
            <div className="ClientSwiper">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    speed={2000}
                    spaceBetween={10}
                    slidesPerView={5}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSlideChange={() => console.log('slide change')}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 4,
                        },
                        "@0.75": {
                            slidesPerView: 3,
                            spaceBetween: 6,
                        },
                        "@1.00": {
                            slidesPerView: 4,
                            spaceBetween: 8,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {clientData.map((ele) =>
                        <SwiperSlide key={ele.id} className="logoContainer">
                            <img src={require(`../../asset/${ele.folder}/${ele.logo}`)} alt={ele.folder} />
                        </SwiperSlide>
                    )}
                </Swiper>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                    }}
                    speed={2000}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="mySwiper2"
                >
                    {clientData.map((ele) =>
                        <SwiperSlide key={ele.id}>
                            <Swiper
                                className="mySwiper2 swiper-v"
                                direction={"vertical"}
                                spaceBetween={50}
                                speed={1000}
                                navigation={true}
                                modules={[Navigation]}
                            >
                                {ele.img.map((img, index) =>
                                    <SwiperSlide key={index}>
                                        <Box sx={{ display: "flex", height: "100%", width: '100%' }}>
                                            <Box sx={{ width: "75%", }}>
                                                <img src={require(`../../asset/${ele.folder}/${img}`)} alt={ele.folder} />
                                            </Box>
                                            <Box className="clientAbout" sx={{ width: "25%" }} >
                                                <div className="clientName">{ele.name}</div>
                                                <div className="clientdes">{ele.descri}</div>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </SwiperSlide>
                    )}
                </Swiper>

            </div >
        </Root>
    );
}


