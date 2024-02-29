import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useWindowWidth from '../../hooks/useWindowWidth';
import './ImageSwiper.scss';
import ArrowIcon from '../../assets/icons/ArrowIcon';

export default function ImageSwiper({images}){
    const swiperRef = useRef(null);
    const prevImage = useRef(null);
    const nextImage = useRef(null);
    return(
        <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        spaceBetween={0}
        className="product_page_swiper"
        navigation={{
            nextEl: nextImage.current,
            prevEl: prevImage.current,
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = nextImage.current;
            swiper.params.navigation.prevEl = prevImage.current;
          }}
          modules={[Navigation]}
          loop={true}
        >
            {images.map((image, index)=>{
                return (
                    <SwiperSlide className='product_page_swiper_slide' key={index}>
                        <img src={image}/>
                    </SwiperSlide>
                )
            })}

            <div ref={prevImage} className='product_page_swiper_left'><ArrowIcon /></div>
            <div ref={nextImage} className='product_page_swiper_right'><ArrowIcon /></div>
        </Swiper>
    )
}