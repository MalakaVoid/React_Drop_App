import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperBanners.css';

// IMAGES
import banner1 from '../../assets/Banner.jpg';
import banner2 from '../../assets/banner2.jpg';
import arrowIcon from '../../assets/icons/arrow-icon.svg';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperBanners() {
    const slides = [
        {img: banner1},
        {img: banner2},
        {img: banner1},
        {img: banner2},
    ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +'</span>';
    },
  };

  return (
      <Swiper
        loop={true}
        pagination={pagination}
        modules={[Pagination]}
        className="custom_bunner_swiper"
      >
        {slides.map((slide)=>{
            return(
                <SwiperSlide>
                    <img src={slide.img}/>
                </SwiperSlide> 
            )
        })}
      </Swiper>
  );
}
