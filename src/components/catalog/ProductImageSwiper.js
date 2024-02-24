import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ProductImageSwiper.css';
import ArrowIcon from '../../assets/icons/ArrowIcon';

export default function ProductImageSwiper({product}) {
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
            {product.img.map((item, index)=>{
                return <SwiperSlide key={index}><a href='/'><img src={item} /></a></SwiperSlide>
            })}
            <div ref={navigationPrevRef} className='product_card_image_swiper_previous'><ArrowIcon /></div>
            <div ref={navigationNextRef} className='product_card_image_swiper_next'><ArrowIcon /></div>
        </Swiper>
        </>
    );
}
