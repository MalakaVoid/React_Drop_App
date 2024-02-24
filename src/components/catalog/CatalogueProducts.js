import FiltersIcon from '../../assets/icons/FiltersIcon';
import CatalogueFiltersMenu from './CatalogueFiltersMenu';
import './CatalogueProducts.css';

import ProductCard from './ProductCard';


export default function CatalogueProducts({products}) {
    return(
        <section className='catalogue_products'>
            <div className='catalogue_products_title_bar'>
                <div className='catalogue_products_nav'>
                    <a href='/'>Главная</a>&nbsp;-&nbsp;
                    <a href='/catalogue' className='active'>Каталог</a>
                </div>
                <div className='catalogue_products_title'>
                    Каталог
                </div>
                <div className='catalogue_products_filters_wrapper'>
                    <CatalogueFiltersMenu />
                </div>
            </div>
            <div className='catalogue_products_wrapper'>
                {products.map((item, index)=>{
                    return <ProductCard key={index} product_info={item}/>
                })}
            </div>
        </section>
    )
}