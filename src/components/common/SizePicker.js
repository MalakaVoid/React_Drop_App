import { useState } from 'react';
import './SizePicker.css';

export default function SizePicker({sizes, product_id}){
    const addToCart = function(size) {
        console.log(size);
        console.log(product_id);
    }

    return(
        <div className='custom_size_picker'>
            <span>КУПИТЬ</span>
            {sizes.map((size_text)=>{
                return (
                    <div onClick={()=>addToCart(size_text)} className='custom_size_picker_element'>
                        {size_text}
                    </div>
                );
            })}
        </div>
    )
}