import FiltersIcon from '../../assets/icons/FiltersIcon';
import './CatalogueProducts.css';

import ProductCard from './ProductCard';

import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';

import redDress1 from '../../assets/Dreses/BlackDress/1.jfif';
import redDress2 from '../../assets/Dreses/BlackDress/2.jfif';
import redDress3 from '../../assets/Dreses/BlackDress/3.jfif';
import redDress4 from '../../assets/Dreses/BlackDress/4.jfif';
import redDress5 from '../../assets/Dreses/BlackDress/5.jfif';
import redDress6 from '../../assets/Dreses/BlackDress/6.jfif';
import redDress7 from '../../assets/Dreses/BlackDress/7.jfif';

import DarkDress4 from '../../assets/Dreses/DarkDress/1.jfif';
import DarkDress2 from '../../assets/Dreses/DarkDress/2.jfif';
import DarkDress3 from '../../assets/Dreses/DarkDress/3.jfif';
import DarkDress1 from '../../assets/Dreses/DarkDress/4.jfif';
import DarkDress5 from '../../assets/Dreses/DarkDress/5.jfif';
import DarkDress6 from '../../assets/Dreses/DarkDress/6.jfif';
import DarkDress7 from '../../assets/Dreses/DarkDress/7.jfif';

import RedDress4 from '../../assets/Dreses/RedDress/1.jfif';
import RedDress2 from '../../assets/Dreses/RedDress/2.jfif';
import RedDress3 from '../../assets/Dreses/RedDress/3.jfif';
import RedDress1 from '../../assets/Dreses/RedDress/4.jfif';
import RedDress5 from '../../assets/Dreses/RedDress/5.jfif';
import RedDress6 from '../../assets/Dreses/RedDress/6.jfif';
import RedDress7 from '../../assets/Dreses/RedDress/7.jfif';

import WhiteDress4 from '../../assets/Dreses/WhiteDress/1.jfif';
import WhiteDress2 from '../../assets/Dreses/WhiteDress/2.jfif';
import WhiteDress3 from '../../assets/Dreses/WhiteDress/3.jfif';
import WhiteDress1 from '../../assets/Dreses/WhiteDress/4.jfif';
import WhiteDress5 from '../../assets/Dreses/WhiteDress/5.jfif';
import WhiteDress6 from '../../assets/Dreses/WhiteDress/6.jfif';

const recomended_items_1 = [
    {
        id: 1,
        title: 'Хлопковое платье',
        articul: 'AR123AA',
        price: new Intl.NumberFormat('ru-RU').format(5999),
        sizes: ['XXS','XS', 'S', 'M', 'L', 'XL'],
        img: blueDress
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: redDress
    },
    {
        id: 3,
        title: 'Черный костюм',
        articul: 'DDSas221',
        price: new Intl.NumberFormat('ru-RU').format(9999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: costume
    },
    {
        id: 4,
        title: 'Бежевый трэнч',
        articul: 'ASDAS123S',
        price: new Intl.NumberFormat('ru-RU').format(13999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: palto
    },
    {
      id: 5,
      title: 'Спортивный костюм',
      articul: 'ASDAS3S',
      price: new Intl.NumberFormat('ru-RU').format(11999),
      sizes: ['XS', 'S', 'M', 'L', 'XL','XXL'],
      img: sport
    },
    {
      id: 6,
      title: 'Красное платье',
      articul: 'ASDAS123S',
      price: new Intl.NumberFormat('ru-RU').format(8999),
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      img: redDress
    },
  ];
  const recomended_items = [
    {
        id: 1,
        title: 'Хлопковое платье',
        articul: 'AR123AA',
        price: new Intl.NumberFormat('ru-RU').format(5999),
        sizes: ['XXS','XS', 'S', 'M', 'L', 'XL'],
        img: [redDress1, redDress2, redDress3, redDress4, redDress5, redDress6, redDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [RedDress1, RedDress2, RedDress3, RedDress4, RedDress5, RedDress6, RedDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [WhiteDress1, WhiteDress2, WhiteDress3, WhiteDress4, WhiteDress5, WhiteDress6, RedDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [DarkDress1, DarkDress2, DarkDress3, DarkDress4, DarkDress5, DarkDress6, DarkDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [RedDress1, RedDress2, RedDress3, RedDress4, RedDress5, RedDress6, RedDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [WhiteDress1, WhiteDress2, WhiteDress3, WhiteDress4, WhiteDress5, WhiteDress6, RedDress7]
    },
    {
        id: 2,
        title: 'Коктельное платье',
        articul: '12312AF2',
        price: new Intl.NumberFormat('ru-RU').format(7999),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        img: [DarkDress1, DarkDress2, DarkDress3, DarkDress4, DarkDress5, DarkDress6, DarkDress7]
    },
    
  ];

export default function CatalogueProducts() {
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
                    <div className='catalogue_products_filters'>
                        <FiltersIcon />
                    </div>
                </div>
            </div>
            <div className='catalogue_products_wrapper'>
                {recomended_items.map((item, index)=>{
                    return <ProductCard product_info={item}/>
                })}
            </div>
        </section>
    )
}