import HeartIcon from "../../assets/icons/HeartIcon";
import ImageSwiper from "./ImageSwiper";
import './ProductContent.scss';

export default function ProductContent({product_info}) {
    return(
        <div className="product">
            <div className='product_nav_bar'>
                <div className='product_nav_bar_links'>
                    <a href='/'>Главная</a>
                    &nbsp;-&nbsp;
                    <a href='/'>Каталог</a>
                    &nbsp;-&nbsp;
                    <a href='/'>Платья</a>
                    &nbsp;-&nbsp;
                    <a href='/catalogue' className='active'>Черное платье</a>
                </div>
            </div>
            <div className="product_wrapper">
                <div className="product_images">
                    <ImageSwiper images={product_info.img}/>
                </div>
                <div className="product_content">
                    <div className="product_title_bar">
                        <h2 className="product_title_bar_title">{product_info.title}</h2>
                        <span className="product_title_bar_article">{product_info.article}</span>
                    </div>
                    <div className="product_price">
                        {product_info.price} ₽
                    </div>
                    <div className="product_colors">

                    {
                        product_info.colors.map((color, index)=>{
                            let colorClass = "bg-" + color;
                            let isChecked = index == product_info.current_color;
                            return(
                                <label key={index} className="product_colors_item">
                                    <input type="radio" name="color" checked={isChecked} value={index}/>
                                    <a>
                                        <div style={{backgroundColor: color}}></div>
                                    </a>
                                </label>
                            )
                        })
                    }
                    </div>
                    <div className="product_size_title">Размер</div>
                    <div className="product_sizes">
                    {
                        product_info.sizes.map((size, index)=>{
                            return(
                                <label key={index} className="product_sizes_item">
                                    <input type="radio" name="size" value={index}/>
                                    <div>
                                        {size}
                                    </div>
                                </label>
                            )
                        })
                    }
                    </div>
                    <div>
                        <a className="product_size_link">
                            Таблица размеров
                        </a>
                    </div>
                    <div className="product_buttons_container">
                        <button className="product_button_to_cart">В КОРЗИНУ</button>
                        <div className="product_button_favourite">
                            <HeartIcon />
                        </div>
                    </div>

                    <hr className="product_divider" />

                    <div className="product_about">
                        <p className="product_about_title">О товаре</p>
                        <p className="product_about_description whitespace-pre-line" v-html="replaceWithBr()">
                            {product_info.description}
                        </p>
                    </div>
                    <div className="product_delivery">
                        <p className="product_delivery_title">Доставка</p>
                        <p className="product_delivery_description">
                            Бесплатная доставка при заказе от 4000 руб.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}