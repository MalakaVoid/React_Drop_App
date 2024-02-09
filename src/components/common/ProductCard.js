import './ProductCard.css';

export default function ProductCard({product_info}){

    return(
        <div className="product_card">
            <div className='product_card_image_wrapper'>
                <img src={product_info.img}/>
            </div>
            <h3 className='product_card_title'>{product_info.title}</h3>
            <p className='product_card_article'>{product_info.articul}</p>
            <div className='product_card_devider'/>
            <div className='product_card_price'>{product_info.price} ₽</div>
        </div>
    )
}