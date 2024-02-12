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
import bannerMob from '../../assets/BannerMob.jpg';
import arrowIcon from '../../assets/icons/arrow-icon.svg';

// import required modules
import { Pagination } from 'swiper/modules';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function SwiperBanners() {
  const windowWidth = useWindowWidth();

    const slidesDesctop = [
        {img: banner1},
        {img: banner2},
        {img: banner1},
        {img: banner2},
    ]
    const slidesMobile = [
        {img: bannerMob},
        {img: banner2},
        {img: banner1},
        {img: banner2},
    ]

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
