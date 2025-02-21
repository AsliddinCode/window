import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperS(props) {
  const {imags} = props
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imags} alt="w" /></SwiperSlide>
        <SwiperSlide><img src={imags} alt="w" /></SwiperSlide>
        <SwiperSlide><img src={imags} alt="w" /></SwiperSlide>
        <SwiperSlide><img src={imags} alt="w" /></SwiperSlide>
      </Swiper>
    </>
  );
}