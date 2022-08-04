import React, { Children, ReactNode } from "react";
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';


interface SlideProps {
    settings: SwiperProps
    children: ReactNode
}
export default function Slider({settings, children}: SlideProps){
    return(
        <Swiper modules={[Navigation, A11y]} {...settings}>{children}</Swiper>
    )
}