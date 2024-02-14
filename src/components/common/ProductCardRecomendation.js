import { useState } from 'react';
import Button from './Button';
import './ProductCardRecomendation.css';
import SizePicker from './SizePicker';
import useWindowWidth from '../../hooks/useWindowWidth';
import HeartIcon from '../../assets/icons/HeartIcon';

/*
    PRODCUT CARD FOR RECOMENDATION (WITHOUT SWIPER IMAGE)
    @product_info{
                id: int,
                title: '',
                articul: '',
                price: new Intl.NumberFormat('ru-RU').format(),
                sizes: [],
                img: 
    }
*/ 

export default function ProductCardRecomendation({product_info}){
    const windowWidth = useWindowWidth();

    if (windowWidth < 1025){
        return(
            <div className="product_card_recomendation">
                <div className='product_card_recomendation_image_wrapper'>
                    <img src={product_info.img}/>
                </div>
                <h3 className='product_card_recomendation_title'>{product_info.title}</h3>
                <div className='product_card_recomendation_buttons_wrapper'>
                    <a className='product_card_recomendation_price_button'>{product_info.price} ₽</a>
                    <a className='product_card_recomendation_favorite_button'><HeartIcon /></a>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="product_card_recomendation">
                <div className='product_card_recomendation_image_wrapper'>
                    <img src={product_info.img}/>
                </div>
                <h3 className='product_card_recomendation_title'>{product_info.title}</h3>
                <p className='product_card_recomendation_article'>{product_info.articul}</p>
                <div className='product_card_recomendation_devider'/>
                <div className='product_card_recomendation_price'>{product_info.price} ₽</div>
                <div className='product_card_recomendation_openner'>
                    <div className='product_card_recomendation_size_values'>
                        <SizePicker sizes={product_info.sizes} product_id={product_info.id} />
                    </div>
                </div>
            </div>
        )
    }
}