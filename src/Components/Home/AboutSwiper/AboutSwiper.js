import "../../../styles/aboutSwiper.css";
import imgs from './imgs.json'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid } from "swiper";

export default function AboutSwiper() {
    return (
        <div className="aboutSwiper">
            <Swiper
                loop="true"
                slidesPerView={6}
                grid={{
                    rows: 4,
                    fill: "row"
                }}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 1,
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 1,
                    },
                    "@1.00": {
                        slidesPerView: 4,
                        spaceBetween: 1,
                    },
                    "@1.50": {
                        slidesPerView: 6,
                        spaceBetween: 1,
                    },
                }}
                modules={[Grid]}
                className="mySwiper"
            >
                {imgs.map((element) =>
                    <SwiperSlide key={element.id}>
                        <img
                            src={require(`../../asset/img/aboutSwiper/${element.img}`)}
                            alt=""
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

