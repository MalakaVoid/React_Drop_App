import { useState } from 'react';
import Button from './Button';
import './ProductCard.css';
import SizePicker from './SizePicker';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function ProductCard({product_info}){
    const windowWidth = useWindowWidth();

    if (windowWidth < 1025){
        return(
            <div className="product_card">
                <div className='product_card_image_wrapper'>
                    <img src={product_info.img}/>
                </div>
                <h3 className='product_card_title'>{product_info.title}</h3>
                <div><a className='product_card_price_button'>{product_info.price} ₽</a></div>
            </div>
        )
    }
    else{
        return(
            <div className="product_card">
                <div className='product_card_image_wrapper'>
                    <img src={product_info.img}/>
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