// COMPONENTS
import './Recomended.css';
// SWIPER
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductCardRecomendation from '../common/ProductCardRecomendation';





export default function Recomended({title, recomended_products}) {
    return(
        <div className="recomended">
            <div className='recomended_head'>
                <h3 className='recomended_title'>{title}</h3>
                <div className='recomended_more'><span className='recomended_more_mobile_delete'>Смотреть все</span>→</div>
            </div>
            <div className='cards-wrapper'>
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode]}
            className="cards_swiper"
            >
            {recomended_products.map((recomended_item)=>{
                return (<SwiperSlide key={recomended_item.id} className='cards_swiper_slide'><ProductCardRecomendation product_info={recomended_item}/></SwiperSlide>)
            })}
            </Swiper>
            </div>
        </div>
    )
}