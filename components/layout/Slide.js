import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import 'swiper/css';


function Slide() {
    const router = useRouter();
    return (
        <>
          <h1>TOP <span>12</span></h1>

          <Swiper>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>teste</h1>
            </SwiperSlide>
            
          </Swiper>
        </>
    );
}
export default Slide;
