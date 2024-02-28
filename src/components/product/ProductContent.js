import HeartIcon from "../../assets/icons/HeartIcon";

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

                </div>
                <div className="product_content">
                    <div className="product_title_bar">
                        <h2 className="product_title_bar_title">{product_info.title}</h2>
                        <span className="product_title_bar_article">{product_info.article}</span>
                    </div>
                    <div className="product_price">
                        650 790 ₽
                    </div>
                    <div className="product_colors">
                        <label className="product_colors_item">
                            <input type="radio" name="" />
                            <div>
                                <div></div>
                            </div>
                        </label>
                    </div>
                    <div className="product_size_title">Размер</div>
                    <div className="product_sizes">
                        <label className="product_sizes_item">
                            <input type="radio" name="" />
                            <div>
                                XS
                            </div>
                        </label>
                    </div>
                    <div className="product_sizes_link">
                        Таблица размеров
                    </div>
                    <div className="product_buttons_container">
                        <button className="product_button_to_cart">В КОРЗИНУ</button>
                        <div className="product_button_favourite">
                            <HeartIcon />
                        </div>
                    </div>

                    <hr />
                </div>
            </div>
        </div>
    )
}