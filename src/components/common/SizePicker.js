import { useState } from 'react';
import './SizePicker.css';

/* 
    SIZE PICKER ON DESCTOP "BUY" BUTTON
    @
    sizes: [],
    product_id: int
*/


export default function SizePicker({sizes, product_id}){
    const addToCart = function(size) {
        console.log(size);
        console.log(product_id);
    }

    return(
        <div className='custom_size_picker'>
            <span>КУПИТЬ</span>
            {sizes.map((size_text, index)=>{
                return (
                    <div key={index} onClick={()=>addToCart(size_text)} className='custom_size_picker_element'>
                        {size_text}
                    </div>
                );
            })}
        </div>
    )
}