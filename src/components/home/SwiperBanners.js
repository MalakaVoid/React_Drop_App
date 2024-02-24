import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperBanners.scss';

import { slidesMobile, slidesDesctop } from '../../assets/TEST_DATA/BannersHome';

// import required modules
import { Pagination } from 'swiper/modules';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function SwiperBanners() {
  const windowWidth = useWindowWidth();
    const getBanners = ()=>{
      if (windowWidth < 650){ 
        return slidesMobile;
      }else{
          return slidesDesctop;
      }
    }

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
        {getBanners().map((slide, index)=>{
            return(
                <SwiperSlide key={index}>
                    <img src={slide.img}/>
                </SwiperSlide> 
            )
        })}
      </Swiper>
  );
}
