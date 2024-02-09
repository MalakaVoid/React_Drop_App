import './ProductCard.css';

export default function ProductCard({product_info}){

    return(
        <div className="product_card">
            <div className='product_card_image_wrapper'>
                <img src={product_info.img}/>
            </div>
            <h3 className='product_card_title'>{product_info.title}</h3>
            <p className='article'>{product_info.articul}</p>
            <hr />
            <div className='price'>{product_info.price}</div>
        </div>
    )
}