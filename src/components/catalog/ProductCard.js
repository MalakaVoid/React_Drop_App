import { useState } from 'react';
import './ProductCard.css';
import SizePicker from '../common/SizePicker';
import useWindowWidth from '../../hooks/useWindowWidth';
import HeartIcon from '../../assets/icons/HeartIcon';
import ProductImageSwiper from './ProductImageSwiper';

/*
    PRODCUT CARD FOR CATALOGUE
    @product_info{
                id: int,
                title: '',
                articul: '',
                price: new Intl.NumberFormat('ru-RU').format(),
                sizes: [],
                img: 
    }
*/ 

export default function ProductCard({product_info}){
    const windowWidth = useWindowWidth();

    if (windowWidth < 1025){
        return(
            <div className="product_card">
                <div className='product_card_image_wrapper'>
                    <ProductImageSwiper images={product_info.img}/>
                </div>
                <h3 className='product_card_title'>{product_info.title}</h3>
                <div className='product_card_buttons_wrapper'>
                    <a className='product_card_price_button'>{product_info.price} ₽</a>
                    <a className='product_card_favorite_button'><HeartIcon /></a>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="product_card">
                <div className='product_card_image_wrapper'>
                    <ProductImageSwiper images={product_info.img}/>
                </div>
                <h3 className='product_card_title'>{product_info.title}</h3>
                <p className='product_card_article'>{product_info.articul}</p>
                <div className='product_card_devider'/>
                <div className='product_card_price'>{product_info.price} ₽</div>
                <div className='product_card_openner'>
                    <div className='product_card_size_values'>
                        <SizePicker sizes={product_info.sizes} product_id={product_info.id} />
                    </div>
                </div>
            </div>
        )
    }
}