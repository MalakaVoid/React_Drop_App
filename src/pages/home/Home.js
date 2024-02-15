// IMAGES
import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';
// COMPONENTS
import SwiperBanners from '../../components/home/SwiperBanners.js';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import CategoriesBlocks from '../../components/home/CategoriesBlocks.js';
import Recomended from '../../components/home/Recomended.js';
// CSS
import './style.css';

const recomended_items = [
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

export default function Home() {
  return (
    <>
      <Header />
      <section className="banners">
        <SwiperBanners />
      </section>
      <section className='home_categoroes'>
        <CategoriesBlocks />
      </section>
      <section className='recomended_section'>
        <Recomended recomended_products={recomended_items} title='Вечерние платья'/>
      </section>
      <section className='recomended_section'>
        <Recomended recomended_products={recomended_items} title='Верхняя одежда'/>
      </section>
      <Footer />
    </>
  );
}
