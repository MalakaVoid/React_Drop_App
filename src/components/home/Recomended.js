// IMAGES
import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';
// COMPONENTS
import './Recomended.css';
// SWIPER
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductCard from '../common/ProductCard';

const recomended_items = [
    {
        id: 1,
        title: 'Юбка женская',
        articul: 'AR123AA',
        price: 131313,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: blueDress
    },
    {
        id: 2,
        title: 'Юбка женская',
        articul: 'Юбка женская',
        price: 131313,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: redDress
    },
    {
        id: 1,
        title: 'Юбка женская',
        articul: 'Юбка женская',
        price: 131313,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: costume
    },
    {
        id: 1,
        title: 'Юбка женская',
        articul: 'Юбка женская',
        price: 131313,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: palto
    },
];




export default function Recomended() {
    return(
        <div className="recomended">
            <div className='recomended_head'>
                <h3 className='recomended_title'>ВЕРХНЯЯ ОДЕЖДА</h3>
                <div className='recomended_more'>Смотреть все→</div>
            </div>
            <div className='cards-wrapper'>
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode]}
            className="cards_swiper"
            >
                <SwiperSlide><ProductCard product_info={recomended_items[0]}/></SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}