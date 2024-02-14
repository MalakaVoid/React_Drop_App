import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ProductImageSwiper.css';

export default function ProductImageSwiper({images}) {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
        <Swiper
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
           }}
            loop={true}
            modules={[Navigation]}
            className="product_card_image_swiper"
        >
            {images.map((item, index)=>{
                return <SwiperSlide><img src={item} /></SwiperSlide>
            })}
            <div ref={navigationPrevRef} className='previous' />
            <div ref={navigationNextRef} className='next' />
        </Swiper>
        </>
    );
}
